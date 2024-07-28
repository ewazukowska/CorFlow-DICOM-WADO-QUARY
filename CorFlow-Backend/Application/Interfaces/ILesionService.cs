using Domain.Entities;


namespace Application.Interfaces
{
    public interface ILesionService
    {
        Task<IEnumerable<Lesion>> GetAsync(Lesion entity, CancellationToken cancellationToken);
    }
}
