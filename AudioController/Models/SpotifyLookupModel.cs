// <copyright>
//     Copyright (c) Jean-Sébastien Goupil.
// </copyright>

namespace HouseAudio.AudioController.Models
{
    using HouseAudio.AudioBase;

    /// <summary>
    /// Spotify Lookup Model.
    /// </summary>
    public class SpotifyLookupModel
    {
        /// <summary>
        /// Info indicating which of the variable is populated.
        /// Its value can be either albumResult, artistResult, or trackResult.
        /// </summary>
        public string info;

        /// <summary>
        /// Album Result.
        /// </summary>
        public SpotifyLookup.Responses.AlbumResult albumResult;

        /// <summary>
        /// Artist Result.
        /// </summary>
        public SpotifyLookup.Responses.ArtistResult artistResult;

        /// <summary>
        /// Track Result.
        /// </summary>
        public SpotifyLookup.Responses.TrackResult trackResult;
    }
}