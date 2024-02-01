using Microsoft.AspNetCore.Mvc;
using kognit_core.Services;
using kognit_core.Model;

namespace kognit_core.Controllers
{
    [ApiController]
    [Route("wallet")]
    public class WalletController : ControllerBase
    {      
        private readonly IWalletService _walletService;
        public WalletController(IWalletService walletService)
        {
            _walletService = walletService;
        }
        [HttpGet("listByUser/{userId}")]
        public ActionResult<List<KognitWallet>> ListWalletByUser(int userId){
            var walletList = _walletService.ListWalletByUser(userId);
            return Ok(walletList);
        }
        [HttpPost("create")]
        public async Task<IActionResult> Post(SaveUserWalletRequest wallet){
            return await _walletService.SaveUserWallet(wallet) ? Ok("A carteira do usuário foi salva com succes") : BadRequest("Não foi possível salvar a carteira.");
        }
    }
}