namespace DicomFile
{
    public class DicomFileEntity
    {
        public int Id { get; set; }
        public byte[]? FileData { get; set; }
        public string? FileName { get; set; }
    }
}