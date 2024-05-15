using Application.Interfaces;
using DicomFile;
using Infrastructure.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Repositories
{
    public class Lesion : ILesionService
    {
        public Task<List<Domain.Entities.Lesion>> GetLesionsAsync()
        {
            throw new NotImplementedException();
        }
    }
}