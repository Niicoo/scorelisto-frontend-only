


export class Element {
  private tag:string;
  private childs:Element[];
  private parent:Element;
  private text:string;
  private attributes:{[attr_name:string]:string};

  constructor(tag:string, parent:Element=null) {
    this.tag = tag;
    this.childs = [];
    this.text = '';
    this.attributes = {};
    this.parent = parent;
  }

  SubElement(tag:string):Element {
    let newElement = new Element(tag, this);
    this.addChild(newElement);
    return newElement;
  }

  addChild(element:Element){
    element.parent = this;
    this.childs.push(element);
  }

  setText(text:string){
    this.text = text;
  }

  getText():string {
    return this.text;
  }

  setAttr(attributes:{[attr_name:string]:string}  ) {
    this.attributes = attributes;
  }

  getAttr() {
    return this.attributes;
  }

  getParent() {
    return this.parent;
  }

  getTag():string {
    return this.tag;
  }

  tostring(mainIndent:string=''){
    let hasChilds:boolean = this.childs.length !== 0;
    let hasText:boolean = this.text.length !== 0;
    let hasAttr:boolean = Object.keys(this.attributes).length !== 0;

    let childIndent:string = mainIndent + '  ';
    let stringContent:string = '';
    // Start tag
    stringContent += mainIndent + "<" + this.tag;
    // Atributes
    if(hasAttr) {
      for(let attr in this.attributes) {
        stringContent += ' ' + attr + '="' + this.attributes[attr] + '"';
      }
    }
    if(!hasText && !hasChilds) {
      stringContent += "/>" + "\n";
      return stringContent;
    } else if(!hasChilds){
      stringContent += ">";
    } else {
      stringContent += ">" + "\n";
    }
    // Text content
    if(hasText){
      if(hasChilds) {
        stringContent += childIndent + this.text + "\n";
      }
      else {
        stringContent += this.text;
      }
    }
    // Childs content
    for(let child of this.childs) {
      stringContent += child.tostring(childIndent);
    }
    // End tag
    if(hasChilds) {
      stringContent += mainIndent + "</" + this.tag + ">" + "\n";
    } else {
      stringContent += "</" + this.tag + ">" + "\n";
    }
    
    return stringContent;
  }

  findall(subElementName:string):Element[] {
    let listMatch:Element[] = [];
    for(let child of this.childs) {
      if(child.tag === subElementName) {
        listMatch.push(child);
      }
    }
    return listMatch;
  }

  find(subElementName:string):Element {
    for(let child of this.childs) {
      if(child.tag === subElementName) {
        return child;
      }
    }
    return null;
  }

}



export function CreateAttributesElement(
  attributes:{
    "divisions"?:number,
    "key_fifths"?:number,
    "key_mode"?:string,
    "time_beats"?:number,
    "time_beattype"?:number,
    "clef_sign"?:string,
    "clef_line"?:number
  }):Element {

  if(("key_mode" in attributes) && !("key_fifths" in attributes)) {
    console.log("you need to defined at least the 'fifths' key parameters");
  }
  
  if((!("time_beats" in attributes) && ("time_beattype" in attributes)) || 
     (("time_beats" in attributes) && !("time_beattype" in attributes))) {
    console.log("you need to defined any or both of the time parameters: 'beats' and 'beat-type'");
  }

  if(("clef_line" in attributes) && !("clef_sign" in attributes)) {
    console.log("you need to defined at least the 'sign' time parameters");
  }
  
  
  let E_attributes = new Element("attributes");

  // divisions
  if("divisions" in attributes) {
    let E_divisions = E_attributes.SubElement("divisions");
    E_divisions.setText(attributes['divisions'].toString());
  }
  // key
  if("key_fifths" in attributes) {
    let E_key = E_attributes.SubElement("key");
    let E_fifths = E_key.SubElement("fifths");
    E_fifths.setText(attributes['key_fifths'].toString());

    if("key_mode" in attributes) {
      let E_mode = E_key.SubElement("mode");
      E_mode.setText(attributes['key_mode'].toString());
    }
  }
  // time
  if(("time_beats" in attributes) && ("time_beattype" in attributes)) {
    let E_time = E_attributes.SubElement("time");
    let E_beats = E_time.SubElement("beats");
    E_beats.setText(attributes['time_beats'].toString());
    let E_beattype = E_time.SubElement("beat-type");
    E_beattype.setText(attributes['time_beattype'].toString());
  }
  // clef
  if("clef_sign" in attributes) {
    let E_clef = E_attributes.SubElement("clef");
    let E_sign = E_clef.SubElement("sign");
    E_sign.setText(attributes['clef_sign'].toString());
    if("clef_line" in attributes) {
      let E_line = E_clef.SubElement("line");
      E_line.setText(attributes['clef_line'].toString());
    }
  }
  return E_attributes;
}





