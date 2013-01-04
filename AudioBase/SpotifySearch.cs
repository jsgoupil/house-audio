// <copyright>
//     Copyright (c) Jean-Sébastien Goupil.
// </copyright>

namespace HouseAudio.AudioBase
{
    using System.Collections.Generic;
    using System.ComponentModel.Composition;
    using System.Globalization;
    using System.Net;
    using Newtonsoft.Json;

    /// <summary>
    /// SpotifySearch searches for albums, artists, or tracks on Spotify.
    /// </summary>
    [Export]
    public class SpotifySearch
    {
        /// <summary>
        /// Mock path for returning albums.
        /// </summary>
        [Import("SpotifySearch_MockAlbums", AllowDefault = true)]
        private string mockAlbums = null;

        /// <summary>
        /// Mock path for returning artists.
        /// </summary>
        [Import("SpotifySearch_MockArtists", AllowDefault = true)]
        private string mockArtists = null;

        /// <summary>
        /// Mock path for returning tracks.
        /// </summary>
        [Import("SpotifySearch_MockTracks", AllowDefault = true)]
        private string mockTracks = null;

        /// <summary>
        /// Spotify Host.
        /// </summary>
        private string host;

        /// <summary>
        /// Constructor.
        /// </summary>
        public SpotifySearch()
        {
            this.host = "http://ws.spotify.com/search/1/";
        }

        /// <summary>
        /// Searches for existing albums.
        /// </summary>
        /// <param name="search">Search query</param>
        /// <param name="pageNumber">Page number</param>
        /// <returns>Results from Spotify</returns>
        public Responses.AlbumResult SearchAlbum(string search, int pageNumber = 1)
        {
            string url = string.Format("album.json?q={0}&page={1}", search, pageNumber);
            return JsonConvert.DeserializeObject<Responses.AlbumResult>(this.RequestContent(url, this.mockAlbums));
        }

        /// <summary>
        /// Searches for existing artists.
        /// </summary>
        /// <param name="search">Search query</param>
        /// <param name="pageNumber">Page number</param>
        /// <returns>Results from Spotify</returns>
        public Responses.ArtistResult SearchArtist(string search, int pageNumber = 1)
        {
            string url = string.Format("artist.json?q={0}&page={1}", search, pageNumber);
            return JsonConvert.DeserializeObject<Responses.ArtistResult>(this.RequestContent(url, this.mockArtists));
        }

        /// <summary>
        /// Searches for existing tracks.
        /// </summary>
        /// <param name="search">Search query</param>
        /// <param name="pageNumber">Page number</param>
        /// <returns>Results from Spotify</returns>
        public Responses.TrackResult SearchTrack(string search, int pageNumber = 1)
        {
            string url = string.Format("track.json?q={0}&page={1}", search, pageNumber);
            return JsonConvert.DeserializeObject<Responses.TrackResult>(this.RequestContent(url, this.mockTracks));
        }

        /// <summary>
        /// Makes a request to the URL or reads the mock file if it's provided.
        /// </summary>
        /// <param name="url">URL</param>
        /// <param name="mockFilePath">Mock file</param>
        /// <returns>Content</returns>
        private string RequestContent(string url, string mockFilePath = null)
        {
            if (mockFilePath != null)
            {
                return System.IO.File.ReadAllText(mockFilePath);
            }

            return this.RequestUrl(url);
        }

        /// <summary>
        /// Makes a request.
        /// </summary>
        /// <param name="url">Spotify URL</param>
        /// <returns>String returned by Spotify</returns>
        private string RequestUrl(string url)
        {
            return new WebClient().DownloadString(string.Format(CultureInfo.InvariantCulture, "{0}{1}", this.host, url));
        }

        /// <summary>
        /// Responses by Spotify.
        /// </summary>
        public class Responses
        {
            /// <summary>
            /// Info.
            /// </summary>
            public class Info
            {
                /// <summary>
                /// Number of results.
                /// </summary>
                public int num_results;

                /// <summary>
                /// Limit returned.
                /// </summary>
                public int limit;

                /// <summary>
                /// Current offset.
                /// </summary>
                public int offset;

                /// <summary>
                /// Query run.
                /// </summary>
                public string query;

                /// <summary>
                /// Type of info returned.
                /// </summary>
                public string type;

                /// <summary>
                /// Current page.
                /// </summary>
                public int page;
            }

            /// <summary>
            /// Availability.
            /// </summary>
            public class Availability
            {
                /// <summary>
                /// Territories where available.
                /// </summary>
                public string territories;
            }

            /// <summary>
            /// External Ids.
            /// </summary>
            public class ExternalId
            {
                /// <summary>
                /// ???
                /// </summary>
                public string type;

                /// <summary>
                /// ???
                /// </summary>
                public string id;
            }

            /// <summary>
            /// Album.
            /// </summary>
            public class Album
            {
                /// <summary>
                /// Album released date.
                /// </summary>
                public string released;

                /// <summary>
                /// Spotify URI.
                /// </summary>
                public string href;

                /// <summary>
                /// Album name.
                /// </summary>
                public string name;

                /// <summary>
                /// Popularity from 0 to 1.
                /// </summary>
                public string popularity;

                /// <summary>
                /// Availability.
                /// </summary>
                public Availability availability;
            }

            /// <summary>
            /// Artist.
            /// </summary>
            public class Artist
            {
                /// <summary>
                /// Spotify URI.
                /// </summary>
                public string href;

                /// <summary>
                /// Artist name.
                /// </summary>
                public string name;

                /// <summary>
                /// Popularity from 0 to 1.
                /// </summary>
                public string popularity;
            }

            /// <summary>
            /// Track.
            /// </summary>
            public class Track
            {
                /// <summary>
                /// Album.
                /// </summary>
                public Album album;

                /// <summary>
                /// Track name.
                /// </summary>
                public string name;

                /// <summary>
                /// Popularity from 0 to 1.
                /// </summary>
                public string popularity;

                /// <summary>
                /// ???
                /// </summary>
                [JsonProperty("external-ids")]
                public List<ExternalId> external_ids;

                /// <summary>
                /// Length in seconds.
                /// </summary>
                public double length;

                /// <summary>
                /// Spotify URI.
                /// </summary>
                public string href;

                /// <summary>
                /// List of artists.
                /// </summary>
                public List<Artist> artists;

                /// <summary>
                /// Track number.
                /// </summary>
                [JsonProperty("track-number")]
                public string track_number;
            }

            /// <summary>
            /// Album Result.
            /// </summary>
            public class AlbumResult
            {
                /// <summary>
                /// Info.
                /// </summary>
                public Info info;

                /// <summary>
                /// List of albums.
                /// </summary>
                public List<Album> albums;
            }

            /// <summary>
            /// Artist Result.
            /// </summary>
            public class ArtistResult
            {
                /// <summary>
                /// Info.
                /// </summary>
                public Info info;

                /// <summary>
                /// List of artists.
                /// </summary>
                public List<Artist> artists;
            }

            /// <summary>
            /// Track Result.
            /// </summary>
            public class TrackResult
            {
                /// <summary>
                /// Info.
                /// </summary>
                public Info info;

                /// <summary>
                /// List or tracks.
                /// </summary>
                public List<Track> tracks;
            }
        }
    }
}
