using HouseAudio.AudioBase;
using System.Collections.Generic;

namespace HouseAudio.AudioController.Models
{
    public class AudioModel
    {
        public IEnumerable<Zone> Zones { get; set; }
        public IEnumerable<Input> Inputs { get; set; }
    }
}
