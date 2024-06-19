using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain.Entities;
using JsonApiDotNetCore.Data;
using JsonApiDotNetCore.Repositories;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Repositories
{
    public class LesionRepository : IResourceRepository<Lesion, Guid>
    {
        private readonly IDbContextResolver _contextResolver;

        public LesionRepository(IDbContextResolver contextResolver)
        {
            _contextResolver = contextResolver;
        }

        public Task<IEnumerable<Lesion>> GetAsync(CancellationToken cancellationToken)
        {
            var dbContext = _contextResolver.GetContext();
            return dbContext.Lesions.ToListAsync(cancellationToken);
        }

        public Task<IEnumerable<Lesion>> GetAsync(IEnumerable<Guid> ids, CancellationToken cancellationToken)
        {
            var dbContext = _contextResolver.GetContext();
            return dbContext.Lesions.Where(l => ids.Contains(l.Id)).ToListAsync(cancellationToken);
        }

        public Task<Lesion> GetForUpdateAsync(Guid id, CancellationToken cancellationToken)
        {
            var dbContext = _contextResolver.GetContext();
            return dbContext.Lesions.FindAsync(new object[] { id }, cancellationToken);
        }

        public async Task CreateAsync(Lesion entity, CancellationToken cancellationToken)
        {
            var dbContext = _contextResolver.GetContext();
            await dbContext.Lesions.AddAsync(entity, cancellationToken);
            await dbContext.SaveChangesAsync(cancellationToken);
        }

        public async Task<bool> DeleteAsync(Guid id, CancellationToken cancellationToken)
        {
            var dbContext = _contextResolver.GetContext();
            var lesion = await dbContext.Lesions.FindAsync(new object[] { id }, cancellationToken);
            if (lesion == null)
                return false;

            dbContext.Lesions.Remove(lesion);
            await dbContext.SaveChangesAsync(cancellationToken);
            return true;
        }

        public async Task<bool> DeleteAsync(Lesion entity, CancellationToken cancellationToken)
        {
            var dbContext = _contextResolver.GetContext();
            var existing = await dbContext.Lesions.FindAsync(new object[] { entity.Id }, cancellationToken);
            if (existing == null)
                return false;

            dbContext.Lesions.Remove(existing);
            await dbContext.SaveChangesAsync(cancellationToken);
            return true;
        }

        public async Task<bool> UpdateAsync(Lesion entity, CancellationToken cancellationToken)
        {
            var dbContext = _contextResolver.GetContext();
            var existing = await dbContext.Lesions.FindAsync(new object[] { entity.Id }, cancellationToken);
            if (existing == null)
                return false;

            dbContext.Entry(existing).CurrentValues.SetValues(entity);
            await dbContext.SaveChangesAsync(cancellationToken);
            return true;
        }
    }
}
