using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HomeAudio.AudioBase
{
    public class Zone
    {
        public string Id { get; set; }
        public int Volume { get; set; }
        public int Bass { get; set; }
        public int Treble { get; set; }
    }
}