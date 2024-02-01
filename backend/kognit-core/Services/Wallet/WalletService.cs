using kognit_core.Repository;
using kognit_core.Model;

namespace kognit_core.Services
{
    public class WalletService : IWalletService
    {   
        private readonly IWalletRepository _walletRepository;
        public WalletService(IWalletRepository walletRepository)
        {
            _walletRepository = walletRepository;
        }
        public List<KognitWallet> ListWalletByUser(int userId)
        {
            return _walletRepository.ListWalletByUserId(userId);
        }

        public Task<bool> SaveUserWallet(SaveUserWalletRequest wallet)
        {
            var walletDb = new KognitWallet();
            walletDb.user_id = wallet.userId;
            walletDb.balance = wallet.balance;
            walletDb.bank = wallet.bank;
            walletDb.updated = DateTime.Now;
            return _walletRepository.SaveWallet(walletDb);
            
        }
    }
}