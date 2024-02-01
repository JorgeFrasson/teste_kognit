using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using kognit_core.Model;
using kognit_core.Data;

namespace kognit_core.Repository
{
    public class UserRepository : IUserRepository
    {
        private readonly KognitDbContext _context;
        public UserRepository(KognitDbContext context)
        {
            _context = context;
        }
        public async Task<bool> SaveChangesAsync()
        {
            return await _context.SaveChangesAsync() > 0;
        }

        public async Task<bool> SaveUser(KognitUser user)
        {
            _context.Add(user);
            return await this.SaveChangesAsync();
        }
    }
}