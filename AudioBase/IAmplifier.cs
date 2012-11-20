using System;
using System.Collections.Generic;
using System.ComponentModel.Composition;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace HouseAudio.AudioBase
{
    public interface IAmplifier
    {
        /// <summary>
        /// Sets the zone data.
        /// </summary>
        /// <returns>Zones</returns>
        Task SetZone(Zone zone);

        /// <summary>
        /// Sets the zones data.
        /// </summary>
        /// <returns>Zones</returns>
        Task SetZones(IEnumerable<Zone> zones);

        /// <summary>
        /// Gets the information about one zone.
        /// </summary>
        /// <returns>Zone</returns>
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