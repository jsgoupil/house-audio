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
    /// RS232 implementation of the ICommunication
    /// </summary>
    [Export(typeof(ICommunication))]
    public class RS232 : ICommunication, IDisposable
    {
        private static RS232 instance;
        private SerialPort serialPort;

        /// <summary>
        /// Constructor.
        /// </summary>
        /// <param name="portName">RS232 Port</param>
        [ImportingConstructor]
        private RS232([Import("COMport")]string portName)
        {
            serialPort = new SerialPort(portName);
            serialPort.BaudRate = 19200;
            serialPort.DataBits = 8;
            serialPort.StopBits = StopBits.One;
            serialPort.Parity = Parity.None;
            serialPort.ReadTimeout = 1000;
            serialPort.WriteTimeout = 500;
            serialPort.Handshake = Handshake.None;
        }

        /// <summary>
        /// Connects on the port.
        /// </summary>
        public void Connect()
        {
            if (!serialPort.IsOpen)
            {
                serialPort.Open();
            }
        }

        /// <summary>
        /// Disconnects.
        /// </summary>
        public void Disconnect()
        {
            serialPort.Close();
        }

        /// <summary>
        /// Write on the port. It connects if needed.
        /// </summary>
        /// <param name="data">Data to write</param>
        /// <returns>Asynchronous task.</returns>
        public Task Write(string data)
        {
            Connect();
            serialPort.Write(data);
            return Task.Delay(100);
        }

        /// <summary>
        /// Reads on the port. It connects if needed.
        /// </summary>
        /// <returns>Data read asynchronously.</returns>
        public Task<string> Read()
        {
            Connect();
            return serialPort.GetTextReader().ReadAsync();
        }

        /// <summary>
        /// Disposes.
        /// </summary>
        public void Dispose()
        {
            Disconnect();
        }
    }
}
