using Application.Interfaces;
using Domain.Entities;
using Application.Repositories;
using JsonApiDotNetCore.Queries;
using JsonApiDotNetCore.Configuration;

namespace Application
{
    public class LesionService : ILesionService
    {
        private readonly LesionRepository _repository;
        private readonly IResourceGraph _resourceGraph;

        public LesionService(LesionRepository repository, IResourceGraph resourceGraph)
        {
            _repository = repository;
            _resourceGraph = resourceGraph;
        }

        public async Task<IEnumerable<Lesion>> GetAsync(Lesion entity, CancellationToken cancellationToken)
        {
            var resourceType = _resourceGraph.GetResourceType<Lesion>();
            var queryLayer = new QueryLayer(resourceType);
            return await _repository.GetAsync(queryLayer, cancellationToken);
        }
    }
}
