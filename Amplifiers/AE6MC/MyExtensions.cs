using System;
using System.Collections.Generic;
using System.IO;
using System.IO.Ports;
using System.Linq;
using System.Threading.Tasks;
using System.Web;

namespace HomeAudio.AE6MC
{
    public static class MyExtensions
    {
        public static TextReader GetTextReader(this SerialPort serialPort)
        {
            // TODO: allow other StreamReader constructors.
            return new StreamReader(serialPort.BaseStream, serialPort.Encoding);
        }

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


