// <copyright>
//     Copyright (c) Jean-Sébastien Goupil.
// </copyright>

namespace HouseAudio.AudioBase
{
    using System;
    using System.ComponentModel.Composition;
    using System.Diagnostics;
    using System.Globalization;
    using System.Net;
    using Newtonsoft.Json;

    /// <summary>
    /// This class uses SpotifyWebHelper to talk with Spotify in order to get
    /// the status, play, or pause music.
    /// </summary>
    [Export]
    public class SpotifyWebApi
    {
        /// <summary>
        /// Saved oAuth.
        /// </summary>
        [System.Diagnostics.CodeAnalysis.SuppressMessage("StyleCop.CSharp.NamingRules", "SA1305:FieldNamesMustNotUseHungarianNotation", Justification = "Reviewed.")]
        private string oAuth;

        /// <summary>
        /// Saved CSRF.
        /// </summary>
        private string csrf;

        /// <summary>
        /// Saved Host for Spotilocal.
        /// </summary>
        private string host;

        /// <summary>
        /// Saved port for Spotilocal.
        /// </summary>
        private string port;

        /// <summary>
        /// Constructor.
        /// </summary>
        /// <param name="host">Host</param>
        /// <param name="port">Port</param>
        [ImportingConstructor]
        public SpotifyWebApi([Import("SpotiLocalHost")]string host, [Import("SpotiLocalPort")]string port)
        {
            this.host = host;
            this.port = port;

            ServicePointManager.Expect100Continue = true;
            ServicePointManager.SecurityProtocol = SecurityProtocolType.Ssl3;
        }

        /// <summary>
        /// Gets the CSRF.
        /// </summary>
        public string CSRF
        {
            get
            {
                if (this.csrf == null)
                {
                    var csrfResult = this.Request("simplecsrf/token.json");
                    var result = JsonConvert.DeserializeObject<Responses.Token>(csrfResult);
                    this.csrf = result.token;
                }

                return this.csrf;
            }
        }

        /// <summary>
        /// Gets the current Unix Timestamp.
        /// </summary>
        private int TimeStamp
        {
            get
            {
                return Convert.ToInt32((DateTime.UtcNow - new DateTime(1970, 1, 1, 0, 0, 0)).TotalSeconds);
            }
        }

        /// <summary>
        /// Opens Spotify.
        /// </summary>
        public static void OpenSpotify()
        {
            if (Process.GetProcessesByName("spotify").Length < 1)
            {
                Process.Start(Environment.GetFolderPath(Environment.SpecialFolder.ApplicationData) + "\\Spotify\\spotify.exe");
            }
        }

        /// <summary>
        /// Open SpotifyWebHelper.
        /// </summary>
        public static void OpenSpotifyWebHelper()
        {
            if (Process.GetProcessesByName("SpotifyWebHelper").Length < 1)
            {
                Process.Start(Environment.GetFolderPath(Environment.SpecialFolder.ApplicationData) + "\\Spotify\\Data\\SpotifyWebHelper.exe");
            }
        }

        /// <summary>
        /// Gets the status.
        /// </summary>
        /// <returns>Status</returns>
        public Responses.Status GetStatus()
        {
            var test = this.Request("remote/status.json", true, true);
            var result = JsonConvert.DeserializeObject<Responses.Status>(test);

            return result;
        }

        /// <summary>
        /// Gets the version.
        /// </summary>
        /// <returns>Version</returns>
        public Responses.Version GetVersion()
        {
            var result = JsonConvert.DeserializeObject<Responses.Version>(this.Request("service/version.json?service=remote"));
            if (!result.running.HasValue)
            {
                result.running = true;
            }

            return result;
        }

        /// <summary>
        /// Pauses the music.
        /// </summary>
        /// <returns>Status</returns>
        public Responses.Status Pause()
        {
            return JsonConvert.DeserializeObject<Responses.Status>(this.Request("remote/pause.json?pause=true", true, true));
        }

        /// <summary>
        /// Play paused music.
        /// </summary>
        /// <returns>Status.</returns>
        public Responses.Status Play()
        {
            return JsonConvert.DeserializeObject<Responses.Status>(this.Request("remote/pause.json?pause=false", true, true));
        }

