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
        /// <returns>Async.</returns>
        [HttpGet]
        public async Task UpdateAll([FromUri]Zone zone)
        {
            var allZones = this.amplifier.GetZones();
            foreach (var internalZone in allZones)
            {
                internalZone.Bass = zone.Bass;
                internalZone.Input = zone.Input;
                internalZone.Mute = zone.Mute;
                internalZone.On = zone.On;
                internalZone.Treble = zone.Treble;
                internalZone.Volume = zone.Volume;
            }

            await this.amplifier.SetZones(allZones, false);
        }
    }
}