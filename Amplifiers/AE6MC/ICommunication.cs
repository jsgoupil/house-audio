using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeAudio.AE6MC
{
    public interface ICommunication
    {
        Task Write(string data);
        Task<string> Read();
    }
}
