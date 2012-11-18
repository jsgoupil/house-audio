using HomeAudio.AudioBase;
using System.Collections.Generic;

namespace AudioController.Models
{
    public class AudioModel
    {
        public IEnumerable<Zone> Zones { get; set; }
        public IEnumerable<Input> Inputs { get; set; }
    }
}
