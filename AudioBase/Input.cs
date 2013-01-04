// <copyright>
//     Copyright (c) Jean-Sébastien Goupil.
// </copyright>

namespace HouseAudio.AudioBase
{
    /// <summary>
    /// Class representing the inputs.
    /// </summary>
    public class Input
    {
        /// <summary>
        /// Input id.
        /// </summary>
        public string Id { get; set; }

        /// <summary>
        /// Checks if two inputs are the same. We look only at the Id.
        /// </summary>
        /// <param name="obj">Other object</param>
        /// <returns>True if they are equal</returns>
        public override bool Equals(object obj)
        {
            // If parameter is null return false.
            if (obj == null)
            {
                return false;
            }

            // If parameter cannot be cast to Input return false.
            Input i = obj as Input;
            if (i == null)
            {
                return false;
            }

            // Return true if the fields match:
            return i.Id == this.Id;
        }

        /// <summary>
        /// Gets the hashcode.
        /// </summary>
        /// <returns>Hashcode</returns>
        public override int GetHashCode()
        {
            return this.Id.GetHashCode();
        }
    }
}