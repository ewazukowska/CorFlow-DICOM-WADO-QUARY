using Domain.Entities;
using JsonApiDotNetCore.Queries;
using JsonApiDotNetCore.Repositories;
using JsonApiDotNetCore.Resources;

namespace Application.Interfaces
{
    public interface ILesionRepository : IResourceRepository<Lesion, Guid>
    {
        Task AddToToManyRelationshipAsync(Lesion leftResource, Guid leftId, ISet<IIdentifiable> rightResourceIds, CancellationToken cancellationToken);
        Task<int> CountAsync(JsonApiDotNetCore.Queries.Expressions.FilterExpression filter, CancellationToken cancellationToken);
        Task CreateAsync(Lesion resourceFromRequest, Lesion resourceForDatabase, CancellationToken cancellationToken);
        Task DeleteAsync(Lesion resourceFromDatabase, Guid id, CancellationToken cancellationToken);
        Task<IReadOnlyCollection<Lesion>> GetAsync(QueryLayer queryLayer, CancellationToken cancellationToken);
        Task<Lesion> GetForCreateAsync(Type resourceClrType, Guid id, CancellationToken cancellationToken);
        Task<Lesion> GetForUpdateAsync(QueryLayer queryLayer, CancellationToken cancellationToken);
        Task RemoveFromToManyRelationshipAsync(Lesion leftResource, ISet<IIdentifiable> rightResourceIds, CancellationToken cancellationToken);
        Task SetRelationshipAsync(Lesion leftResource, object rightValue, CancellationToken cancellationToken);
        Task UpdateAsync(Lesion resourceFromRequest, Lesion resourceFromDatabase, CancellationToken cancellationToken);
    }
}
