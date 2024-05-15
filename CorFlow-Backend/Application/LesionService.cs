using Application.Interfaces;
using Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application
{
    public class LesionService : ILesionService
    {
        public Task<List<Lesion>> GetLesionsAsync()
        {
            throw new NotImplementedException();
        }
    }
}
