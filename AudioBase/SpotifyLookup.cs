// <copyright>
//     Copyright (c) Jean-Sébastien Goupil.
// </copyright>

namespace HouseAudio.AudioBase
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.Composition;
    using System.Globalization;
    using System.Net;
    using System.Text.RegularExpressions;
    using Newtonsoft.Json;

    /// <summary>
    /// SpotifyLookup checks for a specific album, artist, or track on Spotify.
    /// </summary>
    [Export]
    public class SpotifyLookup
    {
        /// <summary>
        /// Mock path for returning an album.
        /// </summary>
        [Import("SpotifyLookup_MockAlbum", AllowDefault = true)]
        private string mockAlbum = null;

        /// <summary>
        /// Mock path for returning an artist.
        /// </summary>
        [Import("SpotifyLookup_MockArtist", AllowDefault = true)]
        private string mockArtist = null;

        /// <summary>
        /// Mock path for returning a track.
        /// </summary>
        [Import("SpotifyLookup_MockTrack", AllowDefault = true)]
        private string mockTrack = null;

        /// <summary>
        /// Spotify Host.
        /// </summary>
        private string host;

        /// <summary>
        /// Constructor.
        /// </summary>
        public SpotifyLookup()
        {
            this.host = "http://ws.spotify.com/lookup/1/.json";
        }

        /// <summary>
        /// Extra info for albums or artists.
        /// </summary>
        public enum ExtraInfo
        {
            /// <summary>
            /// Gets no extra info.
            /// </summary>
            None,

            /// <summary>
            /// Gets basic extra info.
            /// </summary>
            Basic,

            /// <summary>
            /// Gets detailed extra info.
            /// </summary>
            Detailed,
        }

        /// <summary>
        /// Art size.
        /// </summary>
        public enum ArtSize
        {
            /// <summary>
            /// Gets the default Spotify image with a tag.
            /// </summary>
            Default,

            /// <summary>
            /// Gets an image 300x300.
            /// </summary>
            Small,

            /// <summary>
            /// Gets an image 640x640.
            /// </summary>
            Large,
        }

        /// <summary>
        /// Lookup an album, artist, or track.
        /// </summary>
        /// <param name="search">Spotify URI</param>
        /// <param name="extra">Extra info if supported</param>
        /// <returns>One of the three available result.</returns>
        public object Lookup(string search, ExtraInfo extra = ExtraInfo.None)
        {
            string[] splits = search.Split(new string[] { ":" }, StringSplitOptions.None);
            switch (splits[1])
            {
                case "album":
                    return this.LookupAlbum(search, extra);
                case "artist":
                    return this.LookupArtist(search, extra);
                case "track":
                    return this.LookupTrack(search);
            }

            return null;
        }

        /// <summary>
        /// Looks up an album.
        /// </summary>
        /// <param name="search">Spotify URI</param>
        /// <param name="onTracks">Extra information about the tracks</param>
        /// <returns>Album results</returns>
        public Responses.AlbumResult LookupAlbum(string search, ExtraInfo onTracks = ExtraInfo.None)
        {
            string extraString;
            switch (onTracks)
            {
                case ExtraInfo.Basic:
                    extraString = "&extras=track";
                    break;
                case ExtraInfo.Detailed:
                    extraString = "&extras=trackdetail";
                    break;
                default:
                    extraString = string.Empty;
                    break;
            }

            string url = string.Format("?uri={0}{1}", search, extraString);
            return JsonConvert.DeserializeObject<Responses.AlbumResult>(this.RequestContent(url, this.mockAlbum));
        }

        /// <summary>
        /// Looks up an artist.
        /// </summary>
        /// <param name="search">Spotify URI</param>
        /// <param name="onAlbums">Extra information about the albums</param>
        /// <returns>Artist results</returns>
        public Responses.ArtistResult LookupArtist(string search, ExtraInfo onAlbums = ExtraInfo.None)
        {
            string extraString;
            switch (onAlbums)
            {
                case ExtraInfo.Basic:
                    extraString = "&extras=album";
                    break;
                case ExtraInfo.Detailed:
                    extraString = "&extras=albumdetail";
                    break;
                default:
                    extraString = string.Empty;
                    break;
            }

            string url = string.Format("?uri={0}{1}", search, extraString);
            return JsonConvert.DeserializeObject<Responses.ArtistResult>(this.RequestContent(url, this.mockArtist));
        }

        /// <summary>
        /// Looks up a track.
        /// </summary>
        /// <param name="search">Spotify URI</param>
        /// <returns>Track results</returns>
        public Responses.TrackResult LookupTrack(string search)
        {
            string url = string.Format("?uri={0}", search);
            return JsonConvert.DeserializeObject<Responses.TrackResult>(this.RequestContent(url, this.mockTrack));
        }

        /// <summary>
        /// Gets a link to the album cover for a specific album or artist.
        /// </summary>
        /// <param name="uri">Spotify URI</param>
        /// <param name="size">Art size.</param>
        /// <returns>URL</returns>
        public string GetArt(string uri, ArtSize size = ArtSize.Default)
        {
            try
            {
                var splits = uri.Split(new string[] { ":" }, StringSplitOptions.None);
                string raw = new WebClient().DownloadString("http://open.spotify.com/" + splits[1] + "/" + splits[2]);
                var match = Regex.Match(raw, "<meta property=\"og:image\" content=\"(.*)\">", RegexOptions.Compiled);
                if (match.Success)
                {
                    var url = Regex.Match(raw, "<meta property=\"og:image\" content=\"(.*)\">", RegexOptions.Compiled).Groups[1];

                    // We did not find a cover
                    if (url.Value.EndsWith("image/"))
                    {
                        return "http://open.spotify.com/static/images/artists.png";
                    }

                    return url.Value.Replace("image", this.GetArtSize(size));
                }
            }
            catch
            {
                return string.Empty;
            }

            return string.Empty;
        }

        /// <summary>
        /// Returns the art size string based on the enum.
        /// </summary>
        /// <param name="size">Size</param>
        /// <returns>String based on the enum</returns>
        private string GetArtSize(ArtSize size)
        {
            switch (size)
            {
                case ArtSize.Small:
                    return "300";
                case ArtSize.Large:
                    return "640";
                default:
                    return "image";
            }
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
            try
            {
                return new WebClient().DownloadString(string.Format(CultureInfo.InvariantCulture, "{0}{1}", this.host, url));
            }
            catch
            {
                return string.Empty;
            }
        }

        /// <summary>
        /// Responses by Spotify.
        /// </summary>
        public class Responses
        {
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
            /// Info.
            /// </summary>
            public class Info
            {
                /// <summary>
                /// Type of info returned.
                /// </summary>
                public string type;
            }

            /// <summary>
            /// Album.
            /// </summary>
            public class Album
            {
                /// <summary>
                /// Spotify URI.
                /// </summary>
                [JsonProperty("artist-id")]
                public string artist_id;

                /// <summary>
                /// Album name.
                /// </summary>
                public string name;

                /// <summary>
                /// Artist name.
                /// </summary>
                public string artist;

                /// <summary>
                /// ???
                /// </summary>
                [JsonProperty("external-ids")]
                public List<ExternalId> external_ids;

                /// <summary>
                /// Album released date.
                /// </summary>
                public string released;

                /// <summary>
                /// Spotify URI.
                /// </summary>
                public string href;

                /// <summary>
                /// Availability.
                /// </summary>
                public Availability availability;

                /// <summary>
                /// List of tracks.
                /// </summary>
                public List<Track> tracks;
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
                /// List of albums.
                /// </summary>
                public List<AlbumResult> albums;
            }

            /// <summary>
            /// Track.
            /// </summary>
            public class Track
            {
                /// <summary>
                /// Track is available.
                /// </summary>
                public bool available;

                /// <summary>
                /// Spotify URI.
                /// </summary>
                public string href;

                /// <summary>
                /// List of artists.
                /// </summary>
                public List<Artist> artists;

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
                /// Disc number.
                /// </summary>
                [JsonProperty("disc-number")]
                public string disc_number;

                /// <summary>
                /// Track number.
                /// </summary>
                [JsonProperty("track-number")]
                public string track_number;

                /// <summary>
                /// Album.
                /// </summary>
                public Album album;
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
                /// Album.
                /// </summary>
                public Album album;
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
                /// Artist.
                /// </summary>
                public Artist artist;
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
                /// Track.
                /// </summary>
                public Track track;
            }
        }
    }
}
