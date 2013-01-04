// <copyright>
//     Copyright (c) Jean-Sébastien Goupil.
// </copyright>

namespace HouseAudio.AudioController.Models
{
    using HouseAudio.AudioBase;

    /// <summary>
    /// Spotify Search Model.
    /// </summary>
    public class SpotifySearchModel
    {
        /// <summary>
        /// Album Result.
        /// </summary>
        public SpotifySearch.Responses.AlbumResult albumResult;

        /// <summary>
        /// Artist Result.
        /// </summary>
        public SpotifySearch.Responses.ArtistResult artistResult;

        /// <summary>
        /// Track Result.
        /// </summary>
        public SpotifySearch.Responses.TrackResult trackResult;
    }
}