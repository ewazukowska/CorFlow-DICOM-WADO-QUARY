using Microsoft.AspNetCore.Mvc;
using JsonApiDotNetCore.Controllers;
using JsonApiDotNetCore.Services;
using Domain.Entities;
using JsonApiDotNetCore.Configuration;
using Application;
using Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LesionsController : JsonApiController<Lesion, Guid>
    {
        private readonly ApplicationDbContext _context;
        public LesionsController(
            IJsonApiOptions options, 
            IResourceGraph resourceGraph, 
            ILoggerFactory loggerFactory, 
            IResourceService<Lesion, Guid> resourceService, ApplicationDbContext context) 
            : base(options, resourceGraph, loggerFactory, resourceService)
        {
            _context = context;
        }
    }
}
