using AudioController.Models;
using HomeAudio.AudioBase;
using System;
using System.Collections.Generic;
using System.ComponentModel.Composition;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AudioController.Controllers
{
    [Export]
    [PartCreationPolicy(CreationPolicy.NonShared)]
    public class HomeController : Controller
    {
        private IAmplifier amplifier;

        [ImportingConstructor]
        public HomeController(IAmplifier amplifier)
        {
            this.amplifier = amplifier;
        }

        public ActionResult Index()
        {
            var audioModel = new AudioModel()
            {
                Zones = amplifier.GetZones(),
                Inputs = amplifier.GetInputs()
            };

            return View(audioModel);
        }
    }
}
