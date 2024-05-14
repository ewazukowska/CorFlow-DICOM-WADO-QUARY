using Application;
using Domain.DicomImages;
using System.Threading.Tasks;

namespace Application.Interfaces
{
    public interface IDicomFileRepository
    {
        Task<DicomFileEntity> GetDicomFileByIdAsync(int id);
    }
}
