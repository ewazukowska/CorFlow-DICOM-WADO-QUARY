using JsonApiDotNetCore.Resources;
using JsonApiDotNetCore.Resources.Annotations;
using System.Collections.Generic;

namespace Domain.DicomImages
{
    [Resource]
    public class DicomInstance : Identifiable<string>
    {
        [Attr]
        public string Url { get; }
        [HasOne]
        public DicomInstanceMetadata Metadata { get; }

        public DicomInstance(string url, DicomInstanceMetadata metadata)
        {
            Url = url;
            Metadata = metadata;
        }
    }

    [Resource]
    public sealed class DicomInstanceMetadata : Identifiable<string>
    {
        public DicomInstanceMetadata(int columns, int rows, int instanceNumber, int sOPClassUID, 
                                    string photometricInterpretation, int bitsAllocated, 
                                    int bitsStored, int pixelRepresentation, List<double> pixelSpacing, 
                                    int highBit, List<int> imageOrientationPatient, List<double> imagePositionPatient, 
                                    string frameOfReferenceUID, List<string> imageType, string modality, 
                                    string sOPInstanceUID, string seriesInstanceUID, string studyInstanceUID, 
                                    int windowCenter, int windowWidth, string seriesData)
        {
            Columns = columns;
            Rows = rows;
            InstanceNumber = instanceNumber;
            SOPClassUID = sOPClassUID;
            PhotometricInterpretation = photometricInterpretation;
            BitsAllocated = bitsAllocated;
            BitsStored = bitsStored;
            PixelRepresentation = pixelRepresentation;
            PixelSpacing = pixelSpacing;
            HighBit = highBit;
            ImageOrientationPatient = imageOrientationPatient;
            ImagePositionPatient = imagePositionPatient;
            FrameOfReferenceUID = frameOfReferenceUID;
            ImageType = imageType;
            Modality = modality;
            SOPInstanceUID = sOPInstanceUID;
            SeriesInstanceUID = seriesInstanceUID;
            StudyInstanceUID = studyInstanceUID;
            WindowCenter = windowCenter;
            WindowWidth = windowWidth;
            SeriesData = seriesData;
        }

        [Attr]
        public int Columns { get; }
        [Attr]
        public int Rows { get; }
        [Attr]
        public int InstanceNumber { get; }
        [Attr]
        public int SOPClassUID { get; }
        [Attr]
        public string PhotometricInterpretation { get; }
        [Attr]
        public int BitsAllocated { get; }
        [Attr]
        public int BitsStored { get; }
        [Attr]
        public int PixelRepresentation { get; }
        [Attr]
        public List<double> PixelSpacing { get; }
        [Attr]
        public int HighBit { get; }
        [Attr]
        public List<int> ImageOrientationPatient { get; }
        [Attr]
        public List<double> ImagePositionPatient { get; }
        [Attr]
        public string FrameOfReferenceUID { get; }
        [Attr]
        public List<string> ImageType {  get; }
        [Attr]
        public string Modality { get; }
        [Attr]
        public string SOPInstanceUID { get; }
        [Attr]
        public string SeriesInstanceUID { get; }
        [Attr]
        public string StudyInstanceUID { get; }
        [Attr]
        public int WindowCenter { get; }
        [Attr]
        public int WindowWidth { get; }
        [Attr]
        public string SeriesData { get; }
    }
}