export interface Beam {
  [num:string]:"begin"|"continue"|"end"
}

export interface Slur {
  "number": string,
  "placement": "above"|"below",
  "type": "start"|"continue"|"stop",
}

export function CreateNoteElement(
  PitchOrRest:"pitch"|"rest",
  duration:number,
  type:"16th"|"eighth"|"quarter"|"half"|"whole",
  pitch_step?:'A'|'B'|'C'|'D'|'E'|'F'|'G',
  pitch_octave?:number,
  pitch_alter?:0|1|-1,
  dotted:boolean = false,
  triplet:boolean = false,
  beams?:Beam,
  slurs?:Slur[]):Element {

  let E_note = new Element("note");
  if(PitchOrRest === "rest") {
    let E_rest = E_note.SubElement("rest");
  } else if(PitchOrRest === "pitch") {
    if((pitch_step == null) || (pitch_octave == null)) {
      console.log("If the note is a pitch, you need to specify the 'step' and the 'octave' parameters");
      return ;
    }
    let E_pitch = E_note.SubElement("pitch");
    let E_step = E_pitch.SubElement("step");
    E_step.setText(pitch_step);
    if(pitch_alter != null) {
      let E_alter = E_pitch.SubElement("alter");
      E_alter.setText(pitch_alter.toString());
    }
    let E_octave = E_pitch.SubElement("octave");
    E_octave.setText(pitch_octave.toString());
  } else {
    console.log("wrong value for input 'PitchOrRest', can be 'rest' or 'pitch'");
    return ;
  }
  
  let E_duration = E_note.SubElement("duration");
  E_duration.setText(duration.toString());
  let E_type = E_note.SubElement("type");
  E_type.setText(type);

  if(dotted) {
    let E_dot = E_note.SubElement("dot");
  }
  if(triplet) {
    let E_timemod = E_note.SubElement("time-modification");
    let E_actnote = E_timemod.SubElement("actual-notes");
    E_actnote.setText("3");
    let E_normnote = E_timemod.SubElement("normal-notes");
    E_normnote.setText("2");
  }
  if(beams != null) {
    for(let num_beam in beams) {
      let E_beam = E_note.SubElement("beam");
      E_beam.setText(beams[num_beam]);
      E_beam.setAttr({"number": num_beam});
    }
  }
  if(slurs != null) {
    if(slurs.length > 0) {
      let E_notations = E_note.SubElement("notations");
      for(let slur of slurs) {
        let E_slur = E_notations.SubElement("slur");
        E_slur.setAttr({...slur});
      }
    }
  }
  return E_note;
}







export class MusicXml {
  private Header1:string;
  private Header2:string;
  private ScorePartwiseElement:Element;
  private WorkElement:Element;
  private WorkTitleElement:Element;
  private IdentificationElement:Element;
  private PartListElement:Element;

  constructor(Title:string="Untitled",Composer:string="Unknown") {
    this.Header1 = '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n';
    this.Header2 = '<!DOCTYPE score-partwise PUBLIC\n\t"-//Recordare//DTD MusicXML 3.0 Partwise//EN"\n\t"http://www.musicxml.org/dtds/partwise.dtd">\n';
    // score-partwise
    this.ScorePartwiseElement = new Element("score-partwise");
    this.ScorePartwiseElement.setAttr({"version":"3.0"});
    // Title
    this.WorkElement = this.ScorePartwiseElement.SubElement("work");
    this.WorkTitleElement = this.WorkElement.SubElement("work-title");
    this.WorkTitleElement.setText(Title);
    // Composer
    this.IdentificationElement = this.ScorePartwiseElement.SubElement("identification");
    let ComposerElement = this.IdentificationElement.SubElement("creator");
    ComposerElement.setText(Composer);
    ComposerElement.setAttr({"type":"composer"});
    let RightsElement = this.IdentificationElement.SubElement("rights");
    RightsElement.setText("Copyright © 2019 ScoreListo, Inc.");
    // part-list
    this.PartListElement = this.ScorePartwiseElement.SubElement("part-list");
  }

  GetPartFromID(id:string) {
    for(let Part of this.ScorePartwiseElement.findall("part")) {
      if(Part.getAttr()['id'] == id) {
        return Part;
      }
    }
    console.log("The part with this id does not exists");
    return ;
  }

  PartIDAlreadyExists(Newid:string) {
    for(let ScorePart of this.PartListElement.findall("score-part")) {
      if(ScorePart.getAttr()['id'] == Newid) {
        return true;
      }
    }
    return false;
  }

  ChangeTitle(NewTitle:string) {
    this.WorkTitleElement.setText(NewTitle);
  }

