using Application.Interfaces;
using Domain.Entities;

namespace Application
{
    public class LesionService : ILesionService
    {
        private List<Lesion> _dummyData;

        public LesionService() 
        { 
            _dummyData = new List<Lesion>
            {
                new Lesion { Id = Guid.NewGuid()},
                new Lesion { Id = Guid.NewGuid()}
            };
        }

        public Task<IEnumerable<Lesion>> GetAsync(Lesion entity, CancellationToken cancellationToken)
        {
            return Task.FromResult<IEnumerable<Lesion>>(_dummyData);    
        }

    }
}
