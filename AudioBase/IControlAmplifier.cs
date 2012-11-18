using System;
using System.Collections.Generic;
using System.ComponentModel.Composition;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace HomeAudio.AudioBase
{
    public interface IControlAmplifier
    {
        Task<string> Version();
        Task Reset();
        Task On(Zone speaker);
        Task Off(Zone speaker);
        Task Mute(Zone speaker);
        Task UnMute(Zone speaker);
        Task MuteAll();
        Task UnMuteAll();
        Task<int> Volume(Zone speaker);
        Task Volume(Zone speaker, int value);
        Task Link(Input input, Zone speaker);
        Task<int> Bass(Zone speaker);
        Task Bass(Zone speaker, int value);
        Task<int> Treble(Zone speaker);
        Task Treble(Zone speaker, int value);
    }
}