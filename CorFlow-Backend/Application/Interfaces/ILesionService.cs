using Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Interfaces
{
    public interface ILesionService
    {
        Task<List<Lesion>> GetLesionsAsync(Guid id);
    }
}
