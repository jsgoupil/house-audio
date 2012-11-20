using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HouseAudio.Amplifier.AE6MC
{
    /// <summary>
    /// Communication interface for reading/writing.
    /// </summary>
    public interface ICommunication
    {
        /// <summary>
        /// Write data.
        /// </summary>
        /// <param name="data">Data</param>
        /// <returns>Asynchrounous task.</returns>
        Task Write(string data);

        /// <summary>
        /// Read data.
        /// </summary>
        /// <returns>Data read asynchronously.</returns>
        Task<string> Read();
    }
}
