// <copyright>
//     Copyright (c) Jean-Sébastien Goupil.
// </copyright>

namespace HouseAudio.AudioController.Controllers
{
    using System.ComponentModel.Composition;
    using System.Web.Mvc;
    using HouseAudio.AudioBase;
    using HouseAudio.AudioController.Models;
    using System.Configuration;
    using System.Collections.Generic;
    using System.Linq;
    using System;

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
                Zones = new List<Zone>(this.amplifier.GetZones()),
                Inputs = new List<Input>(this.amplifier.GetInputs())
            };

            foreach (var zone in audioModel.Zones)
            {
                zone.FriendlyName = ConfigurationManager.AppSettings.Get(string.Format("Zone.FriendlyName.{0}", zone.Id)) ?? zone.Id;
            }

            var zoneOrders = ConfigurationManager.AppSettings.Get("Zone.Order");
            if (!string.IsNullOrEmpty(zoneOrders))
            {
                var zoneOrdersNumber = zoneOrders.Split(',');
                audioModel.Zones.Sort((x, y) =>
                    Array.FindIndex(zoneOrdersNumber, m => m == x.Id)
                    <=
                    Array.FindIndex(zoneOrdersNumber, m => m == y.Id) ?
                    -1 : 1);
            }

            foreach (var input in audioModel.Inputs)
            {
                input.FriendlyName = ConfigurationManager.AppSettings.Get(string.Format("Input.FriendlyName.{0}", input.Id)) ?? input.Id;
            }

            var inputOrders = ConfigurationManager.AppSettings.Get("Input.Order");
            if (!string.IsNullOrEmpty(inputOrders))
            {
                var inputOrdersNumber = inputOrders.Split(',');
                audioModel.Inputs.Sort((x, y) =>
                    Array.FindIndex(inputOrdersNumber, m => m == x.Id)
                    <=
                    Array.FindIndex(inputOrdersNumber, m => m == y.Id) ?
                    -1 : 1);
            }

            return this.View(audioModel);
        }
    }
}
