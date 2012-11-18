using System;
using System.Collections.Generic;
using System.ComponentModel.Composition;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace HomeAudio.AudioBase
{
    public interface IAmplifier
    {
        IEnumerable<Zone> GetZones();
        IEnumerable<Input> GetInputs();
    }
}