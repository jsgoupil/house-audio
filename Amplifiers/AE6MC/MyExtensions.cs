// <copyright>
//     Copyright (c) Jean-Sébastien Goupil.
// </copyright>

namespace HouseAudio.Amplifier.AE6MC
{
    using System;
    using System.IO;
    using System.IO.Ports;
    using System.Threading.Tasks;

    /// <summary>
    /// Extensions for the SerialPort.
    /// </summary>
    public static class MyExtensions
    {
        /// <summary>
        /// Creates a Stream TextReader around the serial port.
        /// </summary>
        /// <param name="serialPort">Serial Port</param>
        /// <returns>TextReader</returns>
        public static TextReader GetTextReader(this SerialPort serialPort)
        {
            // TODO: allow other StreamReader constructors.
            return new StreamReader(serialPort.BaseStream, serialPort.Encoding);
        }

        /// <summary>
        /// Reads asynchronously the text reader.
        /// </summary>
        /// <param name="textReader">Text Reader</param>
        /// <returns>String</returns>
        public static async Task<string> ReadAsync(this TextReader textReader)
        {
            var tcs = new TaskCompletionSource<string>();

            var ret = string.Empty;
            var buffer = new char[1]; // Not the most efficient...
            while (true)
            {
                try
                {
                    var charsRead = textReader.Read(buffer, 0, 1);
                    if (charsRead == 0)
                    {
                        throw new EndOfStreamException();
                    }

                    ret += buffer[0];
                }
                catch (TimeoutException)
                {
                    tcs.TrySetResult(ret);
                    break;
                }
                catch (EndOfStreamException)
                {
                    tcs.TrySetResult(ret);
                    break;
                }
                catch (Exception)
                {
                    tcs.TrySetResult(ret);
                    break;
                }
            }

            return await tcs.Task;
        }
    }
}