        /// <summary>
        /// Play a specific song with optionaly a context.
        /// </summary>
        /// <param name="uri">Spotify URI play</param>
        /// <param name="context">Spotify URI context</param>
        /// <returns>Status</returns>
        public Responses.Status Play(string uri, string context = null)
        {
            string url = string.Format(CultureInfo.InvariantCulture, "remote/play.json?uri={0}&context={1}", uri ?? string.Empty, context ?? uri ?? string.Empty);
            return JsonConvert.DeserializeObject<Responses.Status>(this.Request(url, true, true));
        }

        /// <summary>
        /// Recieves a OAuth key from the Spotify site.
        /// </summary>
        /// <returns>oAuth</returns>
        private static string GetOAuth()
        {
            string raw = new WebClient().DownloadString("https://embed.spotify.com/openplay/?uri=spotify:track:5Zp4SWOpbuOdnsxLqwgutt");
            raw = raw.Replace(" ", string.Empty);
            string[] lines = raw.Split(new string[] { "\n" }, StringSplitOptions.None);
            foreach (string line in lines)
            {
                if (line.StartsWith("tokenData"))
                {
                    string[] l = line.Split(new string[] { "'" }, StringSplitOptions.None);
                    return l[1];
                }
            }

            throw new Exception("Could not find OAuth token");
        }

        /// <summary>
        /// Gets a WebClient to talk with SpotifyWebHelper.
        /// </summary>
        /// <returns>WebClient</returns>
        private static WebClient GetWebClient()
        {
            var wc = new WebClient();

            // Required, prevent XSS in browsers.
            wc.Headers.Add("Origin", "https://embed.spotify.com");
            wc.Headers.Add("Referer", "https://embed.spotify.com/?uri=spotify:track:5Oa4jjIe7d4tGsXevIQdrK");

            return wc;
        }

        /// <summary>
        /// Makes a request.
        /// </summary>
        /// <param name="url">URL</param>
        /// <returns>Content</returns>
        private string Request(string url)
        {
            return this.Request(url, false, false);
        }

        /// <summary>
        /// Makes a request, optionaly passing the oAuth.
        /// </summary>
        /// <param name="url">URL</param>
        /// <param name="oAuth">Activate oAuth</param>
        /// <returns>Content</returns>
        [System.Diagnostics.CodeAnalysis.SuppressMessage("StyleCop.CSharp.NamingRules", "SA1305:FieldNamesMustNotUseHungarianNotation", Justification = "Reviewed.")]
        private string Request(string url, bool oAuth)
        {
            return this.Request(url, oAuth, false);
        }

        /// <summary>
        /// Makes a request, optionaly passing the oAuth and CSRF.
        /// </summary>
        /// <param name="url">URL</param>
        /// <param name="oAuth">Activate oAuth</param>
        /// <param name="csrf">Activate CSRF</param>
        /// <returns>Content</returns>
        [System.Diagnostics.CodeAnalysis.SuppressMessage("StyleCop.CSharp.NamingRules", "SA1305:FieldNamesMustNotUseHungarianNotation", Justification = "Reviewed.")]
        private string Request(string url, bool oAuth, bool csrf)
        {
            string parameters = "?&ref=&cors=&_=" + this.TimeStamp;
            if (url.Contains("?"))
            {
                parameters = parameters.Substring(1);
            }

            if (oAuth)
            {
                parameters += "&oauth=" + this.oAuth;
            }

            if (csrf)
            {
                parameters += "&csrf=" + this.CSRF;
            }

            string fullUrl = "https://" + this.host + ":" + this.port + "/" + url + parameters;
            var result = GetWebClient().DownloadString(fullUrl);
            var errorResult = JsonConvert.DeserializeObject<Responses.Error>(result);

            if (errorResult == null || errorResult.error == null)
            {
                return result;
            }
            else
            {
                // In case of error, we will try to recover.
                switch (errorResult.error.type)
                {
                    case 4102: // Invalid OAuth token
                    case 4103: // Expired OAuth token
                        this.oAuth = GetOAuth();
                        return this.Request(url, oAuth, csrf);
                    case 4107: // Invalid Csrf token
                    case 4109: // Invalid Csrf path
                        this.csrf = null;
                        return this.Request(url, oAuth, csrf);
                }

                throw new Exception("Error not supported. " + result);
            }
        }

        /// <summary>
        /// Responses from SpotifyWebHelper.
        /// </summary>
        public class Responses
        {
            /// <summary>
            /// Error.
            /// </summary>
            public class Error
            {
                /// <summary>
                /// Error type.
                /// </summary>
                public ErrorType error;