  __GetNumberOfMeasures(part:Element) {
    return part.findall("measure").length;
  }

  __GetTimeElement(measure:Element) {
    let AttributesElement = measure.find("attributes");
    if(AttributesElement == null) {
      return null;
    }
    let TimeElement = AttributesElement.find("time");
    if(TimeElement == null) {
      return null;
    }
    return TimeElement;
  }

  __GetDivisionsElement(measure:Element) {
    let AttributesElement = measure.find("attributes");
    if(AttributesElement == null) {
      return null;
    }
    let DivisionsElement = AttributesElement.find("divisions");
    if(DivisionsElement == null) {
      return null;
    }
    return(DivisionsElement)
  }

  __GetPreviousMeasure(measure:Element):Element {
    let E_part = measure.getParent();
    let measures = E_part.findall("measure");
    for(let k_measure=0; k_measure < measures.length; k_measure++) {
      if(measures[k_measure].getAttr()["number"] === measure.getAttr()["number"]) {
        if(k_measure-1 >= 0){
          return measures[k_measure-1];
        }
        else {
          return null;
        }
      }
    }
    return null;
  }

  __GetRelatedDivisionsElement(measure:Element) {
    let DivElement:Element;
    while(measure != null) {
      DivElement = this.__GetDivisionsElement(measure);
      if(DivElement != null) {
        return DivElement;
      }
      measure = this.__GetPreviousMeasure(measure);
    }
    return null;
  }

  __GetRelatedTimeElement(measure:Element) {
    let TimeElement:Element;
    while(measure != null) {
      TimeElement = this.__GetTimeElement(measure);
      if(TimeElement != null) {
        return TimeElement;
      }
      measure = this.__GetPreviousMeasure(measure);
    }
    return null;
  }

  __MeasureSumNoteDuration(measure:Element) {
    let DurationSum:number = 0;
    let E_duration:Element;
    for(let E_note of measure.findall("note")) {
      E_duration = E_note.find("duration");
      if(E_duration == null) {
        console.log("A note has been defined without setting the duration parameter");
        return ;
      }
      DurationSum += Number(E_duration.getText())
    }
    return DurationSum;
  }

  __CalculateMaximumDuration(measure:Element) {
    let LastDivElement = this.__GetRelatedDivisionsElement(measure);
    let LastTimeElement = this.__GetRelatedTimeElement(measure);
    if((LastDivElement == null) || (LastTimeElement == null)) {
      console.log("The parameters chosen for 'divisions' and 'time' are not set");
    }
    let divisions = Number(LastDivElement.getText());
    let beats = Number(LastTimeElement.find("beats").getText());
    let beattype = Number(LastTimeElement.find("beat-type").getText());
    let DurationPerMeasure = divisions*beats*(4.0/beattype);
    if(!Number.isInteger(DurationPerMeasure)) {
      console.log("The parameters chosen for 'divisions' and 'time' are incorrects");
    }
    return DurationPerMeasure;
  }

  __IsTheMeasureCompleted(measure:Element) {
    let DurationPerMeasure = this.__CalculateMaximumDuration(measure);
    let DurationLastMeasure = this.__MeasureSumNoteDuration(measure);
    if(DurationPerMeasure == DurationLastMeasure) {
      return true;
     } else {
      return false;
    }
  }

  isScoreReady() {
    let parts = this.ScorePartwiseElement.findall("part");
    if(parts.length === 0) {
      return false;
    }
    let NbMeasuresPast:number = -1;
    let NbMeasuretemp:number;
    for(let E_part of parts) {
      NbMeasuretemp = this.__GetNumberOfMeasures(E_part);
      if(NbMeasuretemp === 0) {
        return false;
      }
      if((NbMeasuresPast !== NbMeasuretemp) && (NbMeasuresPast !== -1)) {
        return false;
      }
      NbMeasuresPast = NbMeasuretemp;
    }
    for(let E_part of parts) {
      for(let E_measure of E_part.findall("measure")) {
        if(!this.__IsTheMeasureCompleted(E_measure)) {
          return false;
        }
      }
    }
    return true;
  }

  AddPart(id:string, instrumentname="piano") {
    // Check if the Id does not already exists
    if(this.PartIDAlreadyExists(id)) {
      console.log("Error: The id already exists");
    }
    let ScorePartElement = this.PartListElement.SubElement("score-part");
    ScorePartElement.setAttr({"id":id});
    let PartNameElement = ScorePartElement.SubElement("part-name");
    PartNameElement.setText("solo");
    let ScoreInstrumentElement = ScorePartElement.SubElement("score-instrument");
    ScoreInstrumentElement.setAttr({"id": id + "-I1"});
    let InstrumentNameElement = ScoreInstrumentElement.SubElement("instrument-name");
    InstrumentNameElement.setText(instrumentname);
    let partElement = this.ScorePartwiseElement.SubElement("part");
    partElement.setAttr({"id":id});
  }

