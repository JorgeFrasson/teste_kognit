using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using kognit_core.Model;

namespace kognit_core.Services
{
    public interface IUserService
    {
        Task<Boolean> SaveUser(SaveUserRequest user);
    }

    public class SaveUserRequest {
        public string name { get; set; }
        public string cpf { get; set; }
        public DateTime birthdate { get; set; }
    }
}