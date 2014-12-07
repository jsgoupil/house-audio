// <copyright>
//     Copyright (c) Jean-Sébastien Goupil.
// </copyright>

namespace HouseAudio.Amplifier.AE6MC
{
    using System.Collections.Generic;
    using System.ComponentModel.Composition;
    using System.Linq;
    using System.Threading.Tasks;
    using HouseAudio.AudioBase;

    /// <summary>
    /// AE6MC amplifier.
    /// </summary>
    [Export(typeof(IAmplifier))]
    public class AE6MC : IAmplifier
    {
        /// <summary>
        /// Number of available zones.
        /// </summary>
        internal const int NumberOfZones = 6;

        /// <summary>
        /// Number of available inputs.
        /// </summary>
        internal const int NumberOfInputs = 7;

        /// <summary>
        /// Control AE6MC class.
        /// </summary>
        private ControlAE6MC controlAmplifier;

        /// <summary>
        /// DB Context for AE6MC.
        /// </summary>
        private AE6MCContext context;

        /// <summary>
        /// Constructor.
        /// </summary>
        /// <param name="controlAmplifier">Control AE6MC</param>
        [ImportingConstructor]
        public AE6MC(ControlAE6MC controlAmplifier)
        {
            this.controlAmplifier = controlAmplifier;
            this.Initialize();
        }

        /// <summary>
        /// Updates the zone information. It tries to update only the changed information to minimize
        /// chatting with the amplifier.
        /// </summary>
        /// <param name="zone">Zone</param>
        /// <param name="force">Force</param>
        /// <returns>Async.</returns>
        public async Task SetZone(Zone zone, bool force)
        {
            Zone foundZone = this.context.Zones.Where(z => z.Id == zone.Id).FirstOrDefault();
            if (foundZone != null)
            {
                // Compares each values if they are different and call the correct API
                if (force || zone.On != foundZone.On)
                {
                    await this.controlAmplifier.SetOn(zone.Id, zone.On);
                    foundZone.On = zone.On;
                }

                if (force || zone.Volume != foundZone.Volume)
                {
                    await this.controlAmplifier.SetVolume(zone.Id, zone.Volume);
                    foundZone.Volume = zone.Volume;
                }

                if (force || zone.Bass != foundZone.Bass)
                {
                    await this.controlAmplifier.SetBass(zone.Id, zone.Bass);
                    foundZone.Bass = zone.Bass;
                }

                if (force || zone.Treble != foundZone.Treble)
                {
                    await this.controlAmplifier.SetTreble(zone.Id, zone.Treble);
                    foundZone.Treble = zone.Treble;
                }

                if (force || zone.Mute != foundZone.Mute)
                {
                    await this.controlAmplifier.SetMute(zone.Id, zone.Mute);
                    foundZone.Mute = zone.Mute;
                }

                if (force || (zone.Input != null && zone.Input.Id != null && !zone.Input.Equals(foundZone.Input)))
                {
                    await this.controlAmplifier.SetLink(zone.Id, zone.Input.Id);
                    foundZone.Input = this.context.Inputs.Where(z => z.Id == zone.Input.Id).FirstOrDefault();
                }

                this.context.SaveChanges();
            }
        }

        /// <summary>
        /// Sets multiple zone at once.
        /// </summary>
        /// <param name="zones">Zones</param>
        /// <param name="force">Force</param>
        /// <returns>Async.</returns>
        public async Task SetZones(IEnumerable<Zone> zones, bool force)
        {
            if (zones != null)
            {
                foreach (var zone in zones)
                {
                    await this.SetZone(zone, force);
                }
            }
        }

        /// <summary>
        /// Gets the zones.
        /// </summary>
        /// <param name="zone">Zone Id</param>
        /// <returns>Zone</returns>
        public Zone GetZone(Zone zone)
        {
            return this.context.Zones.Where(z => z.Id == zone.Id).FirstOrDefault();
        }

        /// <summary>
        /// Gets the zones.
        /// </summary>
        /// <returns>Zones</returns>
        public IEnumerable<Zone> GetZones()
        {
            return this.context.Zones;
        }

        /// <summary>
        /// Gets the inputs.
        /// </summary>
        /// <returns>Inputs</returns>
        public IEnumerable<Input> GetInputs()
        {
            return this.context.Inputs;
        }

        /// <summary>
        /// Gets the version of the amplifier.
        /// </summary>
        /// <returns>Version</returns>
        public async Task<string> Version()
        {
            return await this.controlAmplifier.GetVersion();
        }

        /// <summary>
        /// Resets the amplifier
        /// </summary>
        /// <returns>Async.</returns>
        public async Task Reset()
        {
            await this.controlAmplifier.Reset();
            this.Initialize();
        }

        /// <summary>
        /// Initializes the class.
        /// </summary>
        private void Initialize()
        {
            this.context = new AE6MCContext();

            if (this.context.Zones.Count() == 0)
            {
                var zones = Enumerable.Range(1, NumberOfZones).Select(i => new Zone()
                {
                    Id = i.ToString(),
                    On = false,
                    Volume = 0,
                    Bass = 0,
                    Treble = 0,
                    Mute = false,
                    Input = null,
                }).ToList();

                zones.ForEach(z => this.context.Zones.Add(z));
                this.context.SaveChanges();
            }

            if (this.context.Inputs.Count() == 0)
            {
                var inputs = Enumerable.Range(1, NumberOfInputs).Select(i => new Input()
                {
                    Id = i.ToString()
                }).ToList();

                inputs.ForEach(i => this.context.Inputs.Add(i));
                this.context.SaveChanges();
            }
        }
    }
}