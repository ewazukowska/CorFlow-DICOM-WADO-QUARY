using Microsoft.AspNetCore.Mvc;
using Infrastructure.Data;
using Application.Interfaces;
using System.Threading.Tasks;


namespace WebApi.Controllers
{
    [Route("dummy")]
    [ApiController]
    public class DummyController : BaseApiController
    {
        private readonly DummyDbContext _context;
        private readonly IDummyService _dummyService;

        public DummyController(
            IDummyService dummyService,
            DummyDbContext context)
        {
            _context = context;
            _dummyService = dummyService;
        }

        [HttpPost("lesions")]
        public async Task<IActionResult> Lesions ()
        {
            var result = _dummyService.GetAll();
            return Ok();
        }
    }
}
