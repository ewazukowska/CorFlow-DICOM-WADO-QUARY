using Application.Interfaces;
using Domain.Entities;
using Instrastructure.Repositories;
using Microsoft.EntityFrameworkCore; // check install here

namespace Application
{
    public class LesionService : ILesionService
    {
        private readonly LesionRepository _repository;

        public LesionService(LesionRepository repository)
        {
            _repository = repository;
        }

        public async Task<IEnumerable<Lesion>> GetAsync(Lesion entity, CancellationToken cancellationToken)
        {
            return await _repository.GetAsync(new JsonApiDotNetCore.Queries.QueryLayer(), cancellationToken);
        }
        public IEnumerable<Lesion> GetAll()
        {
            return _repository.Get().ToList();
        }
    }
}
