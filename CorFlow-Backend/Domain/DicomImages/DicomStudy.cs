using JsonApiDotNetCore.Resources;
using JsonApiDotNetCore.Resources.Annotations;

namespace Domain.DicomImages
{
    [Resource]
    public class DicomStudy : Identifiable<string>
    {
        [Attr]
        public string StudyInstanceUID { get; }
        [Attr]
        public string StudyData {  get; }
        [Attr]
        public string StudyTime { get; }
        [Attr]
        public string PatientName { get;  }
        [Attr]
        public string PatientID {  get; }
        [Attr]
        public string AccessionNumber { get; }
        [Attr]
        public string PatientAge { get; }
        [Attr]
        public string PatientSex { get; }
        [Attr]
        public int NumInstances { get; }
        [Attr]
        public string Modalities { get; }

        [HasMany]
        public List<DicomSeries> Series { get; }

        public DicomStudy(string studyInstanceUID, string studyData, string studyTime, 
            string patientName, string patientID, string accessionNumber, string patientAge, 
            string patientSex, int numInstances, string modalities, List<DicomSeries> series)
        {
            StudyInstanceUID = studyInstanceUID;
            StudyData = studyData;
            StudyTime = studyTime;
            PatientName = patientName;
            PatientID = patientID;
            AccessionNumber = accessionNumber;
            PatientAge = patientAge;
            PatientSex = patientSex;
            NumInstances = numInstances;
            Modalities = modalities;
            Series = series;
        }
    }
}
    