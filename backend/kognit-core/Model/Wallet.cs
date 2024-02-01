using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace kognit_core.Model
{
    public class KognitWallet
    {
        public int id { get; set; }
        public string bank { get; set; }
        public decimal balance { get; set; }
        public int user_id { get; set; }
        public DateTime updated { get; set; }
    } 
}