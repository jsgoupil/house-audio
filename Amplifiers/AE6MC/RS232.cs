using System;
using System.Collections.Generic;
using System.ComponentModel.Composition;
using System.IO.Ports;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeAudio.AE6MC
{
    [Export(typeof(ICommunication))]
    public class RS232 : ICommunication, IDisposable
    {
        private static RS232 instance;
        private SerialPort serialPort;

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

        public static RS232 GetInstance(string portName) {
            if (instance != null)
            {
                return instance;
            }
            return instance = new RS232(portName);
        }

        public void Connect()
        {
            if (!serialPort.IsOpen)
            {
                serialPort.Open();
            }
        }

        public void Disconnect()
        {
            serialPort.Close();
        }

        public Task Write(string data)
        {
            Connect();
            serialPort.Write(data);
            return Task.Delay(100);
        }

        public Task<string> Read()
        {
            Connect();
            return serialPort.GetTextReader().ReadAsync();
        }

        public void Dispose()
        {
            Disconnect();
        }
    }
}
