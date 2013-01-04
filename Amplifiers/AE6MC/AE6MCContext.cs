// <copyright>
//     Copyright (c) Jean-Sébastien Goupil.
// </copyright>

namespace HouseAudio.Amplifier.AE6MC
{
    using System.Data.Entity;
    using System.Data.Entity.ModelConfiguration.Conventions;
    using HouseAudio.AudioBase;

    /// <summary>
    /// DbContext for AE6MC.
    /// </summary>
    internal class AE6MCContext : DbContext
    {
        /// <summary>
        /// Saved zones.
        /// </summary>
        public DbSet<Zone> Zones { get; set; }

        /// <summary>
        /// Saved Inputs.
        /// </summary>
        public DbSet<Input> Inputs { get; set; }

        /// <summary>
        /// OnModelCreating
        /// </summary>
        /// <param name="modelBuilder">ModelBuilder</param>
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
        }
    }
}
