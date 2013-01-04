// <copyright>
//     Copyright (c) Jean-Sébastien Goupil.
// </copyright>

namespace HouseAudio.AudioController.Controllers
{
    using System.ComponentModel.Composition;
    using System.Globalization;
    using System.Web.Http;
    using HouseAudio.AudioBase;
    using HouseAudio.AudioController.Filters;
    using HouseAudio.AudioController.Models;

    /// <summary>
    /// Spotify API.
    /// </summary>
    [Export]
    [NotImplExceptionFilter]
    [PartCreationPolicy(CreationPolicy.NonShared)]
    public class SpotifyController : ApiController
    {
        /// <summary>
        /// SpotifyWebApi class.
        /// </summary>
        private SpotifyWebApi spotifyWebApi;

        /// <summary>
        /// SpotifySearch class.
        /// </summary>
        private SpotifySearch spotifySearch;

        /// <summary>
        /// SpotifyLookup class.
        /// </summary>
        private SpotifyLookup spotifyLookup;

        /// <summary>
        /// Constructor.
        /// </summary>
        /// <param name="spotifyWebApi">SpotifyWebApi</param>
        /// <param name="spotifySearch">SpotifySearch</param>
        /// <param name="spotifyLookup">SpotifyLookup</param>
        [ImportingConstructor]
        public SpotifyController(SpotifyWebApi spotifyWebApi, SpotifySearch spotifySearch, SpotifyLookup spotifyLookup)
        {
            this.spotifySearch = spotifySearch;
            this.spotifyWebApi = spotifyWebApi;
            this.spotifyLookup = spotifyLookup;
        }

        /// <summary>
        /// Gets the album art URL.
        /// </summary>
        /// <param name="id">Spotify URI</param>
        /// <returns>Album art URL</returns>
        [HttpGet]
        public string GetArt(string id)
        {
            return this.spotifyLookup.GetArt(id, SpotifyLookup.ArtSize.Small);
        }

        /// <summary>
        /// Gets information about a Spotify URI.
        /// </summary>
        /// <param name="id">Spotify URI</param>
        /// <param name="extra">Extra information</param>
        /// <returns>Information about the Spotify URI</returns>
        [HttpGet]
        public SpotifyLookupModel Lookup(string id, SpotifyLookup.ExtraInfo extra = SpotifyLookup.ExtraInfo.None)
        {
            var result = this.spotifyLookup.Lookup(id, extra);
            var spotifyLookupModel = new SpotifyLookupModel();
            spotifyLookupModel.trackResult = result as SpotifyLookup.Responses.TrackResult;
            spotifyLookupModel.albumResult = result as SpotifyLookup.Responses.AlbumResult;
            spotifyLookupModel.artistResult = result as SpotifyLookup.Responses.ArtistResult;

            if (spotifyLookupModel.trackResult != null)
            {
                spotifyLookupModel.info = "trackResult";
            }
            else if (spotifyLookupModel.albumResult != null)
            {
                spotifyLookupModel.info = "albumResult";
            }
            else if (spotifyLookupModel.artistResult != null)
            {
                spotifyLookupModel.info = "artistResult";
            }

            return spotifyLookupModel;
        }

        /// <summary>
        /// Searches about albums, artists, or tracks.
        /// </summary>
        /// <param name="id">Query</param>
        /// <param name="page">Page number</param>
        /// <param name="kind">Kind, can be album, artist, track or all</param>
        /// <returns>Result</returns>
        [HttpGet]
        public SpotifySearchModel Search(string id, int? page, string kind)
        {
            var spotifySearchModel = new SpotifySearchModel();
            kind = kind ?? "all";
            kind = kind.ToLower(CultureInfo.InvariantCulture);

            if (!page.HasValue)
            {
                page = 1;
            }

            if (kind == "artist" || kind == "all")
            {
                spotifySearchModel.artistResult = this.spotifySearch.SearchArtist(id, page.Value);
            }

            if (kind == "track" || kind == "all")
            {
                spotifySearchModel.trackResult = this.spotifySearch.SearchTrack(id, page.Value);
            }

            if (kind == "album" || kind == "all")
            {
                spotifySearchModel.albumResult = this.spotifySearch.SearchAlbum(id, page.Value);
            }

            return spotifySearchModel;
        }

        /// <summary>
        /// Gets current Spotify status.
        /// </summary>
        /// <returns>Status.</returns>
        [HttpGet]
        public SpotifyWebApi.Responses.Status Status()
        {
            return this.spotifyWebApi.GetStatus();
        }

        /// <summary>
        /// Plays a speicific song or restart the current song if no parameters are passed.
        /// </summary>
        /// <param name="id">Spotify API track</param>
        /// <param name="context">Spotify API context</param>
        /// <returns>Status</returns>
        [HttpPost]
        public SpotifyWebApi.Responses.Status Play(string id = null, string context = null)
        {
            if (id == null)
            {
                return this.spotifyWebApi.Play();
            }
            else
            {
                return this.spotifyWebApi.Play(id, context);
            }
        }

        /// <summary>
        /// Pauses current song.
        /// </summary>
        /// <returns>Status</returns>
        [HttpPost]
        public SpotifyWebApi.Responses.Status Pause()
        {
            return this.spotifyWebApi.Pause();
        }
    }
}