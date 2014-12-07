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
        public List<Zone> Zones { get; set; }

        /// <summary>
        /// Inputs.
        /// </summary>
        public List<Input> Inputs { get; set; }
    }
}
