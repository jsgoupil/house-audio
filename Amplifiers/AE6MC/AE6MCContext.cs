using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Entity;
using HouseAudio.AudioBase;
using System.Data.Entity.ModelConfiguration.Conventions;

namespace HouseAudio.Amplifier.AE6MC
{
    class AE6MCContext : DbContext
    {
        public DbSet<Zone> Zones { get; set; }
        public DbSet<Input> Inputs { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
        }
    }
}
