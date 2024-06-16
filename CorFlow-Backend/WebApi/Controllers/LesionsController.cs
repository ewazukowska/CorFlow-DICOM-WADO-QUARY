using Microsoft.AspNetCore.Mvc;
using JsonApiDotNetCore.Controllers;
using JsonApiDotNetCore.Services;
using Domain.Entities;
using JsonApiDotNetCore.Configuration;
using Application;
using Infrastructure.Data;
using Microsoft.EntityFrameworkCore;
using Application.Interfaces;
using System.Threading;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LesionsController : JsonApiController<Lesion, Guid>
    {
        private readonly ApplicationDbContext _context;
        private readonly ILesionService _lesionService;

        public LesionsController(
            IJsonApiOptions options, 
            IResourceGraph resourceGraph, 
            ILoggerFactory loggerFactory, 
            IResourceService<Lesion, Guid> resourceService, 
            ApplicationDbContext context,
            ILesionService lesionService) 
            : base(options, resourceGraph, loggerFactory, resourceService)
        {
            _context = context;
            _lesionService = lesionService;
        }

        [HttpPost]
        public override async Task<IActionResult> PostAsync([FromBody] Lesion entity, CancellationToken cancellationToken)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);

            try
            {
                Console.WriteLine("Endpoint called");
                var lesions = await _lesionService.GetAsync(entity, cancellationToken).ConfigureAwait(false);
                return Ok(lesions);
            }
            catch (Exception ex) 
            {
                Console.WriteLine($"Error creating lesion: {ex.Message}");
                return StatusCode(500, "Error creating lesion");
            }
        }

        [HttpPost("dummy")]
        public IActionResult DummyEndpoint()
        {
            Console.WriteLine("Dummy endpoint called");
            return Ok("Dummy endpoint was called");
        }
    }
}
