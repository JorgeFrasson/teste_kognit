using kognit_core.Model;

namespace kognit_core.Services
{
    public interface IWalletService
    {
        List<KognitWallet> ListWalletByUser(int userId);
        Task<Boolean> SaveUserWallet(SaveUserWalletRequest wallet);
    }

    public class SaveUserWalletRequest{
        public int userId {get; set;}
        public string bank {get; set;}
        public decimal balance {get; set;}
    }
}