using Microsoft.EntityFrameworkCore;
using kognit_core.Model;

namespace kognit_core.Data
{
    public class KognitDbContext : DbContext
    {
        public KognitDbContext(DbContextOptions<KognitDbContext> options) : base(options){ }
        public DbSet<KognitUser> Kognit_User { get; set; }
        public DbSet<KognitWallet> Kognit_Wallet { get; set; }
    }
}