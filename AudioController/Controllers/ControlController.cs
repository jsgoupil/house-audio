using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using HomeAudio.AudioBase;
using System.ComponentModel.Composition;
using AudioController.Filters;

namespace HomeAudio.AudioController.Controllers
{
    [Export]
    [NotImplExceptionFilter]
    [PartCreationPolicy(CreationPolicy.NonShared)]
    public class ControlController : ApiController
    {
        private IControlAmplifier controlAmplifier;

        [ImportingConstructor]
        public ControlController(IControlAmplifier amplifier)
        {
            this.controlAmplifier = amplifier;
        }

        [HttpGet]
        public async Task<string> Version()
        {
            string version = await this.controlAmplifier.Version();
            return version;
        }

        [HttpPost]
        public async Task Reset() {
            await this.controlAmplifier.Reset();
        }

        [HttpPost]
        public async Task On([FromUri]Zone zone)
        {
            await this.controlAmplifier.On(zone);
        }

        [HttpPost]
        public async Task Off([FromUri]Zone zone)
        {
            await this.controlAmplifier.Off(zone);
        }

        [HttpPost]
        public async Task Mute([FromUri]Zone zone)
        {
            await this.controlAmplifier.Mute(zone);
        }

        [HttpPost]
        public async Task UnMute([FromUri]Zone zone)
        {
            await this.controlAmplifier.UnMute(zone);
        }

        [HttpPost]
        public async Task MuteAll()
        {
            await this.controlAmplifier.MuteAll();
        }

        [HttpPost]
        public async Task UnMuteAll()
        {
            await this.controlAmplifier.UnMuteAll();
        }

        [HttpGet]
        [ActionName("Volume")]
        public async Task<int> GetVolume([FromUri]Zone zone)
        {
            return await this.controlAmplifier.Volume(zone);
        }

        [HttpPost]
        [ActionName("Volume")]
        public async Task SetVolume([FromUri]Zone zone)
        {
            await this.controlAmplifier.Volume(zone, zone.Volume);
        }

        [HttpGet]
        [ActionName("Bass")]
        public async Task<int> GetBass([FromUri]Zone zone)
        {
            return await this.controlAmplifier.Bass(zone);
        }

        [HttpPost]
        [ActionName("Bass")]
        public async Task SetBass([FromUri]Zone zone)
        {
            await this.controlAmplifier.Bass(zone, zone.Bass);
        }

        [HttpGet]
        [ActionName("Treble")]
        public async Task<int> GetTreble([FromUri]Zone zone)
        {
            return await this.controlAmplifier.Treble(zone);
        }

        [HttpPost]
        [ActionName("Treble")]
        public async Task SetTreble([FromUri]Zone zone)
        {
            await this.controlAmplifier.Treble(zone, zone.Treble);
        }

        [HttpPost]
        public async Task Link([FromUri]Input input, [FromUri]Zone zone)
        {
            await this.controlAmplifier.Link(input, zone);
        }
    }
}