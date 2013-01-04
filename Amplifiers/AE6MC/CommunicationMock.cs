// <copyright>
//     Copyright (c) Jean-Sébastien Goupil.
// </copyright>

namespace HouseAudio.Amplifier.AE6MC
{
    using System.ComponentModel.Composition;
    using System.Threading.Tasks;

    /// <summary>
    /// Mock implementation of the ICommunication
    /// </summary>
    [Export(typeof(ICommunication))]
    public class CommunicationMock : ICommunication
    {
        /// <summary>
        /// Constructor.
        /// </summary>
        /// <param name="portName">RS232 Port</param>
        [ImportingConstructor]
        private CommunicationMock([Import("COMport")]string portName)
        {
        }

        /// <summary>
        /// Mock Write
        /// </summary>
        /// <param name="data">Data to write</param>
        /// <returns>Asynchronous task.</returns>
        public Task Write(string data)
        {
            return Task.Delay(100);
        }

        /// <summary>
        /// Mock Read
        /// </summary>
        /// <returns>Data read asynchronously.</returns>
        public Task<string> Read()
        {
            return Task.Run(() => "hello");
        }
    }
}
