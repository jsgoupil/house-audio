// <copyright>
//     Copyright (c) Jean-Sébastien Goupil.
// </copyright>

namespace HouseAudio.AudioController.Models
{
    using System.Collections.Generic;
    using HouseAudio.AudioBase;

    /// <summary>
    /// Zone and Inputs model.
    /// </summary>
    public class ZoneAndInputs
    {
        /// <summary>
        /// Zone.
        /// </summary>
        public Zone Zone { get; set; }

        /// <summary>
        /// Inputs.
        /// </summary>
        public IEnumerable<Input> Inputs { get; set; }
    }
}
