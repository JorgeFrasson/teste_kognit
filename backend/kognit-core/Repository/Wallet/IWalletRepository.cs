using kognit_core.Model;

namespace kognit_core.Repository
{
    public interface IWalletRepository
    {
        List<KognitWallet> ListWalletByUserId(int userId);
        Task<Boolean> SaveWallet(KognitWallet wallet);
        Task<Boolean> SaveAsyncChanges();
    }
}