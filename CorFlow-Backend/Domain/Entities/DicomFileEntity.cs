using JsonApiDotNetCore.Resources;
using JsonApiDotNetCore.Resources.Annotations;
using System.Collections.Generic;

namespace DicomFile
{
    public class DicomFileEntity
    {
        public int Id { get; set; }
        public byte[]? FileData { get; set; }
        public string? FileName { get; set; }
    }
}