  AddMeasure(id_part:string) {
    let E_part = this.GetPartFromID(id_part);
    let nextnumber:number;
    let measures = E_part.findall("measure");
    if(measures.length !== 0) {
      let lastmeasure = measures[measures.length-1];
      if(!this.__IsTheMeasureCompleted(lastmeasure)) {
        console.log("Trying to add a new measure whereas the last measure is not yet completed");
        return ;
      }
      nextnumber = Number(lastmeasure.getAttr()['number']) + 1;
    } else {
      nextnumber = 1;
    }
    let NewMeasure = E_part.SubElement("measure");
    NewMeasure.setAttr({"number":nextnumber.toString()});
    return NewMeasure;
  }

  __CheckTimeBetweenMeasures(id_part:string ,IndMeasure:number, E_time:Element) {
    for(let E_part of this.ScorePartwiseElement.findall("part")) {
      if(E_part.getAttr()['id'] != id_part) {
        let measures = E_part.findall("measure");
        if(measures.length > IndMeasure) {
          let E_measure = measures[IndMeasure];
          let MeasureAttributes = E_measure.find("attributes");
          if(MeasureAttributes == null) {
            if(E_measure.find("note") != null) {
              console.log("Trying to add a time signature different than other parts");
            }
          } else {
            let TimeElement = MeasureAttributes.find("time");
            if(TimeElement == null) {
              console.log("Trying to add a time signature different than other parts");
            }
            let beats_A = Number(TimeElement.find('beats').getText());
            let beattype_A = Number(TimeElement.find('beat-type').getText());
            let beats_B = Number(E_time.find('beats').getText());
            let beattype_B = Number(E_time.find('beat-type').getText());
            if((beats_A != beats_B) || (beattype_A != beattype_B)) {
              console.log("Trying to add a time signature different than other parts");
            }
          }
        }
      }
    }
  }

  __GetLastMeasure(id_part:string):[number, Element] {
    let E_part = this.GetPartFromID(id_part);
    let measures = E_part.findall("measure");
    if(measures.length === 0) {
      console.log("Error: Any measure created in this part, cannot get last measure");
      return null;
    }
    let indice:number = measures.length-1;
    let measure:Element = measures[measures.length-1];
    return [indice, measure];
  }

  AddAttributes(id_part:string, E_attributes:Element) {
    let IndMeasure:number;
    let LastMeasure:Element;
    [IndMeasure, LastMeasure] = this.__GetLastMeasure(id_part);

    if(LastMeasure.find("note") != null) {
      console.log("Trying to add a attributes whereas a note has already been created... too late");
      return null;
    }
    if(LastMeasure.find("attributes") != null) {
      console.log("Attributes have already been defined");
      return null;
    }
    if(E_attributes.getTag() !== 'attributes') {
      console.log("Wrong input tag: must be 'attributes'");
      return null;
    }
    
    if(IndMeasure === 0) {
      if((E_attributes.find("divisions") == null) || 
       (E_attributes.find("key") == null) || 
       (E_attributes.find("time") == null) || 
       (E_attributes.find("clef") == null)) {
        console.log("Error: All attributes have to be set for the first measure");
      return null;
      }
    } else {
      if((E_attributes.find("divisions") == null) && 
         (E_attributes.find("key") == null) && 
         (E_attributes.find("time") == null) && 
         (E_attributes.find("clef") == null)) {
          console.log("Error: You need to defined at least one attribute parameter");
        return null;
      }
    }
    if(E_attributes.find("time") != null) {
      this.__CheckTimeBetweenMeasures(id_part, IndMeasure, E_attributes.find("time"))
    }
    LastMeasure.addChild(E_attributes);
  }

  AddNote(id_part:string, E_note:Element) {
    let IndMeasure:number;
    let LastMeasure:Element;
    [IndMeasure, LastMeasure] = this.__GetLastMeasure(id_part);
    let CurrentDuration = this.__MeasureSumNoteDuration(LastMeasure);
    let MaximumDuration = this.__CalculateMaximumDuration(LastMeasure);
    let duration = Number(E_note.find('duration').getText());
    if((CurrentDuration + duration) > MaximumDuration) {
      console.log("With this note duration, the maximum duration of the measure is exceeded: note NOT ADDED");
    }
    if(E_note.getTag() != 'note') {
      console.log("Wrong input tag: must be 'note'");
    }
    LastMeasure.addChild(E_note);
  }

  tostring():string {
    if(this.isScoreReady()) {
      return(this.Header1 + this.Header2 + this.ScorePartwiseElement.tostring());
    } else {
      console.log("The partition is not ready to be written");
      return null;
    }
  }

}
