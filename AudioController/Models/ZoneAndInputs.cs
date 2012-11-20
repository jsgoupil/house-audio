using HouseAudio.AudioBase;
using System.Collections.Generic;

namespace HouseAudio.AudioController.Models
{
    public class ZoneAndInputs
    {
        public Zone Zone { get; set; }
        public IEnumerable<Input> Inputs { get; set; }
    }
}
