using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Application.Interfaces;
using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Infrastructure.Data; // Assuming ApplicationDbContext is defined here

namespace Infrastructure.Repositories
{
    public class LesionRepository : ILesionService
    {
        private readonly ApplicationDbContext _context;

        public LesionRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public IEnumerable<Lesion> GetAll()
        {
            return _context.Lesions.ToList();
        }

        public async Task<IEnumerable<Lesion>> GetAsync(Lesion entity, CancellationToken cancellationToken)
        {
            var query = _context.Lesions.AsQueryable();

            if (entity != null)
            {
                if (entity.Id != Guid.Empty)
                {
                    query = query.Where(l => l.Id == entity.Id);
                }
                if (!string.IsNullOrWhiteSpace(entity.Name))
                {
                    query = query.Where(l => l.Name.Contains(entity.Name));
                }
                if (!string.IsNullOrWhiteSpace(entity.Description))
                {
                    query = query.Where(l => l.Description.Contains(entity.Description));
                }
                if (entity.DateDetected != default(DateTime))
                {
                    query = query.Where(l => l.DateDetected.Date == entity.DateDetected.Date);
                }
            }

            return await query.ToListAsync(cancellationToken);
        }
    }
}
