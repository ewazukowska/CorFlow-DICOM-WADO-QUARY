using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using JsonApiDotNetCore.Resources;
using JsonApiDotNetCore.Resources.Annotations;

namespace Domain.Entities
{
    public class Lesion : Identifiable<Guid>
    {
        [Attr]
        public string Type {  get; set; }
        [Attr]
        public LesionAttributes Attributes { get; set; }
        [HasOne]
        public RelatedData Image { get; set; }
        [HasOne]
        public RelatedData ImageFeedback { get; set; }
    }

    public class LesionAttributes
    {
        [Attr]
        public string? GlobalId { get; set; }
        [Attr]
        public int Frame { get; set; }
        [Attr]
        public int X { get; set; }
        [Attr]
        public int Y { get; set; }
        [Attr]
        public int Width { get; set; }
        [Attr]
        public int Height { get; set; }
        [Attr]
        public string Dominance { get; set; }
        [Attr]
        public List<string> Section { get; set; }
        [Attr]
        public bool TotalOcclusion { get; set; }
        [Attr]
        public string FirstSegmentOfOcclusion { get; set; }
        [Attr]
        public string FirstSegmentAfterOcclusion { get; set; }
        [Attr]
        public string OcclusionAge { get; set; }
        [Attr]
        public bool? SideBranch { get; set; }
        [Attr]
        public bool BluntStump { get; set; }
        [Attr]
        public bool Bridging { get; set; }
        [Attr]
        public bool Trifurcation { get; set; }
        [Attr]
        public string TrifurcationType { get; set; }
        [Attr]
        public bool Bifurcation { get; set; }
        [Attr]
        public string BifurcationType { get; set; }
        [Attr]
        public string BifurcationAngle { get; set; }
        [Attr]
        public bool AortoOstialStenosis { get; set; }
        [Attr]
        public string OcclustionLenght { get; set; }
        [Attr]
        public bool HeavyCalcification { get; set; }
        [Attr]
        public bool Thrombus { get; set; }
        [Attr]
        public bool SeverTortuosity { get; set; }
        [Attr]
        public string? Comment { get; set; }
        [Attr]
        public string Form { get; set; }
        [Attr]
        public string CreatedBy { get; set; }
        [Attr]
        public DateTime CreateDate { get; set; }
    }

    public class RelatedData : Identifiable<string>
    {
        [Attr]
        public string Type { get; set; }
    }
}
