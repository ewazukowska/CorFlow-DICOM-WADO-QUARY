using Application.Interfaces;

namespace Infrastructure.Repositories
{
    public class Lesion : ILesionService
    {
        public Task<List<Domain.Entities.Lesion>> GetLesionsAsync(Guid id)
        {
            throw new NotImplementedException();
        }
    }
}