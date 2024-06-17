using Domain.Entities;

namespace Application.Interfaces
{
    public interface IDummyService
    {
        Task<IEnumerable<int>> GetAsync(CancellationToken cancellationToken);
        IEnumerable<int> GetAll();
    }
}
