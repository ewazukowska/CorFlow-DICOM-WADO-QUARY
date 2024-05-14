using Application;
using Domain;
using MediatR;
using Microsoft.AspNetCore;
using Microsoft.EntityFrameworkCore;
using Infrastructure;
using Microsoft.AspNetCore.Mvc;
using Application.Interfaces;

namespace WebApi.Controllers
{
    public class DicomController : BaseApiController
    {
        [Route("api/[controller]")]
        [ApiController]
        public class DicomFilesController : BaseApiController
        {
            private readonly IDicomFileRepository _dicomFileRepository;
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetDicomFile(int id)
        {
            var dicomFile = await _dicomFileRepository.GetDicomFileByIdAsync(id);

            if (dicomFile == null)
            {
                return NotFound();
            }

            var dicomStream = new MemoryStream(dicomFile.FileData);
            return File(dicomStream, "application/dicom", dicomFile.FileName)
        }
    }
}
