using Application.Interfaces;
using Domain.Entities;

namespace Application
{
    public class DummyService : IDummyService
    {
        private static List<Lesion> _dummyData;

        public DummyService()
        { 
            _dummyData = new List<Lesion> 
            {
                new Lesion
                {
                    Id = Guid.NewGuid(),
                    Type = "SampleType",
                    Attributes = new LesionAttributes
                    {
                        GlobalId = "abc123",
                        Frame = 1,
                        X = 100,
                        Y = 200,
                        Width = 50,
                        Height = 50,
                        Dominance = "Left",
                        Section = new List<string> { "Section1", "Section2" },
                        TotalOcclusion = false,
                        FirstSegmentOfOcclusion = "Segment1",
                        FirstSegmentAfterOcclusion = "Segment2",
                        OcclusionAge = "Recent",
                        SideBranch = null,
                        BluntStump = true,
                        Bridging = false,
                        Trifurcation = true,
                        TrifurcationType = "Type1",
                        Bifurcation = false,
                        BifurcationType = "",
                        BifurcationAngle = "30 degrees",
                        AortoOstialStenosis = true,
                        OcclustionLenght = "Short",
                        HeavyCalcification = false,
                        Thrombus = true,
                        SeverTortuosity = true,
                        Comment = "Sample comment",
                        Form = "FormA",
                        CreatedBy = "UserA",
                        CreateDate = DateTime.UtcNow
                    },
                    Image = new RelatedData { Id = "image1", Type = "ImageType" },
                    ImageFeedback = new RelatedData { Id = "image2", Type = "ImageFeedbackType" }
                }
            };
        }

        public IEnumerable<Lesion> GetAll()
        {
            return new List<Lesion>(_dummyData);
        }

        public Task<IEnumerable<Lesion>> GetAsync(CancellationToken cancellationToken)
        {
            return Task.FromResult<IEnumerable<Lesion>>(new List<Lesion>(_dummyData));
        }
    }
}
