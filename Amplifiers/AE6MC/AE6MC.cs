using HouseAudio.AudioBase;
using System;
using System.Collections.Generic;
using System.ComponentModel.Composition;
using System.Linq;
using System.Threading.Tasks;
using System.Web;

namespace HouseAudio.Amplifier.AE6MC
{
    /// <summary>
    /// AE6MC amplifier.
    /// </summary>
    [Export(typeof(IAmplifier))]
    public class AE6MC : IAmplifier
    {
        internal const int NumberOfZones = 6;
        internal const int NumberOfInputs = 7;

        private ControlAE6MC controlAmplifier;
        private IList<Zone> zones;
        private IEnumerable<Input> inputs;

        /// <summary>
        /// Constructor.
        /// </summary>
        [ImportingConstructor]
        public AE6MC(ControlAE6MC controlAmplifier)
        {
            this.controlAmplifier = controlAmplifier;
            Initialize();
        }

        private void Initialize()
        {
            this.zones = Enumerable.Range(1, NumberOfZones).Select(i => new Zone()
            {
                Id = i.ToString(),
                On = false,
                Volume = 0,
                Bass = 0,
                Treble = 0,
                Mute = false,
                Input = null,
            }).ToList();

            this.inputs = Enumerable.Range(1, NumberOfInputs).Select(i => new Input()
            {
                Id = i.ToString()
            });
        }

        public async Task SetZone(Zone zone)
        {
            Zone foundZone = zones.Where(z => z.Id == zone.Id).FirstOrDefault();
            if (foundZone != null)
            {
                // Compares each values if they are different and call the correct API
                if (zone.On != foundZone.On)
                {
                    await controlAmplifier.SetOn(zone.Id, zone.On);
                    foundZone.On = zone.On;
                }

                if (zone.Volume != foundZone.Volume)
                {
                    await controlAmplifier.SetVolume(zone.Id, zone.Volume);
                    foundZone.Volume = zone.Volume;
                }

                if (zone.Bass != foundZone.Bass)
                {
                    await controlAmplifier.SetBass(zone.Id, zone.Bass);
                    foundZone.Bass = zone.Bass;
                }

                if (zone.Treble != foundZone.Treble)
                {
                    await controlAmplifier.SetTreble(zone.Id, zone.Treble);
                    foundZone.Treble = zone.Treble;
                }

                if (zone.Mute != foundZone.Mute)
                {
                    await controlAmplifier.SetMute(zone.Id, zone.Mute);
                    foundZone.Mute = zone.Mute;
                }

                if (zone.Input != null && zone.Input.Id != null && !zone.Input.Equals(foundZone.Input))
                {
                    await controlAmplifier.SetLink(zone.Id, zone.Input.Id);
                    foundZone.Input = zone.Input;
                }
            }
        }

        public async Task SetZones(IEnumerable<Zone> zones)
        {
            if (zones != null)
            {
                foreach (var zone in zones)
                {
                    await SetZone(zone);
                }
            }
        }

        /// <summary>
        /// Gets the zones.
        /// </summary>
        /// <returns>Zones</returns>
        public Zone GetZone(Zone zone)
        {
            return zones.Where(z => z.Id == zone.Id).FirstOrDefault();
        }

        /// <summary>
        /// Gets the zones.
        /// </summary>
        /// <returns>Zones</returns>
        public IEnumerable<Zone> GetZones()
        {
            return zones;
        }

        /// <summary>
        /// Gets the inputs.
        /// </summary>
        /// <returns>Inputs</returns>
        public IEnumerable<Input> GetInputs()
        {
            return inputs;
        }

        /// <summary>
        /// Gets the version of the amplifier.
        /// </summary>
        /// <returns>Version</returns>
        public async Task<string> Version()
        {
            return await controlAmplifier.GetVersion();
        }

        /// <summary>
        /// Resets the amplifier
        /// </summary>
        /// <returns>Async.</returns>
        public async Task Reset()
        {
            await controlAmplifier.Reset();
            Initialize();
        }
    }
}