                /// <summary>
                /// Error type.
                /// </summary>
                public class ErrorType
                {
                    /// <summary>
                    /// Error code.
                    /// </summary>
                    public int type;

                    /// <summary>
                    /// Error message.
                    /// </summary>
                    public string message;
                }
            }

            /// <summary>
            /// Version.
            /// </summary>
            public class Version
            {
                /// <summary>
                /// Version number.
                /// </summary>
                public int version { get; set; }

                /// <summary>
                /// Spotify client version.
                /// </summary>
                public string client_version { get; set; }

                /// <summary>
                /// Indicates if Spotify is running.
                /// </summary>
                public bool? running { get; set; }
            }

            /// <summary>
            /// Token.
            /// </summary>
            public class Token
            {
                /// <summary>
                /// CSRF Token.
                /// </summary>
                public string token { get; set; }
            }

            /// <summary>
            /// Status.
            /// </summary>
            public class Status
            {
                /// <summary>
                /// Version.
                /// </summary>
                public int version { get; set; }

                /// <summary>
                /// Client version.
                /// </summary>
                public string client_version { get; set; }

                /// <summary>
                /// Indicates if currently playing.
                /// </summary>
                public bool playing { get; set; }

                /// <summary>
                /// Indicates if shuffle is on.
                /// </summary>
                public bool shuffle { get; set; }

                /// <summary>
                /// Indicates if repeat is on.
                /// </summary>
                public bool repeat { get; set; }

                /// <summary>
                /// Indicates if play is enabled.
                /// </summary>
                public bool play_enabled { get; set; }

                /// <summary>
                /// Indicates if previous is enabled.
                /// </summary>
                public bool prev_enabled { get; set; }

                /// <summary>
                /// Indicates if next is enabled.
                /// </summary>
                public bool next_enabled { get; set; }

                /// <summary>
                /// Track.
                /// </summary>
                public Track track { get; set; }

                /// <summary>
                /// Current playing position in seconds.
                /// </summary>
                public double playing_position { get; set; }

                /// <summary>
                /// Current server time in seconds since 1970.
                /// </summary>
                public int server_time { get; set; }

                /// <summary>
                /// Volume from 0 to 1.
                /// </summary>
                public double volume { get; set; }

                /// <summary>
                /// Indicates if the user is online.
                /// </summary>
                public bool online { get; set; }

                /// <summary>
                /// Open Graph State.
                /// </summary>
                public OpenGraphState open_graph_state { get; set; }

                /// <summary>
                /// Indicates if Spotify is running.
                /// </summary>
                public bool running { get; set; }

                /// <summary>
                /// Track.
                /// </summary>
                public class Track
                {
                    /// <summary>
                    /// Album resource.
                    /// </summary>
                    public Resource album_resource { get; set; }

                    /// <summary>
                    /// Artist resource.
                    /// </summary>
                    public Resource artist_resource { get; set; }

                    /// <summary>
                    /// Track resource.
                    /// </summary>
                    public Resource track_resource { get; set; }

                    /// <summary>
                    /// Length in seconds.
                    /// </summary>
                    public int length { get; set; }

                    /// <summary>
                    /// Track type???
                    /// </summary>
                    public string track_type { get; set; }

                    /// <summary>
                    /// Resource.
                    /// </summary>
                    public class Resource
                    {
                        /// <summary>
                        /// Resource name.
                        /// </summary>
                        public string name { get; set; }

                        /// <summary>
                        /// Spotify URI.
                        /// </summary>
                        public string uri { get; set; }

                        /// <summary>
                        /// Location.
                        /// </summary>
                        public Location location { get; set; }

                        /// <summary>
                        /// Location.
                        /// </summary>
                        public class Location
                        {
                            /// <summary>
                            /// URL Location.
                            /// </summary>
                            public string og { get; set; }
                        }
                    }
                }

                /// <summary>
                /// Open Graph State
                /// </summary>
                public class OpenGraphState
                {
                    /// <summary>
                    /// Private session. Nothing is shared if true.
                    /// </summary>
                    public bool private_session { get; set; }

                    /// <summary>
                    /// Posting disabled on Facebook.
                    /// </summary>
                    public bool posting_disabled { get; set; }
                }
            }
        }
    }
}
