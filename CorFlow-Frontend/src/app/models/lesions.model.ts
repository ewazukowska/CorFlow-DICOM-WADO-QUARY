export class Lesion {
    id: string;
    type: string;
    attributes: LesionAttributes;
    image: RelatedData;
    imageFeedback: RelatedData;
  
    constructor(
      id: string,
      type: string,
      attributes: LesionAttributes,
      image: RelatedData,
      imageFeedback: RelatedData
    ) {
      this.id = id;
      this.type = type;
      this.attributes = attributes;
      this.image = image;
      this.imageFeedback = imageFeedback;
    }
  }
  
  export class LesionAttributes {
    globalId: string;
    frame: number;
    x: number;
    y: number;
    width: number;
    height: number;
    dominance: string;
    section: string[];
    totalOcclusion: boolean;
    firstSegmentOfOcclusion: string;
    firstSegmentAfterOcclusion: string;
    occlusionAge: string;
    sideBranch: string | null;
    bluntStump: boolean;
    bridging: boolean;
    trifurcation: boolean;
    trifurcationType: string;
    bifurcation: boolean;
    bifurcationType: string;
    bifurcationAngle: string;
    aortoOstialStenosis: boolean;
    occlustionLenght: string;
    heavyCalcification: boolean;
    thrombus: boolean;
    severTortuosity: boolean;
    comment: string;
    form: string;
    createdBy: string;
    createDate: Date;
  
    constructor(
      globalId: string,
      frame: number,
      x: number,
      y: number,
      width: number,
      height: number,
      dominance: string,
      section: string[],
      totalOcclusion: boolean,
      firstSegmentOfOcclusion: string,
      firstSegmentAfterOcclusion: string,
      occlusionAge: string,
      sideBranch: string | null,
      bluntStump: boolean,
      bridging: boolean,
      trifurcation: boolean,
      trifurcationType: string,
      bifurcation: boolean,
      bifurcationType: string,
      bifurcationAngle: string,
      aortoOstialStenosis: boolean,
      occlustionLenght: string,
      heavyCalcification: boolean,
      thrombus: boolean,
      severTortuosity: boolean,
      comment: string,
      form: string,
      createdBy: string,
      createDate: Date
    ) {
      this.globalId = globalId;
      this.frame = frame;
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.dominance = dominance;
      this.section = section;
      this.totalOcclusion = totalOcclusion;
      this.firstSegmentOfOcclusion = firstSegmentOfOcclusion;
      this.firstSegmentAfterOcclusion = firstSegmentAfterOcclusion;
      this.occlusionAge = occlusionAge;
      this.sideBranch = sideBranch;
      this.bluntStump = bluntStump;
      this.bridging = bridging;
      this.trifurcation = trifurcation;
      this.trifurcationType = trifurcationType;
      this.bifurcation = bifurcation;
      this.bifurcationType = bifurcationType;
      this.bifurcationAngle = bifurcationAngle;
      this.aortoOstialStenosis = aortoOstialStenosis;
      this.occlustionLenght = occlustionLenght;
      this.heavyCalcification = heavyCalcification;
      this.thrombus = thrombus;
      this.severTortuosity = severTortuosity;
      this.comment = comment;
      this.form = form;
      this.createdBy = createdBy;
      this.createDate = createDate;
    }
  }
  
  export class RelatedData {
    id: string;
    type: string;
  
    constructor(id: string, type: string) {
      this.id = id;
      this.type = type;
    }
  }
  