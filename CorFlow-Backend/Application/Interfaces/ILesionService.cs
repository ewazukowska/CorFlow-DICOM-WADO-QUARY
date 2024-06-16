using Domain.Entities;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Interfaces
{
    public interface ILesionService
    {
        Task<IEnumerable<Lesion>> GetAsync(Lesion entity, CancellationToken cancellationToken);
    }
}
