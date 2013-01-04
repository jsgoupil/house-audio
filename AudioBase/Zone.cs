// <copyright>
//     Copyright (c) Jean-Sébastien Goupil.
// </copyright>

namespace HouseAudio.AudioBase
{
    /// <summary>
    /// Class representing the zones.
    /// </summary>
    public class Zone
    {
        /// <summary>
        /// Zone id.
        /// </summary>
        public string Id { get; set; }

        /// <summary>
        /// Indicates if the zone is on.
        /// </summary>
        public bool On { get; set; }

        /// <summary>
        /// Volume from 0 to 100.
        /// </summary>
        public int Volume { get; set; }

        /// <summary>
        /// Bass level from 0 to 100.
        /// </summary>
        public int Bass { get; set; }

        /// <summary>
        /// Treble from 0 to 100.
        /// </summary>
        public int Treble { get; set; }

        /// <summary>
        /// Indicates if the zone is muted.
        /// </summary>
        public bool Mute { get; set; }

        /// <summary>
        /// Indicates which input is associated to this zone.
        /// </summary>
        public virtual Input Input { get; set; }
    }
}