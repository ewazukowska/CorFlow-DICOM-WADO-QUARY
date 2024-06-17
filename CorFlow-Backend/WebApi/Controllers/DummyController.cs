using Microsoft.AspNetCore.Mvc;
using Infrastructure.Data;
using Application.Interfaces;
using System.Threading.Tasks;
using Domain.Entities;


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

        [HttpGet("lesions")]
        public ActionResult<IEnumerable<Lesion>> GetLesions()
        {
            var lesions = _dummyService.GetAll();
            Console.WriteLine("Lesions:");
            foreach (var lesion in lesions)
            {
                Console.WriteLine($" - {lesion.Attributes.TotalOcclusion}: {lesion}");
            }
            return Ok(lesions);
        }
    }
}
