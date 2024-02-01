using Microsoft.AspNetCore.Mvc;
using kognit_core.Services;
namespace kognit_core.Controllers;


[ApiController]
[Route("user")]
public class UserController : ControllerBase
{
    private readonly ILogger<UserController> _logger;
    private readonly IUserService _userService;
    public UserController(ILogger<UserController> logger, IUserService userService)
    {
        _logger = logger;
        _userService = userService;
    }

    [HttpPost("create")]
    public async Task<IActionResult> Post(SaveUserRequest user)
    {
        return await _userService.SaveUser(user) ? Ok("Usuário criado com sucesso") : BadRequest("Erro ao salvar usuário");
    }
}
