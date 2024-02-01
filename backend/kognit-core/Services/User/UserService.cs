using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using kognit_core.Model;
using kognit_core.Repository;

namespace kognit_core.Services
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepository;

        public UserService(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }
        public async Task<Boolean> SaveUser(SaveUserRequest user)
        {
            var userDb = new KognitUser();
            userDb.name = user.name;
            userDb.birthdate = user.birthdate;
            userDb.cpf = user.cpf;
            return await _userRepository.SaveUser(userDb);;
        }
    }
}