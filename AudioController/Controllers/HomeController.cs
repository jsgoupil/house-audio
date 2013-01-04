// <copyright>
//     Copyright (c) Jean-Sébastien Goupil.
// </copyright>

namespace HouseAudio.AudioController.Controllers
{
    using System.ComponentModel.Composition;
    using System.Web.Mvc;
    using HouseAudio.AudioBase;
    using HouseAudio.AudioController.Models;

    /// <summary>
    /// Home Controller for showing a web page.
    /// </summary>
    [Export]
    [PartCreationPolicy(CreationPolicy.NonShared)]
    public class HomeController : Controller
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
        public HomeController(IAmplifier amplifier)
        {
            this.amplifier = amplifier;
        }

        /// <summary>
        /// Index Action.
        /// </summary>
        /// <returns>View</returns>
        public ActionResult Index()
        {
            var audioModel = new AudioModel()
            {
                Zones = this.amplifier.GetZones(),
                Inputs = this.amplifier.GetInputs()
            };

            return this.View(audioModel);
        }
    }
}
