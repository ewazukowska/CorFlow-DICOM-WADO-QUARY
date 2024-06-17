using Microsoft.AspNetCore.Mvc;
using Infrastructure.Data;
using Application.Interfaces;
using System.Threading.Tasks;


namespace WebApi.Controllers
{
    [Route("test/[controller]")]
    [ApiController]
    public class DummyController : BaseApiController
    {
        private readonly ApplicationDbContext _contextDummy;
        private readonly ILesionService _lesionServiceDummy;

        public DummyController(
            ApplicationDbContext context,
            ILesionService lesionService)
        {
            _contextDummy = context;
            _lesionServiceDummy = lesionService;
        }

        [HttpPost]
        public async Task<IActionResult> GetDicoms ()
        {
            var result = _lesionServiceDummy.GetAll();
            return Ok();
        }
    }
}
