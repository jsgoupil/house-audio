using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HouseAudio.AudioBase
{
    public class Zone
    {
        public string Id { get; set; }
        public bool On { get; set; }
        public int Volume { get; set; }
        public int Bass { get; set; }
        public int Treble { get; set; }
        public bool Mute { get; set; }
        public virtual Input Input { get; set; }
    }
}