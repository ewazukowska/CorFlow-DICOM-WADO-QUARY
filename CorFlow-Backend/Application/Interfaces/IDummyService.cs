using Domain.Entities;

namespace Application.Interfaces
{
    public interface IDummyService
    {
        Task<IEnumerable<Lesion>> GetAsync(CancellationToken cancellationToken);
        IEnumerable<Lesion> GetAll();
    }
}
