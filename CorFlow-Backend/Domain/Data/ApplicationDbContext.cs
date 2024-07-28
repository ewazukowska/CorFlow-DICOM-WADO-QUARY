using DicomFile;
using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using JsonApiDotNetCore.Resources;
using JsonApiDotNetCore.Resources.Annotations;

namespace Domain.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) {}
        public DbSet<Lesion> Lesions { get; set; }
        public DbSet<RelatedData> RelatedData { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Lesion>().HasKey(x => x.Id);
            modelBuilder.Entity<RelatedData>().HasKey(x => x.Id);
        }
    }
}
