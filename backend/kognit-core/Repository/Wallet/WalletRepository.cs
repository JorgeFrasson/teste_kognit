using kognit_core.Model;
using kognit_core.Data;

namespace kognit_core.Repository
{
    public class WalletRepository : IWalletRepository
    {   
        private readonly KognitDbContext _context;
        public WalletRepository(KognitDbContext context)
        {
            _context = context;
        }
        public List<KognitWallet> ListWalletByUserId(int userId)
        {
            return _context.Kognit_Wallet.Where( x => x.user_id == userId).ToList();
        }

        public async Task<bool> SaveAsyncChanges()
        {
            return await _context.SaveChangesAsync() > 0;
        }

        public async Task<bool> SaveWallet(KognitWallet wallet)
        {
            _context.Add(wallet);
            return await this.SaveAsyncChanges();
        }
    }
}