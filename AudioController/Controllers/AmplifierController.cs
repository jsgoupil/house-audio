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
    /// Amplifier API.
    /// </summary>
    [Export]
    [NotImplExceptionFilter]
    [PartCreationPolicy(CreationPolicy.NonShared)]
    public class AmplifierController : ApiController
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
        public AmplifierController(IAmplifier amplifier)
        {
            this.amplifier = amplifier;
        }

        /// <summary>
        /// Gets the version of the amplifier.
        /// </summary>
        /// <returns>Version</returns>
        [HttpGet]
        public async Task<string> Version()
        {
            return await this.amplifier.Version();
        }

        /// <summary>
        /// Resets the amplifier.
        /// </summary>
        /// <returns>Async.</returns>
        [HttpPost]
        public async Task Reset()
        {
            await this.amplifier.Reset();

            // Let's rerun the zones to be the same on the controller
            await this.amplifier.SetZones(this.amplifier.GetZones(), true);
        }
    }
}