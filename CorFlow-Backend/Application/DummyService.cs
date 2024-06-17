using Application.Interfaces;
using Domain.Entities;

namespace Application
{
    public class DummyService : IDummyService
    {
        private static List<int> _dummyData;

        public DummyService()
        { 
            _dummyData = new List<int> { 1, 2, 3 };
        }

        public IEnumerable<int> GetAll()
        {
            return _dummyData;
        }

        public Task<IEnumerable<int>> GetAsync(CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }
    }
}
