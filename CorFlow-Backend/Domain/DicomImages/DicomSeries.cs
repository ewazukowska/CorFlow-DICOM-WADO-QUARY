using JsonApiDotNetCore.Resources;
using JsonApiDotNetCore.Resources.Annotations;
using System.Collections.Generic;

namespace Domain.DicomImages
{
    [Resource]
    public class DicomSeries : Identifiable<string>
    {
        [Attr]
        public string SeriesInstanceUID { get; }
        [Attr]
        public int SeriesNumber { get; }
        [Attr]
        public string Modality { get; }
        [Attr]
        public double SliceThickness { get; }
        [HasMany]
        public List<DicomInstance> Instances { get; }



        public DicomSeries(string seriesInstanceUID, int seriesNumber, string modality, 
                        double sliceThickness, List<DicomInstance> instances)
        {
            SeriesInstanceUID = seriesInstanceUID;
            SeriesNumber = seriesNumber;
            Modality = modality;
            SliceThickness = sliceThickness;
            Instances = instances;
        }
    }
}
