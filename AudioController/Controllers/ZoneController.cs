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
            await this.amplifier.SetZone(zone);
        }
    }
}