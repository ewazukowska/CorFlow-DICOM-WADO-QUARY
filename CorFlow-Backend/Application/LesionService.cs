using Application.Interfaces;
using Domain.Entities;
using Infrastructure.Data;
using Microsoft.EntityFrameworkCore; // check install here

namespace Application
{
    public class LesionService : ILesionService
    {
        private readonly IResourceRepository<Lesion, Guid> _repository;

        public LesionService(IResourceRepository<Lesion, Guid> repository)
        {
            _repository = repository;
        }

        public async Task<IEnumerable<Lesion>> GetAsync(Lesion entity, CancellationToken cancellationToken)
        {
            var lesions = await _repository.GetAsync(cancellationToken: cancellationToken);
            return lesions;
        }
        public IEnumerable<Lesion> GetAll()
        {
            return _repository.Get().ToList();
        }
    }
}
