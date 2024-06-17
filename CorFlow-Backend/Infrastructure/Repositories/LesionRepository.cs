using Application.Interfaces;

namespace Infrastructure.Repositories
{
    public class Lesion : ILesionService
    {
        public IEnumerable<Domain.Entities.Lesion> GetAll()
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<Domain.Entities.Lesion>> GetAsync(Domain.Entities.Lesion entity, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }
    }
}