using Application.Interfaces;
using Domain.Entities;

namespace Application
{
    public class LesionService : ILesionService
    {
        public Task<List<Lesion>> GetLesionsAsync(Guid id)
        {
            throw new NotImplementedException();
        }
    }
}
