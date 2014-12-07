// <copyright>
//     Copyright (c) Jean-Sébastien Goupil.
// </copyright>

namespace HouseAudio.AudioBase
{
    using System.Collections.Generic;
    using System.Threading.Tasks;

    /// <summary>
    /// Interface for any kind of amplifier.
    /// </summary>
    public interface IAmplifier
    {
        /// <summary>
        /// Sets the zone data.
        /// </summary>
        /// <param name="zone">Zone</param>
        /// <param name="force">Force</param>
        /// <returns>Task</returns>
        Task SetZone(Zone zone, bool force);

        /// <summary>
        /// Sets the zones data.
        /// </summary>
        /// <param name="zones">Zones</param>
        /// <param name="force">Force</param>
        /// <returns>Task</returns>
        Task SetZones(IEnumerable<Zone> zones, bool force);

        /// <summary>
        /// Gets the information about one zone.
        /// </summary>
        /// <param name="zone">Zone</param>
        /// <returns>Task</returns>
        Zone GetZone(Zone zone);

        /// <summary>
        /// Gets the available zones.
        /// </summary>
        /// <returns>Zones</returns>
        IEnumerable<Zone> GetZones();

        /// <summary>
        /// Gets the available inputs.
        /// </summary>
        /// <returns>Inputs</returns>
        IEnumerable<Input> GetInputs();

        /// <summary>
        /// Resets the amplifier.
        /// </summary>
        /// <returns>Async.</returns>
        Task Reset();

        /// <summary>
        /// Gets the version of the amplifier.
        /// </summary>
        /// <returns>Version</returns>
        Task<string> Version();
    }
}