using Microsoft.AspNetCore.Mvc;
using JsonApiDotNetCore.Controllers;
using JsonApiDotNetCore.Services;
using Domain.Entities;
using JsonApiDotNetCore.Configuration;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LesionsController : JsonApiController<Lesion, Guid>
    {
        public LesionsController(IJsonApiOptions options, IResourceGraph resourceGraph, ILoggerFactory loggerFactory, IResourceService<Lesion, Guid> resourceService) 
            : base(options, resourceGraph, loggerFactory, resourceService)
        {
        }
    }
}
