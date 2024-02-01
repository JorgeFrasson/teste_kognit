using kognit_core.Model;

namespace kognit_core.Repository
{
    public interface IUserRepository
    {
        Task<bool> SaveUser(KognitUser user);
        Task<bool> SaveChangesAsync();
    }
}