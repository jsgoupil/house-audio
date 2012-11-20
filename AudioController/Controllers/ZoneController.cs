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
    public class ZoneController : ApiController
    {
        private IAmplifier amplifier;

        [ImportingConstructor]
        public ZoneController(IAmplifier amplifier)
        {
            this.amplifier = amplifier;
        }

        public Zone Get([FromUri]Zone zone)
        {
            return this.amplifier.GetZone(zone);
        }

        public async Task Post([FromUri]Zone zone)
        {
            await this.amplifier.SetZone(zone);
        }
    }
}