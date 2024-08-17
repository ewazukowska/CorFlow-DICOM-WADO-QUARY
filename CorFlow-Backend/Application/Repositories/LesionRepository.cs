using Domain.Data;
using Domain.Entities;
using JsonApiDotNetCore.Queries;
using JsonApiDotNetCore.Repositories;
using JsonApiDotNetCore.Resources;
using Microsoft.EntityFrameworkCore;

namespace Application.Repositories
{
    public class LesionRepository : IResourceRepository<Lesion, Guid>
    {
        private readonly ApplicationDbContext _context;

        public LesionRepository(ApplicationDbContext context)
        {
            _context = context ?? throw new ArgumentNullException(nameof(context));
        }

        public async Task<int> CountAsync(JsonApiDotNetCore.Queries.Expressions.FilterExpression filter, 
            CancellationToken cancellationToken) => await _context.Lesions.CountAsync(cancellationToken);
        

        public async Task CreateAsync(Lesion resourceFromRequest, Lesion resourceForDatabase, CancellationToken cancellationToken)
        {
            _context.Lesions.Add(resourceForDatabase);
            await _context.SaveChangesAsync(cancellationToken);
        }

        public async Task DeleteAsync(Lesion resourceFromDatabase, Guid id, CancellationToken cancellationToken)
        {
            _context.Lesions.Remove(resourceFromDatabase);
            await _context.SaveChangesAsync(cancellationToken);
        }

        public async Task<IReadOnlyCollection<Lesion>> GetAsync(QueryLayer queryLayer, CancellationToken cancellationToken)
        {
            var query = _context.Lesions.AsQueryable();
            return await query.ToListAsync(cancellationToken);
        }

        public async Task<Lesion> GetForCreateAsync(Type resourceClrType, Guid id, 
            CancellationToken cancellationToken) => await _context.Lesions.FindAsync(id);
 
        public async Task<Lesion> GetForUpdateAsync(QueryLayer queryLayer, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }

        public async Task RemoveFromToManyRelationshipAsync(Lesion leftResource, ISet<IIdentifiable> rightResourceIds, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }

        public async Task SetRelationshipAsync(Lesion leftResource, object rightValue, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }

        public async Task UpdateAsync(Lesion resourceFromRequest, Lesion resourceFromDatabase, CancellationToken cancellationToken)
        {
            _context.Entry(resourceFromDatabase).CurrentValues.SetValues(resourceFromRequest);
            await _context.SaveChangesAsync(cancellationToken);
        }
    }
}
