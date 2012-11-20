using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.ComponentModel.Composition;
using HouseAudio.AudioBase;
using HouseAudio.AudioController.Filters;

namespace HouseAudio.AudioController.Controllers
{
    [Export]
    [NotImplExceptionFilter]
    [PartCreationPolicy(CreationPolicy.NonShared)]
    public class AmplifierController : ApiController
    {
        private IAmplifier amplifier;

        [ImportingConstructor]
        public AmplifierController(IAmplifier amplifier)
        {
            this.amplifier = amplifier;
        }

        [HttpGet]
        public async Task<string> Version()
        {
            return await this.amplifier.Version();
        }

        [HttpPost]
        public async Task Reset()
        {
            await this.amplifier.Reset();
        }
    }
}