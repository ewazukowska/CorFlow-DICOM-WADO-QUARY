using Domain.Entities;
using Infrastructure.Data;
using JsonApiDotNetCore.Queries;
using JsonApiDotNetCore.Repositories;
using JsonApiDotNetCore.Resources;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Repositories
{
    public class LesionRepository : IResourceRepository<Lesion, Guid>
    {
        private readonly ApplicationDbContext _context;

        public LesionRepository(ApplicationDbContext context)
        {
            _context = context ?? throw new ArgumentNullException(nameof(context));
        }

        public async Task AddToToManyRelationshipAsync(Lesion leftResource, Guid leftId, ISet<IIdentifiable> rightResourceIds, CancellationToken cancellationToken)
        {
            // Implement adding to many-to-many relationships if needed
            throw new NotImplementedException();
        }

        public async Task<int> CountAsync(JsonApiDotNetCore.Queries.Expressions.FilterExpression filter, CancellationToken cancellationToken)
        {
            // Implement counting resources based on filter expression
            return await _context.Lesions.CountAsync(cancellationToken);
        }

        public async Task CreateAsync(Lesion resourceFromRequest, Lesion resourceForDatabase, CancellationToken cancellationToken)
        {
            // Implement creating a new resource
            _context.Lesions.Add(resourceForDatabase);
            await _context.SaveChangesAsync(cancellationToken);
        }

        public async Task DeleteAsync(Lesion resourceFromDatabase, Guid id, CancellationToken cancellationToken)
        {
            // Implement deleting a resource
            _context.Lesions.Remove(resourceFromDatabase);
            await _context.SaveChangesAsync(cancellationToken);
        }

        public async Task<IReadOnlyCollection<Lesion>> GetAsync(QueryLayer queryLayer, CancellationToken cancellationToken)
        {
            // Implement fetching resources based on query layer
            var query = _context.Lesions.AsQueryable();
            // Apply queryLayer if needed
            return await query.ToListAsync(cancellationToken);
        }

        public async Task<Lesion> GetForCreateAsync(Type resourceClrType, Guid id, CancellationToken cancellationToken)
        {
            // Implement preparing a resource for creation
            return await _context.Lesions.FindAsync(id);
        }

        public async Task<Lesion> GetForUpdateAsync(QueryLayer queryLayer, CancellationToken cancellationToken)
        {
            // Implement fetching a resource for update based on query layer
            throw new NotImplementedException();
        }

        public async Task RemoveFromToManyRelationshipAsync(Lesion leftResource, ISet<IIdentifiable> rightResourceIds, CancellationToken cancellationToken)
        {
            // Implement removing from many-to-many relationships if needed
            throw new NotImplementedException();
        }

        public async Task SetRelationshipAsync(Lesion leftResource, object rightValue, CancellationToken cancellationToken)
        {
            // Implement setting a relationship between resources if needed
            throw new NotImplementedException();
        }

        public async Task UpdateAsync(Lesion resourceFromRequest, Lesion resourceFromDatabase, CancellationToken cancellationToken)
        {
            // Implement updating a resource
            _context.Entry(resourceFromDatabase).CurrentValues.SetValues(resourceFromRequest);
            await _context.SaveChangesAsync(cancellationToken);
        }
    }
}
