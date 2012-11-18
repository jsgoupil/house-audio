using HomeAudio.AudioBase;
using System;
using System.Collections.Generic;
using System.ComponentModel.Composition;
using System.Linq;
using System.Threading.Tasks;
using System.Web;

namespace HomeAudio.AE6MC
{
    [Export(typeof(IControlAmplifier))]
    public class ControlAE6MC : IControlAmplifier
    {
        private ICommunication communication;

        [ImportingConstructor]
        public ControlAE6MC(ICommunication communication)
        {
            this.communication = communication;
        }

        public async Task<string> Version()
        {
            await this.communication.Write("(vr?)");
            return await this.communication.Read();
        }

        public async Task Reset()
        {
            await this.communication.Write("(rx)");
        }

        public async Task On(Zone speaker)
        {
            await this.communication.Write("(" + speaker.Id + "on)");
        }

        public async Task Off(Zone speaker)
        {
            await this.communication.Write("(" + speaker.Id + "of)");
        }

        public async Task Mute(Zone speaker)
        {
            await this.communication.Write("(" + speaker.Id + "mu)");
        }

        public async Task UnMute(Zone speaker)
        {
            await this.communication.Write("(" + speaker.Id + "um)");
        }

        public async Task MuteAll()
        {
            await this.communication.Write("(amu)");
        }

        public async Task UnMuteAll()
        {
            await this.communication.Write("(aum)");
        }

        public async Task<int> Volume(Zone speaker)
        {
            await this.communication.Write("(" + speaker.Id + "vl?)");
            string result = await this.communication.Read();
            int finalResult;
            if (!Int32.TryParse(result, out finalResult))
            {
                return -1;
            }

            return finalResult * 100 / 87;
        }

        public async Task Volume(Zone speaker, int value)
        {
            // Our value goes from 0 to 87
            await this.communication.Write("(" + speaker.Id + "vl" + (value * 87 / 100).ToString("D2")  + ")");
        }

        public async Task Link(Input input, Zone speaker)
        {
            await this.communication.Write("(" + speaker.Id + "sl" + input.Id + ")");
        }

        public async Task<int> Bass(Zone speaker)
        {
            await this.communication.Write("(" + speaker.Id + "b?)");
            return Convert.ToInt32(await this.communication.Read(), 16);
        }

        public async Task Bass(Zone speaker, int value)
        {
            await this.communication.Write("(" + speaker.Id + "b" + value.ToString("X") + ")");
        }

        public async Task<int> Treble(Zone speaker)
        {
            await this.communication.Write("(" + speaker.Id + "t?)");
            return Convert.ToInt32(await this.communication.Read(), 16);
        }

        public async Task Treble(Zone speaker, int value)
        {
            await this.communication.Write("(" + speaker.Id + "t" + value.ToString("X") + ")");
        }
    }
}