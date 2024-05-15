using Microsoft.EntityFrameworkCore;
using Application.Interfaces;
using Infrastructure.Data;
using System.Threading.Tasks;
using System.Security.Cryptography.X509Certificates;
using DicomFile;

namespace Infrastructure.Repositories
{
    public class DicomFileRepository : IDicomFileRepository
    {
        private readonly ApplicationDbContext _context;
        public DicomFileRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public Task<DicomFileEntity> GetDicomFileByIdAsync(int id)
        {
            throw new NotImplementedException();
        }

        public async Task<DicomFileEntity> GetDicomFileEntityAsync(int id)
        {
            return await _context.DicomFiles.FindAsync(id);
        }
    }
}
