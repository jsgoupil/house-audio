// <copyright>
//     Copyright (c) Jean-Sébastien Goupil.
// </copyright>

namespace HouseAudio.AudioController.Controllers
{
    using System.ComponentModel.Composition;
    using System.Threading.Tasks;
    using System.Web.Http;
    using HouseAudio.AudioBase;
    using HouseAudio.AudioController.Filters;
    using System.Collections.Generic;

    /// <summary>
    /// Zone API.
    /// </summary>
    [Export]
    [NotImplExceptionFilter]
    [PartCreationPolicy(CreationPolicy.NonShared)]
    public class ZoneController : ApiController
    {
        /// <summary>
        /// Amplifier.
        /// </summary>
        private IAmplifier amplifier;

        /// <summary>
        /// Constructor.
        /// </summary>
        /// <param name="amplifier">Amplifier</param>
        [ImportingConstructor]
        public ZoneController(IAmplifier amplifier)
        {
            this.amplifier = amplifier;
        }

        /// <summary>
        /// Gets the current zone information by passing a zone id.
        /// </summary>
        /// <param name="zone">Zone Id</param>
        /// <returns>Zone</returns>
        public Zone Get([FromUri]Zone zone)
        {
            return this.amplifier.GetZone(zone);
        }

        /// <summary>
        /// Updates the current zone.
        /// </summary>
        /// <param name="zone">Zone</param>
        /// <returns>Async.</returns>
        public async Task Post([FromUri]Zone zone)
        {
            await this.amplifier.SetZone(zone, false);
        }

        /// <summary>
        /// Sets the same values to all zones.
        /// </summary>
        /// <param name="zone">Zone</param>
        /// <param name="on">On</param>
        /// <returns>Async.</returns>
        [HttpGet]
        public async Task OnOffAll([FromUri]Zone zone, bool on)
        {
            var newList = new List<Zone>();
            var allZones = this.amplifier.GetZones();
            foreach (var internalZone in allZones)
            {
                newList.Add(new Zone()
                {
                    Id = internalZone.Id,
                    Bass = internalZone.Bass,
                    Input = internalZone.Input,
                    Mute = internalZone.Mute,
                    On = zone.On,
                    Treble = internalZone.Treble,
                    Volume = internalZone.Volume
                });
            }

            await this.amplifier.SetZones(newList, false);
        }

        /// <summary>
        /// Sets the same values to all zones.
        /// </summary>
        /// <param name="zone">Zone</param>
        /// <returns>Async.</returns>
        [HttpGet]
        public async Task UpdateAll([FromUri]Zone zone)
        {
            var newList = new List<Zone>();
            var allZones = this.amplifier.GetZones();
            foreach (var internalZone in allZones)
            {
                newList.Add(new Zone()
                {
                    Id = internalZone.Id,
                    Bass = zone.Bass,
                    Input = zone.Input,
                    Mute = zone.Mute,
                    On = zone.On,
                    Treble = zone.Treble,
                    Volume = zone.Volume
                });
            }

            await this.amplifier.SetZones(newList, false);
        }
    }
}