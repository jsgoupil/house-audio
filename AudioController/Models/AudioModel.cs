// <copyright>
//     Copyright (c) Jean-Sébastien Goupil.
// </copyright>

namespace HouseAudio.AudioController.Models
{
    using System.Collections.Generic;
    using HouseAudio.AudioBase;

    /// <summary>
    /// Audio Model.
    /// </summary>
    public class AudioModel
    {
        /// <summary>
        /// Zones.
        /// </summary>
        public IEnumerable<Zone> Zones { get; set; }

        /// <summary>
        /// Inputs.
        /// </summary>
        public IEnumerable<Input> Inputs { get; set; }
    }
}
