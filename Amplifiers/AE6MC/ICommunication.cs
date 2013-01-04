// <copyright>
//     Copyright (c) Jean-Sébastien Goupil.
// </copyright>

namespace HouseAudio.Amplifier.AE6MC
{
    using System.Threading.Tasks;

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
