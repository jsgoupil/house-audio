using System;
using System.Collections.Generic;
using System.ComponentModel.Composition;
using System.IO.Ports;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HouseAudio.Amplifier.AE6MC
{
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
