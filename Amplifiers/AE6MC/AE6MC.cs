using HomeAudio.AudioBase;
using System;
using System.Collections.Generic;
using System.ComponentModel.Composition;
using System.Linq;
using System.Threading.Tasks;
using System.Web;

namespace HomeAudio.AE6MC
{
    [Export(typeof(IAmplifier))]
    public class AE6MC : IAmplifier
    {
        private const int numberOfZones = 6;
        private const int numberOfInputs = 7;

        public AE6MC()
        {
        }

        public IEnumerable<Zone> GetZones()
        {
            var zones = new List<Zone>(numberOfZones);
            for (var i = 0; i < numberOfZones; i++)
            {
                zones.Add(new Zone()
                {
                    Id = (i + 1).ToString()
                });
            }

            return zones;
        }

        public IEnumerable<Input> GetInputs()
        {
            var inputs = new List<Input>(numberOfInputs);
            for (var i = 0; i < numberOfInputs; i++)
            {
                inputs.Add(new Input()
                {
                    Id = (i + 1).ToString()
                });
            }

            return inputs;
        }
    }
}