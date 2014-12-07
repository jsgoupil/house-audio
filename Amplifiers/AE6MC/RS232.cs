// <copyright>
//     Copyright (c) Jean-Sébastien Goupil.
// </copyright>

namespace HouseAudio.Amplifier.AE6MC
{
    using System;
    using System.ComponentModel.Composition;
    using System.IO.Ports;
    using System.Threading.Tasks;

    /// <summary>
    /// RS232 implementation of the ICommunication
    /// </summary>
    [Export(typeof(ICommunication))]
    public class RS232 : ICommunication, IDisposable
    {
        private static readonly Object obj = new Object();

        /// <summary>
        /// Instance of the serial port.
        /// </summary>
        private SerialPort serialPort;

        /// <summary>
        /// Constructor.
        /// </summary>
        /// <param name="portName">RS232 Port</param>
        [ImportingConstructor]
        private RS232([Import("COMport")]string portName)
        {
            this.serialPort = new SerialPort(portName);
            this.serialPort.BaudRate = 19200;
            this.serialPort.DataBits = 8;
            this.serialPort.StopBits = StopBits.One;
            this.serialPort.Parity = Parity.None;
            this.serialPort.ReadTimeout = 1000;
            this.serialPort.WriteTimeout = 500;
            this.serialPort.Handshake = Handshake.None;
        }

        /// <summary>
        /// Connects on the port.
        /// </summary>
        public void Connect()
        {
            lock (obj)
            {
                if (!this.serialPort.IsOpen)
                {
                    this.serialPort.Open();
                }
            }
        }

        /// <summary>
        /// Disconnects.
        /// </summary>
        public void Disconnect()
        {
            lock (obj)
            {
                this.serialPort.Close();
            }
        }

        /// <summary>
        /// Write on the port. It connects if needed.
        /// </summary>
        /// <param name="data">Data to write</param>
        /// <returns>Asynchronous task.</returns>
        public Task Write(string data)
        {
            this.Connect();

            lock (obj)
            {
                this.serialPort.Write(data);
            }

            return Task.Delay(300);
        }

        /// <summary>
        /// Reads on the port. It connects if needed.
        /// </summary>
        /// <returns>Data read asynchronously.</returns>
        public Task<string> Read()
        {
            this.Connect();
            lock (obj)
            {
                return this.serialPort.GetTextReader().ReadAsync();
            }
        }

        /// <summary>
        /// Disposes.
        /// </summary>
        public void Dispose()
        {
            this.Disconnect();
        }
    }
}
