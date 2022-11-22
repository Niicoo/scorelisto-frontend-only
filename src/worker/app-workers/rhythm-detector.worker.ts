import { WorkerMessage } from './shared/worker-message.model';
import { StepResult } from './step-detector.worker';
import { ConvertNoteAndOctaveToSemitone, ConvertSemitoneToNoteAndOctave } from './shared/common-detector';
import { Graph } from './shared/dijkstra';
import { MusicXml, CreateAttributesElement, CreateNoteElement, Beam } from './shared/music-xml';
import { Midi } from './shared/midi';
import { Observable } from 'rxjs';


export class RhythmDetectorWorker {
  public static doWork(value: WorkerMessage): Observable<WorkerMessage> {
    return new Observable((observer) => {
      const rhythmDetector = new RhythmDetector();
      rhythmDetector.init_parameters(value.data.parameters);
      rhythmDetector.run(value.data.stepResult, value.data.debug).subscribe(
        data => {
          observer.next(new WorkerMessage(value.topic, data));
          if(data.progression == null){
            observer.complete();
          }
        }
      );
    });
  }
}


export interface RhythmResult {
  score_musicxml:string;
  score_midi:Uint8Array;
  score_midinorhythm:Uint8Array;
}

export interface RhythmList {
  onenoteonebeat: boolean;
  onenotetwobeat: boolean;
  onenotethreebeat: boolean;
  onenotefourbeat: boolean;
  onenotefivebeat: boolean;
  onenotesixbeat: boolean;
  onenotesevenbeat: boolean;
  onenoteeightbeat: boolean;
  onerestonebeat: boolean;
  oneresttwobeat: boolean;
  onerestthreebeat: boolean;
  onerestfourbeat: boolean;
  onerestfivebeat: boolean;
  onerestsixbeat: boolean;
  onerestsevenbeat: boolean;
  oneresteightbeat: boolean;
  en_en: boolean;
  er_en: boolean;
  en_er: boolean;
  den_sn: boolean;
  sn_den: boolean;
  dqn_en: boolean;
  qr_er_en: boolean;
  dqn_er: boolean;
  en_en_qn: boolean;
  qn_dqn_en: boolean;
  qr_qr_er_en: boolean;
  qn_dqn_er: boolean;
  en_en_hn: boolean;
  hn_dqn_en: boolean;
  qr_qr_qr_er_en: boolean;
  hn_dqn_er: boolean;
  en_en_dhn: boolean;
  en_sn_sn: boolean;
  er_sn_sn: boolean;
  sn_sn_en: boolean;
  sn_sn_er: boolean;
  sn_en_sn: boolean;
  t_en_en_en: boolean;
  t_en_den_sn: boolean;
  t_en_sn_den: boolean;
  t_sn_en_den: boolean;
  t_sn_den_en: boolean;
  t_den_en_sn: boolean;
  t_den_sn_en: boolean;
  en_qn_en: boolean;
  dqn_sn_sn: boolean;
  qn_dqn_sn_sn: boolean;
  hn_dqn_sn_sn: boolean;
  sn_sn_sn_sn: boolean;
}

export interface RhythmParameter {
  delaymin_s: number;
  delaymax_s: number;
  maxdelayvar: number;
  errormax: number;
  allowed_rhythms: RhythmList;
}
export const DefaultRhythmParameter:RhythmParameter = {
  delaymin_s: 0.3,
  delaymax_s: 1.5,
  maxdelayvar: 0.5,
  errormax: 10,
  allowed_rhythms: {
    onenoteonebeat: true,
    onenotetwobeat: true,
    onenotethreebeat: true,
    onenotefourbeat: true,
    onenotefivebeat: true,
    onenotesixbeat: true,
    onenotesevenbeat: true,
    onenoteeightbeat: true,
    onerestonebeat: true,
    oneresttwobeat: true,
    onerestthreebeat: true,
    onerestfourbeat: true,
    onerestfivebeat: true,
    onerestsixbeat: true,
    onerestsevenbeat: true,
    oneresteightbeat: true,
    en_en: true,
    er_en: true,
    en_er: true,
    den_sn: true,
    sn_den: true,
    dqn_en: true,
    qr_er_en: true,
    dqn_er: true,
    en_en_qn: true,
    qn_dqn_en: true,
    qr_qr_er_en: true,
    qn_dqn_er: true,
    en_en_hn: true,
    hn_dqn_en: true,
    qr_qr_qr_er_en: true,
    hn_dqn_er: true,
    en_en_dhn: true,
    en_sn_sn: true,
    er_sn_sn: true,
    sn_sn_en: true,
    sn_sn_er: true,
    sn_en_sn: true,
    t_en_en_en: true,
    t_en_den_sn: true,
    t_en_sn_den: true,
    t_sn_en_den: true,
    t_sn_den_en: true,
    t_den_en_sn: true,
    t_den_sn_en: true,
    en_qn_en: true,
    dqn_sn_sn: true,
    qn_dqn_sn_sn: true,
    hn_dqn_sn_sn: true,
    sn_sn_sn_sn: true
  }
}


















export class DigitalNote {
  private analoglength:number;
  private analogheight:number;
  private octave:number;
  private isANote:boolean;
  private configurations:Configuration[];

  constructor(isANote:boolean, analoglength:number, analogheight?:number, octave?:number) {
    if((this.isANote) && ((analogheight == null) || (octave == null))) {
      console.log("Error: trying to create a note without providing height and octave parameters");
      return ;
    }
    this.isANote = isANote;
    this.analoglength = analoglength;
    if(this.isANote) {
      this.analogheight = analogheight;
      this.octave = octave;
    }
  }

  get_analoglength():number {
    return this.analoglength;
  }
  get_analogheight():number {
    return this.analogheight;
  }
  get_octave():number {
    return this.octave;
  }
  set_analoglength(analoglength:number) {
    this.analoglength = analoglength;
  }
  set_analogheight(analogheight:number) {
    this.analogheight = analogheight;
  }
  set_octave(octave:number) {
    this.octave = octave;
  }
  // To know if it's a note or a rest
  is_note():boolean{
    return this.isANote;
  }

  reset_configurations() {
    this.configurations = [];
  }

  get_configurations():Configuration[] {
    return(this.configurations);
  }

  add_configuration(configuration:Configuration) {
    this.configurations.push(configuration);
  }

  MaskCombinations(combinationMasked:{[key:string]:boolean}) {
    for(let config of this.configurations) {
      for(let option of config.get_options()) {
        option.mask = combinationMasked[option.key];
      }
    }
  }

  ApplyOffset(offset:number) {
    let newValue:{height:number, octave:number};
    let height = ConvertNoteAndOctaveToSemitone(this.analogheight, this.octave)
    height += offset;
    newValue = ConvertSemitoneToNoteAndOctave(height);
    this.analogheight = newValue.height;
    this.octave = newValue.octave;
  }


  GetRoundedHeightAndOctave() {
    if(this.analogheight >= 11.5) {
      return([0, this.octave + 1])
    } else {
      let IntHeight:number = Math.round(this.analogheight);
      return [IntHeight, this.octave];
    }
  }

  IsHeightInFifth(fifth:number):boolean {
    if(!this.is_note()) {
      console.log("Trying to get the parameter of the note height whereas it's actually just a 'rest'");
      return;
    }

    let IntHeight:number;
    let Octave:number;
    [IntHeight, Octave] = this.GetRoundedHeightAndOctave();

    // DO / SI DIESE
    if((IntHeight == 0) && (((fifth >= -5) && (fifth <= 1)) || (fifth == 7))) {
      return true;
    // DO DIESE / RE BEMOL
    } else if((IntHeight == 1) && ((fifth >= 2) || (fifth <= -4))) {
      return true;
    // RE
    } else if((IntHeight == 2) && ((fifth >= -3) && (fifth <= 3))) {
      return true;
    // RE DIESE / MI BEMOL
    } else if((IntHeight == 3) && ((fifth >= 4) || (fifth <= -2))) {
      return true;
    // MI / FA BEMOL
    } else if((IntHeight == 4) && (((fifth >= -1) && (fifth <= 5)) || (fifth == -7))) {
      return true;
    // FA / MI DIESE
    } else if((IntHeight == 5) && (((fifth >= -6) && (fifth <= 0)) || (fifth >= 6))) {
      return true;
    // FA DIESE / SOL BEMOL
    } else if((IntHeight == 6) && ((fifth >= 1) || (fifth <= -5))) {
      return true;
    // SOL
    } else if((IntHeight == 7) && ((fifth >= -4) && (fifth <= 2))) {
      return true;
    // SOL DIESE / LA BEMOL
    } else if((IntHeight == 8) && ((fifth >= 3) || (fifth <= -3))) {
      return true;
    // LA
    } else if((IntHeight == 9) && ((fifth >= -2) && (fifth <= 4))) {
      return true;
    // LA DIESE / SI BEMOL
    } else if((IntHeight == 10) && ((fifth >= 5) || (fifth <= -1))) {
      return true;
    // SI / DO BEMOL
    } else if((IntHeight == 11) && (((fifth >= 0) && (fifth <= 6)) || (fifth <= -6))) {
      return true;
    } else {
      return false;
    }
  }



  IncreaseOneOctave() {
    if(!this.is_note()) {
      console.log("Changing the octave of a rest has no effect.");
    } else {
      this.octave += 1;
    }
  }
  LowerOneOctave() {
    if(!this.is_note()) {
      console.log("Changing the octave of a rest has no effect.");
    } else {
      this.octave -= 1;
    }
  }

  LowerOneHalftone() {
    if(!this.is_note()) {
      console.log("Changing the tone of a rest has no effect.");
    } else {
      if((this.analogheight - 1.0) < 0.0) {
        this.LowerOneOctave();
      }
      this.analogheight = (this.analogheight - 1.0) % 12;
    }
  }

  IncreaseOneHalftone() {
    if(!this.is_note()) {
      console.log("Changing the tone of a rest has no effect.");
    } else {
      if((this.analogheight + 1.0) >= 12.0) {
        this.IncreaseOneOctave();
      }
      this.analogheight = (this.analogheight + 1.0) % 12;
    }
  }

  GetStepAlterOctave(fifths:number):{'step': 'A'|'B'|'C'|'D'|'E'|'F'|'G', 'alter': 0|1|-1, 'octave':number} {
    if(!this.is_note()) {
      console.log("Trying to get the parameter of the note height whereas it's actually just a 'rest'");
    }

    let IntHeight:number;
    let Octave:number;
    [IntHeight, Octave] = this.GetRoundedHeightAndOctave();

    if(IntHeight == 0) {
      if(fifths >= 7) {
        // SI DIESE
        return({'step': 'B', 'alter': 1, 'octave': Octave - 1})
      } else {
        // DO
        return({'step': 'C', 'alter': 0, 'octave': Octave})
      }

    } else if(IntHeight == 1) {
      if(fifths >= -3) {
        // DO DIESE
        return({'step': 'C', 'alter': 1, 'octave': Octave})
      } else {
        // RE BEMOL
        return({'step': 'D', 'alter': -1, 'octave': Octave})
      }
    
    } else if(IntHeight == 2) {
      // RE
      return({'step': 'D', 'alter': 0, 'octave': Octave})
    
    } else if(IntHeight == 3) {
      if(fifths >= 4) {
        // RE DIESE
        return({'step': 'D', 'alter': 1, 'octave': Octave})
      } else {
        // MI BEMOL
        return({'step': 'E', 'alter': -1, 'octave': Octave})
      }
    
    } else if(IntHeight == 4) {
      if(fifths <= -7) {
        // FA BEMOL
        return({'step': 'F', 'alter': 1, 'octave': Octave})
      } else {
        // MI
        return({'step': 'E', 'alter': 0, 'octave': Octave})
      }
    
    } else if(IntHeight == 5) {
      if(fifths >= 6) {
        // MI DIESE
        return({'step': 'E', 'alter': 1, 'octave': Octave})
      } else {
        // FA
        return({'step': 'F', 'alter': 0, 'octave': Octave})
      }
    
    } else if(IntHeight == 6) {
      if(fifths >= -4) {
        // FA DIESE
        return({'step': 'F', 'alter': 1, 'octave': Octave})
      } else {
        // SOL BEMOL
        return({'step': 'G', 'alter': -1, 'octave': Octave})
      }
    
    } else if(IntHeight == 7) {
      // SOL
      return({'step': 'G', 'alter': 0, 'octave': Octave})

    } else if(IntHeight == 8) {
      if(fifths > 0) {
        // SOL DIESE
        return({'step': 'G', 'alter': 1, 'octave': Octave})
      } else {
        // LA BEMOL
        return({'step': 'A', 'alter': -1, 'octave': Octave})
      }
    
    } else if(IntHeight == 9) {
      // LA
      return({'step': 'A', 'alter': 0, 'octave': Octave})

    } else if(IntHeight == 10) {
      if(fifths >= 5) {
        // LA DIESE
        return({'step': 'A', 'alter': 1, 'octave': Octave})
      } else {
        // SI BEMOL
        return({'step': 'B', 'alter': -1, 'octave': Octave})
      }
    
    } else if(IntHeight == 11) {
      if(fifths >= -5) {
        // SI
        return({'step': 'B', 'alter': 0, 'octave': Octave})
      } else {
        // DO BEMOL
        return({'step': 'C', 'alter': -1, 'octave': Octave + 1})
      }

    } else {
      console.log('Invalid note height (must be an integer between 0 and 11)');
    }
  }
}





















export interface ChronoNote {
  [noteref: string]: {
    note:DigitalNote;
    next: string[];
    previous:string[];
  }
}


export class RhythmDetector {
  // Parameters 
  private delaymin_s:number;
  private delaymax_s:number;
  private maxdelayvar:number;
  private errormax:number;
  private allowed_rhythms:RhythmList;
  // Variable for the conversion process
  private clef:string;
  private fifths:number;
  private graph:Graph;
  private NumRefNote:number;

  private NotesDico:ChronoNote;
  private previousNotes:{note:string, rest:string} = {note:'', rest:''};

  private BestPath:Configuration[];
  constructor() {
    this.NumRefNote = 0;
    this.clef = 'G';
    this.fifths = 0;
    this.NotesDico = {};
  }

  init_parameters(rhythmParameter: RhythmParameter) {
    this.delaymin_s = rhythmParameter.delaymin_s;
    this.delaymax_s = rhythmParameter.delaymax_s;
    this.maxdelayvar = rhythmParameter.maxdelayvar;
    this.errormax = rhythmParameter.errormax;
    this.allowed_rhythms = rhythmParameter.allowed_rhythms;
  }


  _AddNote(IsANote:boolean, NoteLength:number, NoteHeight:number) {
    if(IsANote) {
      // Create new note in the dictionary
      let NoteParams = ConvertSemitoneToNoteAndOctave(NoteHeight);
      let dignote = new DigitalNote(IsANote, NoteLength, NoteParams['height'], NoteParams['octave']);
      let NewRef = "NOTE_" + this.NumRefNote.toString();
      this.NumRefNote += 1;
      this.NotesDico[NewRef] = {note: dignote, next: [], previous: []};
      // Set the connexions with previous note(s)
      if(this.previousNotes.note.length != 0){
        let pastRef:string = this.previousNotes.note;
        this.NotesDico[pastRef].next.push(NewRef);
        this.NotesDico[NewRef].previous.push(pastRef);
      }
      if(this.previousNotes.rest.length != 0){
        let pastRef:string = this.previousNotes.rest;
        this.NotesDico[pastRef].next.push(NewRef);
        this.NotesDico[NewRef].previous.push(pastRef);
      }
      // Set the current note as previous note for next iteration
      this.previousNotes.note = NewRef;
      this.previousNotes.rest = '';
    } else {
      if(this.previousNotes.note.length == 0) {
        // Rest at the beginning of a score
        console.log("Adding a rest to the beginning of a partition ? ignoring it");
        return;
      } else if(this.previousNotes.rest.length != 0) {
        // The previous note already have a rest associated
        let pastRef:string = this.previousNotes.note;
        this.NotesDico[pastRef].note.set_analoglength(this.NotesDico[pastRef].note.get_analoglength() + NoteLength);
        pastRef = this.previousNotes.rest;
        this.NotesDico[pastRef].note.set_analoglength(this.NotesDico[pastRef].note.get_analoglength() + NoteLength);
      } else {
        let pastRef:string = this.previousNotes.note;
        // Adding a new rest
        let dignote = new DigitalNote(false, NoteLength);
        let NewRestRef = "REST_" + this.NumRefNote.toString();
        this.NumRefNote += 1;
        this.NotesDico[NewRestRef] = {note: dignote, next: [], previous: [pastRef,]};
        this.NotesDico[pastRef].next.push(NewRestRef);
        // Simulate a note having length of the past note + this rest
        let simu_length = this.NotesDico[pastRef].note.get_analoglength() + NoteLength;
        let simu_analogheight = this.NotesDico[pastRef].note.get_analogheight();
        let simu_octave = this.NotesDico[pastRef].note.get_octave();
        dignote = new DigitalNote(true, simu_length, simu_analogheight, simu_octave);
        let NewNoteRef = "SNOTE_" + this.NumRefNote.toString();
        this.NumRefNote += 1;
        let simu_previous = this.NotesDico[pastRef].previous.slice();
        this.NotesDico[NewNoteRef] = {note: dignote, next: [], previous: simu_previous};
        for(let pastpastRef of simu_previous) {
          this.NotesDico[pastpastRef].next.push(NewNoteRef);
        }
        // Set the current note and rest as previous for next iteration
        this.previousNotes.rest = NewRestRef;
        this.previousNotes.note = NewNoteRef;
      }
    }
  }

  init_set_notes(stepResult:StepResult) {
    this.NotesDico = {};
    this.previousNotes = {note:'', rest:''};
    for(let k=0; k<stepResult.notes.length; k++) {
      this._AddNote(stepResult.notes[k].type_b, stepResult.notes[k].length_s, stepResult.notes[k].pitch_st)
    }
  }

  _SetSimulatedRestsBeginning() {
    for (let noteref in this.NotesDico) {
      if(noteref[0] === 'F') {
        delete this.NotesDico[noteref];
      } else {
        this.NotesDico[noteref].previous = this.NotesDico[noteref].previous.filter(ref => ref[0] !== 'F');
      }
    }
    let note_length:number;
    let dignote:DigitalNote;
    let FakeRestRef:string;
    for (let noteref in this.NotesDico) {
      if((noteref[0] === 'N') || (noteref[0] === 'S')) {
        // If previous == 0 ==> it's a note at the beginning of the score
        if(this.NotesDico[noteref].previous.length == 0) {
          // Get ength of the note
          note_length = this.NotesDico[noteref].note.get_analoglength();
          // Simulate a rest of the same length (considering a start ofthe score off-beat)
          dignote = new DigitalNote(false, note_length);
          FakeRestRef = "FAKE_" + this.NumRefNote.toString();
          this.NumRefNote += 1;
          this.NotesDico[FakeRestRef] = {note: dignote, next: [noteref,], previous: []};
          this.NotesDico[noteref].previous.push(FakeRestRef);
        }
      }
    }
  }

  _CalculateOptimumOffset(precision:number=0.005):number {
    let NbOffsetToTest:number = Math.floor(1.0/precision);
    let offsetTested:number;
    let errorTested:number;
    let height_simulated:number;
    let error_min:number = Number.MAX_VALUE;
    let offset_opt:number = 0;
    for(let k=0; k<NbOffsetToTest; k++) {
      offsetTested = -0.5 + k*precision;
      errorTested = 0.0;
      // Iterate over all the notes (not rest either simulated notes)
      for (let noteref in this.NotesDico) {
        if(noteref[0] === 'N') {
          height_simulated = this.NotesDico[noteref].note.get_analogheight() + offsetTested;
          errorTested += Math.abs(height_simulated - Math.round(height_simulated));
        }
      }
      if(errorTested < error_min){
        error_min = errorTested;
        offset_opt = offsetTested;
      }
    }
    return offset_opt;
  }

  _ApplyOffsetToAllNotes(offset:number) {
    for (let noteref in this.NotesDico) {
      if(this.NotesDico[noteref].note.is_note()) {
        this.NotesDico[noteref].note.ApplyOffset(offset);
      }
    }
  }

  _CalculateAverageHeight():number {
    let AverageHeight:number = 0;
    let NbNotes:number = 0;
    let temp_height:number;
    let temp_octave:number;
    for (let noteref in this.NotesDico) {
      if(noteref[0] === 'N') {
        temp_height = this.NotesDico[noteref].note.get_analogheight();
        temp_octave = this.NotesDico[noteref].note.get_octave();
        AverageHeight += ConvertNoteAndOctaveToSemitone(temp_height, temp_octave);
        NbNotes += 1;
      }
    }
    AverageHeight = AverageHeight / NbNotes;
    return AverageHeight;
  }

  IncreaseOneOctaveEveryNotes() {
    for (let noteref in this.NotesDico) {
      if(this.NotesDico[noteref].note.is_note()) {
        this.NotesDico[noteref].note.IncreaseOneOctave();
      }
    }
  }

  LowerOneOctaveEveryNotes() {
    for (let noteref in this.NotesDico) {
      if(this.NotesDico[noteref].note.is_note()) {
        this.NotesDico[noteref].note.LowerOneOctave();
      }
    }
  }

  IncreaseOneHalftoneEveryNotes() {
    for (let noteref in this.NotesDico) {
      if(this.NotesDico[noteref].note.is_note()) {
        this.NotesDico[noteref].note.IncreaseOneHalftone()
      }
    }
  }

  LowerOneHalftoneEveryNotes() {
    for (let noteref in this.NotesDico) {
      if(this.NotesDico[noteref].note.is_note()) {
        this.NotesDico[noteref].note.LowerOneHalftone()
      }
    }
  }

  A_MinimizeHeightError() {
    let OffsetToApply:number = this._CalculateOptimumOffset();
    this._ApplyOffsetToAllNotes(OffsetToApply);
  }

  B_AutoSetFifths() {
    let NbSignsTemp:number;
    let BestFifths:number = 0;
    let BestNbSigns:number = Number.MAX_VALUE;
    for(let fifth of [0, 1, -1, 2, -2, 3, -3, 4, -4, 5, -5, 6, -6, 7, -7]) {
      NbSignsTemp = 0;
      for (let noteref in this.NotesDico) {
        // not selecting simulated notes !!
        if(noteref[0] === 'N') {
          if(!this.NotesDico[noteref].note.IsHeightInFifth(fifth)) {
            NbSignsTemp += 1;
          }
        }
      }
      if(NbSignsTemp < BestNbSigns) {
        BestFifths = fifth;
        BestNbSigns = NbSignsTemp;
      }
    }
    this.fifths = BestFifths;
  }

  C_AutoSetClef() {
    let AverageHeight:number = this._CalculateAverageHeight();
    if(AverageHeight / 12.0 >= 4) {
      this.clef = 'G';
    } else {
      this.clef = 'F';
    }
  }

  D_AutoTranslateOctave() {
    let AverageHeight:number = this._CalculateAverageHeight();
    let NbOctaves:number;
    if(this.clef === 'G'){
      NbOctaves = Math.round(((5 * 12 - 1) - AverageHeight) / 12.0);
    } else if(this.clef === 'F') {
      NbOctaves = Math.round(((3 * 12 + 2) - AverageHeight) / 12.0);
    } else {
      console.log("Invalid attributes 'clef', can be 'G' or 'F'");
      return ;
    }
    if(NbOctaves > 0) {
      for(let k=0; k < Math.abs(NbOctaves); k++) {
        this.IncreaseOneOctaveEveryNotes();
      }
    } else if(NbOctaves < 0) {
      for(let k=0; k < Math.abs(NbOctaves); k++) {
        this.LowerOneOctaveEveryNotes();
      }
    }
  }

  _ListNotesNext(refNote:string, NbNotes:number) {
    let ListOfPaths:string[][] = [];
    let ListOfPaths_temp:string[][] = [];

    ListOfPaths.push([refNote,]);

    let modification:boolean = true;
    while(modification) {
      modification = false;
      let ListOfPaths_temp = [];
      // Iterate over all current paths
      for(let k=0; k<ListOfPaths.length; k++) {
        // If the path still didn't reach the number of notes desired
        if(ListOfPaths[k].length < NbNotes) {
          // Reference of the last note of the path
          let refLastNote:string = ListOfPaths[k][ListOfPaths[k].length-1];
          // Iterate over the note connected to the last notes
          for(let nextNoteRef of this.NotesDico[refLastNote].next) {
            ListOfPaths_temp.push(ListOfPaths[k].slice().concat([nextNoteRef]));
            modification = true;
          }
        } else {
          ListOfPaths_temp.push(ListOfPaths[k].slice());
        }
      }
      ListOfPaths = ListOfPaths_temp.slice();
    }
    return ListOfPaths;
  }

  _ListBestCombinationsForOneConf(path:string[], nb_beats:number):Configuration {
    let nb_notes = path.length;
    let NoteTypes:string[] = [];
    let NoteLengths:number[] = [];
    for(let noteRef of path) {
      NoteLengths.push(this.NotesDico[noteRef].note.get_analoglength());
      if(this.NotesDico[noteRef].note.is_note()) {
        NoteTypes.push('note');
      } else {
        NoteTypes.push('rest');
      }
    }

    let delay:number = NoteLengths.reduce((a, b) => a + b, 0) / nb_beats;
    let config = new Configuration(nb_notes, nb_beats, delay, path, '');
    for(let keyComb in COMBINATIONS) {
      if(COMBINATIONS[keyComb]['nbnotes'] != nb_notes) {
        continue;
      }
      if(COMBINATIONS[keyComb]['nbbeats'] != nb_beats) {
        continue;
      }
      if(!NoteTypesCorrespond(COMBINATIONS[keyComb]['notetypes'], NoteTypes)) {
        continue;
      }
      let error_comb:number = CalculateError(keyComb, NoteLengths)
      config.AddOption({key:keyComb as COMBINATION_KEY, error:error_comb, mask:false});
    }
    if(config.get_nboptions() == 0) {
      return null;
    } else {
      return config;
    }
  }

  E_GetConfigurationsForAllNotes() {
    this._SetSimulatedRestsBeginning();
    let NumComb:number = 0;
    for(let noteref in this.NotesDico) {
      this.NotesDico[noteref].note.reset_configurations();
      for(let NbNotes=1; NbNotes<5; NbNotes++) {
        let paths = this._ListNotesNext(noteref, NbNotes);
        for( let path of paths) {
          for(let NbBeats=1; NbBeats<9; NbBeats++) {
            let conf:Configuration = this._ListBestCombinationsForOneConf(path, NbBeats);
            if(conf != null) {
              let conf_ref = "CONF_" + NumComb.toString();
              conf.set_ref(conf_ref);
              this.NotesDico[noteref].note.add_configuration(conf);
              NumComb += 1;
            }
          }
        }
      }
    }
  }

  F_MaskCOMBINATIONS() {
    // combstomask = NOT this.allowed_rhythms
    let CombinationsToMask = ConvertAllowedRhythmsToMaskDico(this.allowed_rhythms);
    for(let noteref in this.NotesDico) {
      this.NotesDico[noteref].note.MaskCombinations(CombinationsToMask);
    }
  }

  _IsTheLastNote(noteRef:string):boolean {
    if(this.NotesDico[noteRef].next.length === 0) {
      return true;
    }
    return false;
  }

  G_BuildGraph() {
    // errormax = this.errormax
    // delaymin_s = this.delaymin_s
    // delaymax_s = this.delaymax_s
    // maxdelayvar = this.maxdelayvar
    let WeightAdjust:number = 0.5;
    this.graph = new Graph()
    this.graph.addVertex('StartPoint');
    this.graph.addVertex('EndPoint');

    // Creating vertex
    for(let noteref in this.NotesDico) {
      for(let config of this.NotesDico[noteref].note.get_configurations()) {
        if(config.AtLeastOneUnmaskOption()) {
          this.graph.addVertex(config.get_ref());
        }
      }
    }

    // Creating edges from 'StartPoint'
    for(let noteref in this.NotesDico) {
      // If the note is one of the fake rests added at the beginning
      if(noteref[0] === 'F') {
        let LengthSimulatedRest = this.NotesDico[noteref].note.get_analoglength();
        for(let config of this.NotesDico[noteref].note.get_configurations()) {
          if(config.AtLeastOneUnmaskOption()) {
            this.graph.addEdge('StartPoint', config.get_ref(), -LengthSimulatedRest);
          }
        }
      } else {
        // If the noteonly have fake rests as previous notes
        let previous = this.NotesDico[noteref].previous.filter(ref => ref[0] !== 'F');
        if(previous.length === 0) {
          for(let config of this.NotesDico[noteref].note.get_configurations()) {
            if(config.AtLeastOneUnmaskOption()) {
              this.graph.addEdge('StartPoint', config.get_ref(), 0);
            }
          }
        }
      }
    }

    let CurrentRef:string;
    let NextRef:string;

    let CurrentDelay:number;
    let NextDelay:number;

    let CombError:number;
    let TotLengthComb:number;
    let LastKeyNoteOfTheConf:string;

    let DelayVarValid:boolean;
    let WeightDelay:number;
    let Weight:number;
    for(let noteref in this.NotesDico) {
      for(let config of this.NotesDico[noteref].note.get_configurations()) {
        if(!config.IsValid(this.errormax, this.delaymin_s, this.delaymax_s)) {
          continue;
        }
        CurrentRef = config.get_ref();
        CurrentDelay = config.get_delay();
        CombError = config.get_bestoption().error;
        TotLengthComb = config.get_delay() * config.get_nbbeats()
        LastKeyNoteOfTheConf = config.get_last_path_ref();
        if(this._IsTheLastNote(LastKeyNoteOfTheConf)) {
          this.graph.addEdge(CurrentRef, 'EndPoint', TotLengthComb);
        } else {
          for(let nextNoteRef of this.NotesDico[LastKeyNoteOfTheConf].next) {
            for(let nextConfig of this.NotesDico[nextNoteRef].note.get_configurations()) {
              NextRef = nextConfig.get_ref();
              NextDelay = nextConfig.get_delay();
              DelayVarValid = (Math.abs(CurrentDelay - NextDelay) / CurrentDelay) < this.maxdelayvar;
              if(nextConfig.IsValid(this.errormax, this.delaymin_s, this.delaymax_s) && DelayVarValid) {
                WeightDelay = Math.sqrt(Math.pow(10.0 * Math.log10(NextDelay) - 10.0 * Math.log10(CurrentDelay), 2.0) + Math.pow(TotLengthComb, 2.0));
                Weight = (1.0 - WeightAdjust) * WeightDelay + WeightAdjust * CombError;
                this.graph.addEdge(CurrentRef, NextRef, Weight);
              }
            }
          }
        }
      }
    }
    // Delete vertex with no edges
    this.graph.deleteUselessVertices("EndPoint");
  }

  _GetConfFromConfRef(confRef:string):Configuration {
    for(let noteref in this.NotesDico) {
      for(let config of this.NotesDico[noteref].note.get_configurations()) {
        if(config.get_ref() === confRef) {
          return config;
        }
      }
    }
    return;
  }

  H_GetOptimalPath() {
    this.BestPath = [];
    let config:Configuration;
    let BestPathFound = this.graph.getDijstraShortestPath('StartPoint', 'EndPoint');
    console.log(BestPathFound);
    this.BestPath = [];
    for(let k=1; k<BestPathFound.length-1; k++) {
      config = this._GetConfFromConfRef(BestPathFound[k]);
      this.BestPath.push(config);
    }
  }


  _FindBestPathConfiguration() {
    let ListBeats:number[] = [];
    let ListBestComb:string[] = [];
    let ListNotesRef:string[] = [];
    for(let config of this.BestPath) {
      ListBeats.push(config.get_nbbeats());
      ListBestComb.push(config.get_bestoption().key);
      ListNotesRef = ListNotesRef.concat(config.get_path());
    }

    let MeasureConfiguration:{'BeatPerMeasure':number, 'NbRestsAdded':number, 'UnlinkedCombs':string[]}[] = [];
    for(let BeatPerMeasure of [3, 4, 5]) {
      for(let NbRestsToAdded=0; NbRestsToAdded<(BeatPerMeasure - ListBeats[0] + 1); NbRestsToAdded++) {
        let TestedConfig:number[] = ListBeats.slice();
        for(let k=0; k<NbRestsToAdded; k++) {
          TestedConfig.unshift(1.0);
        }
        for(let k=1; k<TestedConfig.length; k++) {
          TestedConfig[k] = TestedConfig[k] + TestedConfig[k-1];
        }

        let UnlinkedCombs:string[] = [];
        let MeasureNumber:number = 0;

        TestedConfig.forEach((nb_beat, index) => {
          let NbMeasureTemp = Math.floor(nb_beat / BeatPerMeasure);
          if(NbMeasureTemp > MeasureNumber) {
            if(nb_beat % BeatPerMeasure != 0) {
              UnlinkedCombs.push(ListBestComb[index - NbRestsToAdded])
            }
            MeasureNumber = NbMeasureTemp;
          }
        });
        MeasureConfiguration.push({'BeatPerMeasure': BeatPerMeasure, 'NbRestsAdded': NbRestsToAdded, 'UnlinkedCombs': UnlinkedCombs});
      }
    }

    let BEST_Nb_EN_QN_EN:number = Number.POSITIVE_INFINITY;
    let BEST_Nb_DQN_EN:number = Number.POSITIVE_INFINITY;
    let BEST_Nb_1NOTE_2BEATS:number = Number.POSITIVE_INFINITY;
    let BEST_NbLinked:number = Number.POSITIVE_INFINITY;
    let BEST_NbBeatsPerMeasure:number = Number.POSITIVE_INFINITY;
    let BEST_NbRestsAdded:number = Number.POSITIVE_INFINITY;
    for(let measureconf of MeasureConfiguration) {
      let Nb_EN_QN_EN = measureconf['UnlinkedCombs'].filter(comb => comb === "EN_QN_EN").length;
      let Nb_DQN_EN = measureconf['UnlinkedCombs'].filter(comb => comb === "DQN_EN").length;
      let Nb_1NOTE_2BEATS = measureconf['UnlinkedCombs'].filter(comb => comb === "1NOTE_2BEATS").length;
      let NbLinked = measureconf['UnlinkedCombs'].length;
      let NbBeatsPerMeasure = measureconf['BeatPerMeasure'];
      let NbRestsAdded = measureconf['NbRestsAdded'];

      if(Nb_EN_QN_EN < BEST_Nb_EN_QN_EN) {
        BEST_Nb_EN_QN_EN = Nb_EN_QN_EN;
        BEST_Nb_DQN_EN = Nb_DQN_EN;
        BEST_Nb_1NOTE_2BEATS = Nb_1NOTE_2BEATS;
        BEST_NbLinked = NbLinked;
        BEST_NbBeatsPerMeasure = NbBeatsPerMeasure;
        BEST_NbRestsAdded = NbRestsAdded;
      }
      if(Nb_EN_QN_EN > BEST_Nb_EN_QN_EN) {
        continue;
      }

      if(Nb_DQN_EN < BEST_Nb_DQN_EN) {
        BEST_Nb_EN_QN_EN = Nb_EN_QN_EN;
        BEST_Nb_DQN_EN = Nb_DQN_EN;
        BEST_Nb_1NOTE_2BEATS = Nb_1NOTE_2BEATS;
        BEST_NbLinked = NbLinked;
        BEST_NbBeatsPerMeasure = NbBeatsPerMeasure;
        BEST_NbRestsAdded = NbRestsAdded;
      }
      if(Nb_DQN_EN > BEST_Nb_DQN_EN) {
        continue;
      }

      if(Nb_1NOTE_2BEATS < BEST_Nb_1NOTE_2BEATS) {
        BEST_Nb_EN_QN_EN = Nb_EN_QN_EN;
        BEST_Nb_DQN_EN = Nb_DQN_EN;
        BEST_Nb_1NOTE_2BEATS = Nb_1NOTE_2BEATS;
        BEST_NbLinked = NbLinked;
        BEST_NbBeatsPerMeasure = NbBeatsPerMeasure;
        BEST_NbRestsAdded = NbRestsAdded;
      }
      if(Nb_1NOTE_2BEATS > BEST_Nb_1NOTE_2BEATS) {
        continue;
      }

      if(NbLinked < BEST_NbLinked) {
        BEST_Nb_EN_QN_EN = Nb_EN_QN_EN;
        BEST_Nb_DQN_EN = Nb_DQN_EN;
        BEST_Nb_1NOTE_2BEATS = Nb_1NOTE_2BEATS;
        BEST_NbLinked = NbLinked;
        BEST_NbBeatsPerMeasure = NbBeatsPerMeasure;
        BEST_NbRestsAdded = NbRestsAdded;
      }
      if(NbLinked > BEST_NbLinked) {
        continue;
      }

      if(NbBeatsPerMeasure < BEST_NbBeatsPerMeasure) {
        BEST_Nb_EN_QN_EN = Nb_EN_QN_EN;
        BEST_Nb_DQN_EN = Nb_DQN_EN;
        BEST_Nb_1NOTE_2BEATS = Nb_1NOTE_2BEATS;
        BEST_NbLinked = NbLinked;
        BEST_NbBeatsPerMeasure = NbBeatsPerMeasure;
        BEST_NbRestsAdded = NbRestsAdded;
      }
      if(NbBeatsPerMeasure > BEST_NbBeatsPerMeasure) {
        continue;
      }

      if(NbRestsAdded < BEST_NbRestsAdded) {
        BEST_Nb_EN_QN_EN = Nb_EN_QN_EN;
        BEST_Nb_DQN_EN = Nb_DQN_EN;
        BEST_Nb_1NOTE_2BEATS = Nb_1NOTE_2BEATS;
        BEST_NbLinked = NbLinked;
        BEST_NbBeatsPerMeasure = NbBeatsPerMeasure;
        BEST_NbRestsAdded = NbRestsAdded;
      }
    }

    // Adding rest at the beginning of the score
    for(let k=0; k < BEST_NbRestsAdded; k++) {
      ListBestComb.unshift('1REST_1BEAT');
      ListNotesRef.unshift('FAKE_REST');
    }
    return {'beat_per_measure':BEST_NbBeatsPerMeasure, 'list_combination_keys':ListBestComb, 'list_note_refs':ListNotesRef };
  }

  _GenerateMusicXMLScore(author:string, title:string):string {
    let score:string;
    if(this.BestPath.length === 0) {
      return null;
    }

    // Get: - number of beat per measure, - list of best combination key, - list of note references
    let PathConfig = this._FindBestPathConfiguration();
    let ListMeasures = GetListNotesFromListComb(PathConfig['list_combination_keys'], PathConfig['beat_per_measure']);

    // Create a partition
    let ScoreXML = new MusicXml(title, author);
    // Create the parts
    let IdPart1:string = "P1";
    ScoreXML.AddPart(IdPart1, "Solo")

    // Attributes
    let ClefLine:number = 2
    if(this.clef === 'F') {
      ClefLine = 4;
    }
    let E_attributes = CreateAttributesElement({
      "divisions":COMBINATIONS_DIVISION,
      "key_fifths":this.fifths,
      "key_mode":"major",
      "time_beats":PathConfig['beat_per_measure'],
      "time_beattype":4,
      "clef_sign":this.clef,
      "clef_line":ClefLine});

    // Part 1
    ListMeasures.forEach((measure, IndMeasure) => {
      ScoreXML.AddMeasure(IdPart1);
      if(IndMeasure == 0) {
        ScoreXML.AddAttributes(IdPart1, E_attributes)
      }
      for(let notecomb of measure) {
        for(let note of notecomb) {
          if(note['pitchORrest'] == 'rest') {
            ScoreXML.AddNote(IdPart1, CreateNoteElement("rest", note['duration'], note['type']));
          } else {
            let KeyNote = PathConfig['list_note_refs'][note['indice']];
            let NoteInfo = this.NotesDico[KeyNote].note.GetStepAlterOctave(this.fifths);
            ScoreXML.AddNote(IdPart1, CreateNoteElement("pitch", note['duration'], note['type'], NoteInfo['step'], NoteInfo['octave'], NoteInfo['alter'], note['dot'], note['triplet'], note['beam']))
          }
        }
      }
    });
    // Writting the file
    score = ScoreXML.tostring();
    return score;
  }

  _GetMeanDelayPath():number {
    let MeanDelay = 0.0;
    let nbtotbeats = 0;
    for(let config of this.BestPath) {
      let delay = config.get_delay();
      let nbbeats = config.get_nbbeats();
      MeanDelay += delay * nbbeats;
      nbtotbeats += nbbeats;
    }
    MeanDelay = MeanDelay / nbtotbeats;
    return MeanDelay;
  }

  _GenerateMidiScore():Uint8Array {
    if(this.BestPath.length === 0) {
      return null;
    }

    // Get: - number of beat per measure, - list of best combination key, - list of note references
    let PathConfig = this._FindBestPathConfiguration();
    let ListMeasures = GetListNotesFromListComb(PathConfig['list_combination_keys'], PathConfig['beat_per_measure']);

    let MeanDelay = this._GetMeanDelayPath();
    // Ticks per quarter note
    let PPQ = 480;
    // microseconds per quarter note
    let Tempo = Math.round(MeanDelay * 1e6);

    let midi_score = new Midi(PPQ);
    midi_score.AddTrack();
    midi_score.Tracks[0].AddDeltaTime(0);
    midi_score.Tracks[0].AddMetaEvent("Set Tempo", Tempo);
    midi_score.Tracks[0].AddDeltaTime(0);
    midi_score.Tracks[0].AddMetaEvent("Time Signature", [PathConfig['beat_per_measure'], 4, COMBINATIONS_DIVISION, 8]);
    midi_score.Tracks[0].AddDeltaTime(0);
    midi_score.Tracks[0].AddMetaEvent("End of Track");

    midi_score.AddTrack();
    midi_score.Tracks[1].AddDeltaTime(0);
    midi_score.Tracks[1].AddMetaEvent("Sequence/Track Name", "Main track");
    midi_score.Tracks[1].AddDeltaTime(0);
    midi_score.Tracks[1].AddMidiEvent("Program Change", [1]);

    let DeltaTimeTicks = 0;
    ListMeasures.forEach((measure, IndMeasure) => {
      for(let notecomb of measure) {
        for(let note of notecomb) {
          let Duration_NbTicks = Math.round((note['duration'] * 1.0 / COMBINATIONS_DIVISION) * PPQ);
          if(note['pitchORrest'] === 'rest') {
            DeltaTimeTicks += Duration_NbTicks;
          } else {
            let KeyNote = PathConfig['list_note_refs'][note['indice']];
            let IntHeight:number;
            let Octave:number;
            [IntHeight, Octave] = this.NotesDico[KeyNote].note.GetRoundedHeightAndOctave();
            let KEY = Math.round(ConvertNoteAndOctaveToSemitone(IntHeight, Octave));
            midi_score.Tracks[1].AddNote(DeltaTimeTicks, Duration_NbTicks, KEY, 120);
            DeltaTimeTicks = 0;
          }
        }
      }
    });

    midi_score.Tracks[1].AddDeltaTime(0);
    midi_score.Tracks[1].AddMetaEvent("End of Track");
    let score_content = midi_score.GenerateMidiArray();
    return score_content;
  }

  _GenerateMidiScore_norythm():Uint8Array {
    // Ticks per quarter note
    let PPQ = 480;
    // microseconds per quarter note
    let Tempo = 1000000;

    let midi_score = new Midi(PPQ);
    midi_score.AddTrack();
    midi_score.Tracks[0].AddDeltaTime(0);
    midi_score.Tracks[0].AddMetaEvent("Set Tempo", Tempo);
    midi_score.Tracks[0].AddDeltaTime(0);
    midi_score.Tracks[0].AddMetaEvent("End of Track");

    midi_score.AddTrack();
    midi_score.Tracks[1].AddDeltaTime(0);
    midi_score.Tracks[1].AddMetaEvent("Sequence/Track Name", "Main track");
    midi_score.Tracks[1].AddDeltaTime(0);
    midi_score.Tracks[1].AddMidiEvent("Program Change", [1]);

    // Finding the first note
    let CurrentNoteRef:string = null;
    for (let noteref in this.NotesDico) {
      if((noteref[0] === 'N') || (noteref[0] === 'S')) {
        // If previous == 0 ==> it's a note at the beginning of the score
        let previousNotes = this.NotesDico[noteref].previous.filter(ref => ref[0] !== 'F');
        if(previousNotes.length === 0) {
          CurrentNoteRef = noteref;
          break;
        }
      }
    }

    let DeltaTimeTicks = 0;
    while(CurrentNoteRef != null){
      let NoteLength = this.NotesDico[CurrentNoteRef].note.get_analoglength();
      let Duration_NbTicks = Math.round(NoteLength * PPQ);
      if(!this.NotesDico[CurrentNoteRef].note.is_note()) {
        DeltaTimeTicks += Duration_NbTicks;
      } else {
        let IntHeight:number;
        let Octave:number;
        [IntHeight, Octave] = this.NotesDico[CurrentNoteRef].note.GetRoundedHeightAndOctave();
        let KEY = ConvertNoteAndOctaveToSemitone(IntHeight, Octave);
        midi_score.Tracks[1].AddNote(DeltaTimeTicks, Duration_NbTicks, KEY, 120);
        DeltaTimeTicks = 0;
      }
      // Next note
      CurrentNoteRef = this.NotesDico[CurrentNoteRef].next.find(ref => (ref[0] === 'N') || (ref[0] === 'R'));
    }

    midi_score.Tracks[1].AddDeltaTime(0);
    midi_score.Tracks[1].AddMetaEvent("End of Track");
    let score_content = midi_score.GenerateMidiArray();
    return score_content;
  }

  I_GenerateScore():RhythmResult {
    let S_XML:string;
    let MIDI:Uint8Array;
    let MIDI_NR:Uint8Array;
    S_XML = this._GenerateMusicXMLScore("scorelisto.com", "Untitled");
    MIDI = this._GenerateMidiScore();
    MIDI_NR = this._GenerateMidiScore_norythm();
    return {score_musicxml: S_XML, score_midi: MIDI, score_midinorhythm: MIDI_NR};
  }

  run(stepResult:StepResult, debug:boolean=false): Observable<any> {
    return new Observable((observer) => {
      let SCORES:RhythmResult;

      if(debug) {
        console.log("/////////////////////////////////////");
        console.log("Rhythm detector: Building class with notes");
        console.log("/////////////////////////////////////");
      }
      this.init_set_notes(stepResult);
      if(debug) {
        console.log("    Dictionary of notes created:");
        console.log(this.NotesDico);
        console.log("/////////////////////////////////////");
      }


      if(debug) {
        console.log("/////////////////////////////////////");
        console.log("Rhythm detector: Minimizing notes height errors");
        console.log("/////////////////////////////////////");
      }
      observer.next({progression: {value: 1, total: 10, step: "Minimizing pitch errors"}});
      this.A_MinimizeHeightError();
      if(debug) {
        console.log("    Dictionary of notes:");
        console.log(this.NotesDico);
        console.log("/////////////////////////////////////");
      }


      if(debug) {
        console.log("/////////////////////////////////////");
        console.log("Rhythm detector: Auto detecting the fifth");
        console.log("/////////////////////////////////////");
      }
      observer.next({progression: {value: 2, total: 10, step: "Auto-Detecting optimal fifth"}});
      this.B_AutoSetFifths();
      if(debug) {
        console.log("    Fifth detected:");
        console.log(this.fifths);
        console.log("/////////////////////////////////////");
      }


      if(debug) {
        console.log("/////////////////////////////////////");
        console.log("Rhythm detector: Auto detecting clef");
        console.log("/////////////////////////////////////");
      }
      observer.next({progression: {value: 3, total: 10, step: "Auto-Detecting optimal clef"}});
      this.C_AutoSetClef();
      if(debug) {
        console.log("    Clef detected:");
        console.log(this.clef);
        console.log("/////////////////////////////////////");
      }


      if(debug) {
        console.log("/////////////////////////////////////");
        console.log("Rhythm detector: Auto detecting octave");
        console.log("/////////////////////////////////////");
      }
      observer.next({progression: {value: 4, total: 10, step: "Auto-Detecting optimal octave"}});
      this.D_AutoTranslateOctave();
      if(debug) {
        console.log("    Octave detected, dictionary of notes:");
        console.log(this.NotesDico);
        console.log("/////////////////////////////////////");
      }


      if(debug) {
        console.log("/////////////////////////////////////");
        console.log("Rhythm detector: Listing all possible configurations of rhythm");
        console.log("/////////////////////////////////////");
      }
      observer.next({progression: {value: 5, total: 10, step: "Listing all possibles rhythms for each note"}});
      this.E_GetConfigurationsForAllNotes();
      if(debug) {
        console.log("    Dictionary of notes:");
        console.log(this.NotesDico);
        console.log("/////////////////////////////////////");
      }


      if(debug) {
        console.log("/////////////////////////////////////");
        console.log("Rhythm detector: Masking unwanted rhythms");
        console.log("/////////////////////////////////////");
      }
      observer.next({progression: {value: 6, total: 10, step: "Masking unwanted rhythms"}});
      this.F_MaskCOMBINATIONS();
      if(debug) {
        console.log("    Dictionary of notes:");
        console.log(this.NotesDico);
        console.log("/////////////////////////////////////");
      }


      if(debug) {
        console.log("/////////////////////////////////////");
        console.log("Rhythm detector: Building Dijkstra Graph");
        console.log("/////////////////////////////////////");
      }
      observer.next({progression: {value: 7, total: 10, step: "Building graph of all possibles scores"}});
      this.G_BuildGraph();
      if(debug) {
        console.log("    Graph:");
        console.log(this.graph);
        console.log("/////////////////////////////////////");
      }


      if(debug) {
        console.log("/////////////////////////////////////");
        console.log("Rhythm detector: Searching best path");
        console.log("/////////////////////////////////////");
      }
      observer.next({progression: {value: 8, total: 10, step: "Searching best score configuration"}});
      this.H_GetOptimalPath();
      if(debug) {
        console.log("    Best path:");
        console.log(this.BestPath);
        console.log("/////////////////////////////////////");
      }


      if(debug) {
        console.log("/////////////////////////////////////");
        console.log("Rhythm detector: Creatng scores");
        console.log("/////////////////////////////////////");
      }
      observer.next({progression: {value: 9, total: 10, step: "Writting scores"}});
      SCORES = this.I_GenerateScore();
      if(debug) {
        console.log(SCORES);
        console.log("/////////////////////////////////////");
      }
      observer.next({progression: {value: 10, total: 10, step: "Finished"}});
      observer.next({result: SCORES});
      observer.complete();
    });
  }

}




































export interface ConfigurationOption {
  key:COMBINATION_KEY,
  error:number,
  mask:boolean
}

export class Configuration {
  private delay:number;
  private nbbeats:number;
  private nbnotes:number;
  private path:string[];
  private ref:string;
  private options:ConfigurationOption[];

  constructor(NbNotes:number, NbBeats:number, Delay:number, path:string[], Ref:string='') {
    this.delay = Delay;
    this.nbbeats = NbBeats;
    this.nbnotes = NbNotes;
    this.path = path.slice();
    this.ref = Ref;
    this.options = [];
  }
  get_delay() {
    return this.delay;
  }

  get_nbbeats() {
    return this.nbbeats;
  }

  get_nbnotes() {
    return this.nbnotes;
  }

  get_ref() {
    return this.ref;
  }

  set_ref(ref) {
    this.ref = ref;
  }

  get_path() {
    return this.path;
  }

  get_last_path_ref() {
    return this.path[this.path.length -1];
  }

  get_nboptions():number {
    return this.options.length;
  }

  get_options():ConfigurationOption[] {
    return this.options;
  }

  get_bestoption():ConfigurationOption {
    let error_min:number = Number.MAX_VALUE;
    let best_option:ConfigurationOption;
    for(let option of this.options) {
      if(option.mask == false) {
        if(option.error < error_min){
          error_min = option.error;
          best_option = option;
        }
      }
    }
    return best_option;
  }

  AtLeastOneUnmaskOption() {
    for(let option of this.options) {
      if(option.mask == false) {
        return true;
      }
    }
    return false;
  }

  KeycombAlreadyAdded(key:string) {
    for(let combination of this.options) {
      if(combination.key === key) {
        return true;
      }
    }
    return false;
  }

  IsValid(ErrorMax, DelayMin, DelayMax) {
    if((this.delay > DelayMax) || (this.delay < DelayMin)) {
      return false;
    }
    for(let combination of this.options) {
      if((combination.mask == false) && (combination.error < ErrorMax)) {
        return true;
      }
    }
    return false;
  }

  AddOption(option:ConfigurationOption) {
    if(this.KeycombAlreadyAdded(option.key)) {
      console.log("Trying to add a combination that is already in there")
    }
    this.options.push(option)
  }
}












































export const COMBINATIONS_DIVISION:number = 24;

export const LENGTH_WHOLE:number = COMBINATIONS_DIVISION * 4;
export const LENGTH_HALF:number = COMBINATIONS_DIVISION * 2;
export const LENGTH_QUARTER:number = COMBINATIONS_DIVISION;
export const LENGTH_EIGHTH:number = COMBINATIONS_DIVISION / 2;
export const LENGTH_16TH:number = COMBINATIONS_DIVISION / 4;
export const LENGTH_T_EIGHTH:number = COMBINATIONS_DIVISION / 3;
export const LENGTH_T_16TH:number = COMBINATIONS_DIVISION / 6;

////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
export type COMBINATION_KEY =
  '1NOTE_1BEAT'|'1REST_1BEAT' | '1NOTE_2BEATS' | '1REST_2BEATS' | '1NOTE_3BEATS' | '1REST_3BEATS' | '1NOTE_4BEATS' | 
  '1REST_4BEATS' | '1NOTE_5BEATS' | '1REST_5BEATS' | '1NOTE_6BEATS' | '1REST_6BEATS' | '1NOTE_7BEATS' | '1REST_7BEATS' | 
  '1NOTE_8BEATS' | '1REST_8BEATS' | 'EN_EN' | 'ER_EN' | 'EN_ER' | 'DEN_SN' | 'SN_DEN' | 'DQN_EN' | 'QR-ER_EN' | 
  'DQN_ER' | 'EN_EN-QN' | 'QN-DQN_EN' | 'QR-QR-ER_EN' | 'QN-DQN_ER' | 'EN_EN-HN' | 'HN-DQN_EN' | 'QR-QR-QR-ER_EN' | 
  'HN-DQN_ER' | 'EN_EN-DHN' | 'EN_SN_SN' | 'ER_SN_SN' | 'SN_SN_EN' | 'SN_SN_ER' | 'SN_EN_SN' | 'T_EN_EN_EN' | 
  'T_EN_DEN_SN' | 'T_EN_SN_DEN' | 'T_SN_EN_DEN' | 'T_SN_DEN_EN' | 'T_DEN_EN_SN' | 'T_DEN_SN_EN' | 'EN_QN_EN' | 
  'DQN_SN_SN' | 'QN-DQN_SN_SN' | 'HN-DQN_SN_SN' | 'SN_SN_SN_SN';

export type COMBINATION_OPTIONS = {
  [key in COMBINATION_KEY]: {'notelengths':number[], 'nbnotes': number, 'nbbeats': number, 'notetypes':Array<'rest'|'note'>, 'triplet': boolean};
}
export const COMBINATIONS:COMBINATION_OPTIONS = {
  // 1 NOTE
  ////////////////////////////////////////////////////////////////////////////////////////////
  '1NOTE_1BEAT': {'notelengths': [LENGTH_QUARTER], 'nbnotes': 1, 'nbbeats': 1, 'notetypes': ['note'], 'triplet': false},
  '1REST_1BEAT': {'notelengths': [LENGTH_QUARTER], 'nbnotes': 1, 'nbbeats': 1, 'notetypes': ['rest'], 'triplet': false},
  '1NOTE_2BEATS': {'notelengths': [LENGTH_HALF], 'nbnotes': 1, 'nbbeats': 2, 'notetypes': ['note'], 'triplet': false},
  '1REST_2BEATS': {'notelengths': [LENGTH_HALF], 'nbnotes': 1, 'nbbeats': 2, 'notetypes': ['rest'], 'triplet': false},
  '1NOTE_3BEATS': {'notelengths': [LENGTH_HALF + LENGTH_QUARTER], 'nbnotes': 1, 'nbbeats': 3, 'notetypes': ['note'], 'triplet': false},
  '1REST_3BEATS': {'notelengths': [LENGTH_HALF + LENGTH_QUARTER], 'nbnotes': 1, 'nbbeats': 3, 'notetypes': ['rest'], 'triplet': false},
  '1NOTE_4BEATS': {'notelengths': [LENGTH_WHOLE], 'nbnotes': 1, 'nbbeats': 4, 'notetypes': ['note'], 'triplet': false},
  '1REST_4BEATS': {'notelengths': [LENGTH_WHOLE], 'nbnotes': 1, 'nbbeats': 4, 'notetypes': ['rest'], 'triplet': false},
  '1NOTE_5BEATS': {'notelengths': [LENGTH_WHOLE + LENGTH_QUARTER], 'nbnotes': 1, 'nbbeats': 5, 'notetypes': ['note'], 'triplet': false},
  '1REST_5BEATS': {'notelengths': [LENGTH_WHOLE + LENGTH_QUARTER], 'nbnotes': 1, 'nbbeats': 5, 'notetypes': ['rest'], 'triplet': false},
  '1NOTE_6BEATS': {'notelengths': [LENGTH_WHOLE + LENGTH_HALF], 'nbnotes': 1, 'nbbeats': 6, 'notetypes': ['note'], 'triplet': false},
  '1REST_6BEATS': {'notelengths': [LENGTH_WHOLE + LENGTH_HALF], 'nbnotes': 1, 'nbbeats': 6, 'notetypes': ['rest'], 'triplet': false},
  '1NOTE_7BEATS': {'notelengths': [LENGTH_WHOLE + LENGTH_HALF + LENGTH_QUARTER], 'nbnotes': 1, 'nbbeats': 7, 'notetypes': ['note'], 'triplet': false},
  '1REST_7BEATS': {'notelengths': [LENGTH_WHOLE + LENGTH_HALF + LENGTH_QUARTER], 'nbnotes': 1, 'nbbeats': 7, 'notetypes': ['rest'], 'triplet': false},
  '1NOTE_8BEATS': {'notelengths': [LENGTH_WHOLE + LENGTH_WHOLE], 'nbnotes': 1, 'nbbeats': 8, 'notetypes': ['note'], 'triplet': false},
  '1REST_8BEATS': {'notelengths': [LENGTH_WHOLE + LENGTH_WHOLE], 'nbnotes': 1, 'nbbeats': 8, 'notetypes': ['rest'], 'triplet': false},

  // 2 NOTES
  ////////////////////////////////////////////////////////////////////////////////////////////
  // 1 BEAT
  'EN_EN': {'notelengths': [LENGTH_EIGHTH, LENGTH_EIGHTH], 'nbnotes': 2, 'nbbeats': 1, 'notetypes': ['note', 'note'], 'triplet': false},
  'ER_EN': {'notelengths': [LENGTH_EIGHTH, LENGTH_EIGHTH], 'nbnotes': 2, 'nbbeats': 1, 'notetypes': ['rest', 'note'], 'triplet': false},
  'EN_ER': {'notelengths': [LENGTH_EIGHTH, LENGTH_EIGHTH], 'nbnotes': 2, 'nbbeats': 1, 'notetypes': ['note', 'rest'], 'triplet': false},
  'DEN_SN': {'notelengths': [LENGTH_EIGHTH + LENGTH_16TH, LENGTH_16TH], 'nbnotes': 2, 'nbbeats': 1, 'notetypes': ['note', 'note'], 'triplet': false},
  'SN_DEN': {'notelengths': [LENGTH_16TH, LENGTH_EIGHTH + LENGTH_16TH], 'nbnotes': 2, 'nbbeats': 1, 'notetypes': ['note', 'note'], 'triplet': false},
  // 2 BEATS
  'DQN_EN': {'notelengths': [LENGTH_QUARTER + LENGTH_EIGHTH, LENGTH_EIGHTH], 'nbnotes': 2, 'nbbeats': 2, 'notetypes': ['note', 'note'], 'triplet': false},
  'QR-ER_EN': {'notelengths': [LENGTH_QUARTER + LENGTH_EIGHTH, LENGTH_EIGHTH], 'nbnotes': 2, 'nbbeats': 2, 'notetypes': ['rest', 'note'], 'triplet': false},
  'DQN_ER': {'notelengths': [LENGTH_QUARTER + LENGTH_EIGHTH, LENGTH_EIGHTH], 'nbnotes': 2, 'nbbeats': 2, 'notetypes': ['note', 'rest'], 'triplet': false},
  'EN_EN-QN': {'notelengths': [LENGTH_EIGHTH, LENGTH_QUARTER + LENGTH_EIGHTH], 'nbnotes': 2, 'nbbeats': 2, 'notetypes': ['note', 'note'], 'triplet': false},
  // 3 BEATS
  'QN-DQN_EN': {'notelengths': [LENGTH_HALF + LENGTH_EIGHTH, LENGTH_EIGHTH], 'nbnotes': 2, 'nbbeats': 3, 'notetypes': ['note', 'note'], 'triplet': false},
  'QR-QR-ER_EN': {'notelengths': [LENGTH_HALF + LENGTH_EIGHTH, LENGTH_EIGHTH], 'nbnotes': 2, 'nbbeats': 3, 'notetypes': ['rest', 'note'], 'triplet': false},
  'QN-DQN_ER': {'notelengths': [LENGTH_HALF + LENGTH_EIGHTH, LENGTH_EIGHTH], 'nbnotes': 2, 'nbbeats': 3, 'notetypes': ['note', 'rest'], 'triplet': false},
  'EN_EN-HN': {'notelengths': [LENGTH_EIGHTH, LENGTH_HALF + LENGTH_EIGHTH], 'nbnotes': 2, 'nbbeats': 3, 'notetypes': ['note', 'note'], 'triplet': false},
  // 4 BEATS
  'HN-DQN_EN': {'notelengths': [LENGTH_HALF + LENGTH_QUARTER + LENGTH_EIGHTH, LENGTH_EIGHTH], 'nbnotes': 2, 'nbbeats': 4, 'notetypes': ['note', 'note'], 'triplet': false},
  'QR-QR-QR-ER_EN': {'notelengths': [LENGTH_HALF + LENGTH_QUARTER + LENGTH_EIGHTH, LENGTH_EIGHTH], 'nbnotes': 2, 'nbbeats': 4, 'notetypes': ['rest', 'note'], 'triplet': false},
  'HN-DQN_ER': {'notelengths': [LENGTH_HALF + LENGTH_QUARTER + LENGTH_EIGHTH, LENGTH_EIGHTH], 'nbnotes': 2, 'nbbeats': 4, 'notetypes': ['note', 'rest'], 'triplet': false},
  'EN_EN-DHN': {'notelengths': [LENGTH_EIGHTH, LENGTH_HALF + LENGTH_QUARTER + LENGTH_EIGHTH], 'nbnotes': 2, 'nbbeats': 4, 'notetypes': ['note', 'note'], 'triplet': false},

  // 3 NOTES
  ////////////////////////////////////////////////////////////////////////////////////////////
  // 1 BEAT
  'EN_SN_SN': {'notelengths': [LENGTH_EIGHTH, LENGTH_16TH, LENGTH_16TH], 'nbnotes': 3, 'nbbeats': 1, 'notetypes': ['note', 'note', 'note'], 'triplet': false},
  'ER_SN_SN': {'notelengths': [LENGTH_EIGHTH, LENGTH_16TH, LENGTH_16TH], 'nbnotes': 3, 'nbbeats': 1, 'notetypes': ['rest', 'note', 'note'], 'triplet': false},
  'SN_SN_EN': {'notelengths': [LENGTH_16TH, LENGTH_16TH, LENGTH_EIGHTH], 'nbnotes': 3, 'nbbeats': 1, 'notetypes': ['note', 'note', 'note'], 'triplet': false},
  'SN_SN_ER': {'notelengths': [LENGTH_16TH, LENGTH_16TH, LENGTH_EIGHTH], 'nbnotes': 3, 'nbbeats': 1, 'notetypes': ['note', 'note', 'rest'], 'triplet': false},
  'SN_EN_SN': {'notelengths': [LENGTH_16TH, LENGTH_EIGHTH, LENGTH_16TH], 'nbnotes': 3, 'nbbeats': 1, 'notetypes': ['note', 'note', 'note'], 'triplet': false},
  'T_EN_EN_EN': {'notelengths': [LENGTH_T_EIGHTH, LENGTH_T_EIGHTH, LENGTH_T_EIGHTH], 'nbnotes': 3, 'nbbeats': 1, 'notetypes': ['note', 'note', 'note'], 'triplet': true},
  'T_EN_DEN_SN': {'notelengths': [LENGTH_T_EIGHTH, LENGTH_EIGHTH, LENGTH_T_16TH], 'nbnotes': 3, 'nbbeats': 1, 'notetypes': ['note', 'note', 'note'], 'triplet': true},
  'T_EN_SN_DEN': {'notelengths': [LENGTH_T_EIGHTH, LENGTH_T_16TH, LENGTH_EIGHTH], 'nbnotes': 3, 'nbbeats': 1, 'notetypes': ['note', 'note', 'note'], 'triplet': true},
  'T_SN_EN_DEN': {'notelengths': [LENGTH_T_16TH, LENGTH_T_EIGHTH, LENGTH_EIGHTH], 'nbnotes': 3, 'nbbeats': 1, 'notetypes': ['note', 'note', 'note'], 'triplet': true},
  'T_SN_DEN_EN': {'notelengths': [LENGTH_T_16TH, LENGTH_EIGHTH, LENGTH_T_EIGHTH], 'nbnotes': 3, 'nbbeats': 1, 'notetypes': ['note', 'note', 'note'], 'triplet': true},
  'T_DEN_EN_SN': {'notelengths': [LENGTH_EIGHTH, LENGTH_T_EIGHTH, LENGTH_T_16TH], 'nbnotes': 3, 'nbbeats': 1, 'notetypes': ['note', 'note', 'note'], 'triplet': true},
  'T_DEN_SN_EN': {'notelengths': [LENGTH_EIGHTH, LENGTH_T_16TH, LENGTH_T_EIGHTH], 'nbnotes': 3, 'nbbeats': 1, 'notetypes': ['note', 'note', 'note'], 'triplet': true},
  // 2 BEATS
  'EN_QN_EN': {'notelengths': [LENGTH_EIGHTH, LENGTH_QUARTER, LENGTH_EIGHTH], 'nbnotes': 3, 'nbbeats': 2, 'notetypes': ['note', 'note', 'note'], 'triplet': false},
  'DQN_SN_SN': {'notelengths': [LENGTH_QUARTER + LENGTH_EIGHTH, LENGTH_16TH, LENGTH_16TH], 'nbnotes': 3, 'nbbeats': 2, 'notetypes': ['note', 'note', 'note'], 'triplet': false},
  // 3 BEATS
  'QN-DQN_SN_SN': {'notelengths': [LENGTH_HALF + LENGTH_EIGHTH, LENGTH_16TH, LENGTH_16TH], 'nbnotes': 3, 'nbbeats': 3, 'notetypes': ['note', 'note', 'note'], 'triplet': false},
  // 4 BEATS
  'HN-DQN_SN_SN': {'notelengths': [LENGTH_HALF + LENGTH_QUARTER + LENGTH_EIGHTH, LENGTH_16TH, LENGTH_16TH], 'nbnotes': 3, 'nbbeats': 4, 'notetypes': ['note', 'note', 'note'], 'triplet': false},

  // 4 NOTES
  ////////////////////////////////////////////////////////////////////////////////////////////
  // 1 BEAT
  'SN_SN_SN_SN': {'notelengths': [LENGTH_16TH, LENGTH_16TH, LENGTH_16TH, LENGTH_16TH], 'nbnotes': 4, 'nbbeats': 1, 'notetypes': ['note', 'note', 'note', 'note'], 'triplet': false}
}
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////

export function ConvertAllowedRhythmsToMaskDico(allowedRhythms:RhythmList) {
  let combination_to_mask = {
    '1NOTE_1BEAT': !allowedRhythms.onenoteonebeat,
    '1REST_1BEAT': !allowedRhythms.onerestonebeat,
    '1NOTE_2BEATS': !allowedRhythms.onenotetwobeat,
    '1REST_2BEATS': !allowedRhythms.oneresttwobeat,
    '1NOTE_3BEATS': !allowedRhythms.onenotethreebeat,
    '1REST_3BEATS': !allowedRhythms.onerestthreebeat,
    '1NOTE_4BEATS': !allowedRhythms.onenotefourbeat,
    '1REST_4BEATS': !allowedRhythms.onerestfourbeat,
    '1NOTE_5BEATS': !allowedRhythms.onenotefivebeat,
    '1REST_5BEATS': !allowedRhythms.onerestfivebeat,
    '1NOTE_6BEATS': !allowedRhythms.onenotesixbeat,
    '1REST_6BEATS': !allowedRhythms.onerestsixbeat,
    '1NOTE_7BEATS': !allowedRhythms.onenotesevenbeat,
    '1REST_7BEATS': !allowedRhythms.onerestsevenbeat,
    '1NOTE_8BEATS': !allowedRhythms.onenoteeightbeat,
    '1REST_8BEATS': !allowedRhythms.oneresteightbeat,
    'EN_EN': !allowedRhythms.en_en,
    'ER_EN': !allowedRhythms.er_en,
    'EN_ER': !allowedRhythms.en_er,
    'DEN_SN': !allowedRhythms.den_sn,
    'SN_DEN': !allowedRhythms.sn_den,
    'DQN_EN': !allowedRhythms.dqn_en,
    'QR-ER_EN': !allowedRhythms.qr_er_en,
    'DQN_ER': !allowedRhythms.dqn_er,
    'EN_EN-QN': !allowedRhythms.en_en_qn,
    'QN-DQN_EN': !allowedRhythms.qn_dqn_en,
    'QR-QR-ER_EN': !allowedRhythms.qr_qr_er_en,
    'QN-DQN_ER': !allowedRhythms.qn_dqn_er,
    'EN_EN-HN': !allowedRhythms.en_en_hn,
    'HN-DQN_EN': !allowedRhythms.hn_dqn_en,
    'QR-QR-QR-ER_EN': !allowedRhythms.qr_qr_qr_er_en,
    'HN-DQN_ER': !allowedRhythms.hn_dqn_er,
    'EN_EN-DHN': !allowedRhythms.en_en_dhn,
    'EN_SN_SN': !allowedRhythms.en_sn_sn,
    'ER_SN_SN': !allowedRhythms.er_sn_sn,
    'SN_SN_EN': !allowedRhythms.sn_sn_en,
    'SN_SN_ER': !allowedRhythms.sn_sn_er,
    'SN_EN_SN': !allowedRhythms.sn_en_sn,
    'T_EN_EN_EN': !allowedRhythms.t_en_en_en,
    'T_EN_DEN_SN': !allowedRhythms.t_en_den_sn,
    'T_EN_SN_DEN': !allowedRhythms.t_en_sn_den,
    'T_SN_EN_DEN': !allowedRhythms.t_sn_en_den,
    'T_SN_DEN_EN': !allowedRhythms.t_sn_den_en,
    'T_DEN_EN_SN': !allowedRhythms.t_den_en_sn,
    'T_DEN_SN_EN': !allowedRhythms.t_den_sn_en,
    'EN_QN_EN': !allowedRhythms.en_qn_en,
    'DQN_SN_SN': !allowedRhythms.dqn_sn_sn,
    'QN-DQN_SN_SN': !allowedRhythms.qn_dqn_sn_sn,
    'HN-DQN_SN_SN': !allowedRhythms.hn_dqn_sn_sn,
    'SN_SN_SN_SN': !allowedRhythms.sn_sn_sn_sn
  }
  return combination_to_mask;
}


export function NoteTypesCorrespond(arrayOne:string[], arrayTwo:string[]) {
  if(arrayOne.length != arrayTwo.length) {
    return false;
  }
  for(let k=0; k<arrayOne.length; k++) {
    if(arrayOne[k] !== arrayTwo[k]) {
      return false;
    }
  }
  return true;
}


export function CombinationExists(keyComb:string):boolean {
  return (keyComb in COMBINATIONS);
}

export function CalculateRatio(keyComb):number[] {
  if(!CombinationExists(keyComb)) {
    console.log("The combination doesn't exists");
  }
  let IdealRatio:number[] = [];
  for(let k=0; k<COMBINATIONS[keyComb]['notelengths'].length; k++){
    IdealRatio.push(COMBINATIONS[keyComb]['notelengths'][k] / (COMBINATIONS_DIVISION * COMBINATIONS[keyComb]['nbbeats']));
  }
  return IdealRatio;
}

export function CalculateError(keyComb, NoteLengths:number[]):number {
  if(!CombinationExists(keyComb)) {
    console.log("The combination doesn't exists");
  }
  if(NoteLengths.length != COMBINATIONS[keyComb]['notelengths'].length) {
    console.log("Length of array does not match");
    return ;
  }
  let TotLength:number = NoteLengths.reduce((a, b) => a + b, 0);
  let IdealRatio:number[] = CalculateRatio(keyComb);
  let IdealLength:number;
  let ErrorLength:number;
  let TotalError:number = 0;
  for(let k=0; k<COMBINATIONS[keyComb]['notelengths'].length; k++){
    IdealLength = IdealRatio[k]*TotLength;
    ErrorLength = Math.abs(IdealLength - NoteLengths[k]) * COMBINATIONS[keyComb]['nbbeats'];
    TotalError += Math.sqrt(Math.pow(IdealLength, 2.0) + Math.pow(ErrorLength, 2.0))
  }
  return TotalError;
}


export function GetListIndicesFromListComb(KeyCombList:string[]) {
  let CombNotesIndices:number[] = [0];
  KeyCombList.forEach((KeyComb, kComb) => {
    let IndBefore = CombNotesIndices[CombNotesIndices.length-1];
    if(kComb != KeyCombList.length - 1) {
      CombNotesIndices.push(IndBefore + COMBINATIONS[KeyComb]['nbnotes']);
    }
  });
  return CombNotesIndices;
}


export function DivideCombination(KeyComb:string, BeatStart:number, BeatEnd:number) {
  let OriginalLengths = COMBINATIONS[KeyComb]['notelengths'].slice();
  let CutLengths:number[] = COMBINATIONS[KeyComb]['notelengths'].slice();
  let NoteTypes:Array<'rest'|'pitch'> = COMBINATIONS[KeyComb]['notetypes'].slice();

  let OffsetStartIndice = 0;
  let NbTicksIgnore = BeatStart * COMBINATIONS_DIVISION;
  for(let value of OriginalLengths) {
    if(value == NbTicksIgnore) {
      CutLengths.splice(0,1);
      NoteTypes.splice(0,1);
      OffsetStartIndice += 1;
      NbTicksIgnore = 0;
      break;
    } else if(value < NbTicksIgnore) {
      CutLengths.splice(0,1);
      NoteTypes.splice(0,1);
      OffsetStartIndice += 1;
      NbTicksIgnore -= value;
    } else {
      CutLengths[0] -= NbTicksIgnore;
      break;
    }
  }
  
  let NbTicksToDelete = CutLengths.reduce((a, b) => a + b, 0) - (BeatEnd - BeatStart) * COMBINATIONS_DIVISION;

  let MaxInd = CutLengths.length -1;
  for(let ind=MaxInd; ind > -1; ind--) {
    if(CutLengths[ind] == NbTicksToDelete) {
      CutLengths.splice(ind,1);
      NoteTypes.splice(ind,1);
      break;
    } else if(CutLengths[ind] < NbTicksToDelete) {
      NbTicksToDelete -= CutLengths[ind]
      CutLengths.splice(ind,1);
      NoteTypes.splice(ind,1);
    } else {
      CutLengths[ind] -= NbTicksToDelete
      break;
    }
  }
  return {'lengths':CutLengths, 'types':NoteTypes, 'offset':OffsetStartIndice};
}


export function LengthToDuration(Lengths:number[], LengthsType:Array<'rest'|'pitch'>, Triplet:boolean) {
  let lengths_notes:Array<NoteInfo[]> = [];
  Lengths.forEach((length, ind) => {
    let notetemp:NoteInfo[] = [];
    let pitchORrest = LengthsType[ind];
    let SumDuration:number = 0;
    while(SumDuration < length) {
      if(length == (LENGTH_WHOLE + LENGTH_EIGHTH)) {
        // blanche pointée -> noire pointée :    4,5 beats
        notetemp.push({'duration': LENGTH_HALF + LENGTH_QUARTER, 'type': 'half', 'dot': true, 'triplet': false, 'pitchORrest': pitchORrest, 'beam': {}, 'indice':null});
        notetemp.push({'duration': LENGTH_QUARTER + LENGTH_EIGHTH, 'type': 'quarter', 'dot': true, 'triplet': false, 'pitchORrest': pitchORrest, 'beam': {}, 'indice':null});
      } else if(length >= LENGTH_WHOLE) {
        // ronde :                               4 beats
        notetemp.push({'duration': LENGTH_WHOLE, 'type': 'whole', 'dot': false, 'triplet': false, 'pitchORrest': pitchORrest, 'beam': {}, 'indice':null});
      } else if(length == LENGTH_HALF + LENGTH_QUARTER + LENGTH_EIGHTH) {
        // blanche -> noire pointée :            3,5 beats
        notetemp.push({'duration': LENGTH_HALF, 'type': 'quarter', 'dot': false, 'triplet': false, 'pitchORrest': pitchORrest, 'beam': {}, 'indice':null});
        notetemp.push({'duration': LENGTH_QUARTER + LENGTH_EIGHTH, 'type': 'quarter', 'dot': true, 'triplet': false, 'pitchORrest': pitchORrest, 'beam': {}, 'indice':null});
      } else if(length >= LENGTH_HALF + LENGTH_QUARTER) {
        // blanche pointée :                     3 beats
        notetemp.push({'duration': LENGTH_HALF + LENGTH_QUARTER, 'type': 'half', 'dot': true, 'triplet': false, 'pitchORrest': pitchORrest, 'beam': {}, 'indice':null});
      } else if(length == LENGTH_HALF + LENGTH_EIGHTH) {
        // noire -> noire pointée :              2,5 beats
        notetemp.push({'duration': LENGTH_QUARTER, 'type': 'quarter', 'dot': false, 'triplet': false, 'pitchORrest': pitchORrest, 'beam': {}, 'indice':null});
        notetemp.push({'duration': LENGTH_QUARTER + LENGTH_EIGHTH, 'type': 'quarter', 'dot': true, 'triplet': false, 'pitchORrest': pitchORrest, 'beam': {}, 'indice':null});
      } else if(length >= LENGTH_HALF) {
        // blanche :                             2 beats
        notetemp.push({'duration': LENGTH_HALF, 'type': 'half', 'dot': false, 'triplet': false, 'pitchORrest': pitchORrest, 'beam': {}, 'indice':null});
      } else if(length >= LENGTH_QUARTER + LENGTH_EIGHTH) {
        // noire pointée :                       1,5 beats
        notetemp.push({'duration': LENGTH_QUARTER + LENGTH_EIGHTH, 'type': 'quarter', 'dot': true, 'triplet': false, 'pitchORrest': pitchORrest, 'beam': {}, 'indice':null});
      } else if(length >= LENGTH_QUARTER) {
        // noire :                               1 beat
        notetemp.push({'duration': LENGTH_QUARTER, 'type': 'quarter', 'dot': false, 'triplet': false, 'pitchORrest': pitchORrest, 'beam': {}, 'indice':null});
      } else if(length >= LENGTH_EIGHTH + LENGTH_16TH) {
        // croche pointée :                      0.75 beat
        notetemp.push({'duration': LENGTH_EIGHTH + LENGTH_16TH, 'type': 'eighth', 'dot': true, 'triplet': false, 'pitchORrest': pitchORrest, 'beam': {}, 'indice':null});
      } else if(length >= LENGTH_EIGHTH) {
        if(Triplet) {
          // croche triolet pointée:              0.5 beat
          notetemp.push({'duration': LENGTH_EIGHTH, 'type': 'eighth', 'dot': true, 'triplet': true, 'pitchORrest': pitchORrest, 'beam': {}, 'indice':null});
        } else {
          // croche :                              0.5 beat
          notetemp.push({'duration': LENGTH_EIGHTH, 'type': 'eighth', 'dot': false, 'triplet': false, 'pitchORrest': pitchORrest, 'beam': {}, 'indice':null});
        }
      } else if(length >= LENGTH_T_EIGHTH) {
        // croche triolet :                      0.33 beat
        notetemp.push({'duration': LENGTH_T_EIGHTH, 'type': 'eighth', 'dot': false, 'triplet': true, 'pitchORrest': pitchORrest, 'beam': {}, 'indice':null});
      } else if(length >= LENGTH_16TH) {
        // double croche :                       0.25 beat
        notetemp.push({'duration': LENGTH_16TH, 'type': '16th', 'dot': false, 'triplet': false, 'pitchORrest': pitchORrest, 'beam': {}, 'indice':null});
      } else if(length >= LENGTH_T_16TH) {
        // double croche triolet :               0.1666 beat
        notetemp.push({'duration': LENGTH_T_16TH, 'type': '16th', 'dot': false, 'triplet': true, 'pitchORrest': pitchORrest, 'beam': {}, 'indice':null});
      } else {
        console.log("Invalid input argument 'Lengths', the data value does not correspond to a known note rythm");
      }
      SumDuration = 0;
      for(let note of notetemp) {
        SumDuration += note['duration'];
      }
    }
    if(SumDuration != length) {
      console.log("Error calculating the best note to write, wrong input values or not implemented rythm");
    }
    lengths_notes.push(notetemp);
  });
  return lengths_notes;
}


export function AddBeamInformation(Notes:Array<NoteInfo[]>, KeyComb:string) {
  if(['EN_EN', 'DEN_SN', 'SN_DEN'].some(key => key === KeyComb)) {
    Notes[0][0]['beam'] = {'1': 'begin'};
    Notes[1][0]['beam'] = {'1': 'end'};
  } else if(['T_EN_EN_EN', 'T_EN_DEN_SN', 'T_EN_SN_DEN', 'T_SN_EN_DEN', 'T_SN_DEN_EN', 'T_DEN_EN_SN', 'T_DEN_SN_EN'].some(key => key === KeyComb)) {
    Notes[0][0]['beam'] = {'1': 'begin'};
    Notes[1][0]['beam'] = {'1': 'continue'};
    Notes[2][0]['beam'] = {'1': 'end'};
  } else if(['EN_SN_SN'].some(key => key === KeyComb)) {
    Notes[0][0]['beam'] = {'1': 'begin'};
    Notes[1][0]['beam'] = {'1': 'continue', '2': 'begin'};
    Notes[2][0]['beam'] = {'1': 'end', '2': 'end'};
  } else if(['ER_SN_SN'].some(key => key === KeyComb)) {
    Notes[0][0]['beam'] = {};
    Notes[1][0]['beam'] = {'1': 'begin', '2': 'begin'};
    Notes[2][0]['beam'] = {'1': 'end', '2': 'end'};
  } else if(['SN_SN_EN'].some(key => key === KeyComb)) {
    Notes[0][0]['beam'] = {'1': 'begin', '2': 'begin'};
    Notes[1][0]['beam'] = {'1': 'continue', '2': 'end'};
    Notes[2][0]['beam'] = {'1': 'end'};
  } else if(['SN_SN_ER'].some(key => key === KeyComb)) {
    Notes[0][0]['beam'] = {'1': 'begin', '2': 'begin'};
    Notes[1][0]['beam'] = {'1': 'end', '2': 'end'};
    Notes[2][0]['beam'] = {};
  } else if(['SN_EN_SN'].some(key => key === KeyComb)) {
    Notes[0][0]['beam'] = {'1': 'begin'};
    Notes[1][0]['beam'] = {'1': 'continue'};
    Notes[2][0]['beam'] = {'1': 'end'};
  } else if(['SN_SN_SN_SN'].some(key => key === KeyComb)) {
    Notes[0][0]['beam'] = {'1': 'begin'};
    Notes[1][0]['beam'] = {'1': 'continue'};
    Notes[2][0]['beam'] = {'1': 'continue'};
    Notes[3][0]['beam'] = {'1': 'end'};
  }
}

export function GetNotesFromCombination(KeyComb:string, BeatStart:number, BeatEnd:number) {
  if(!CombinationExists(KeyComb)) {
    console.log("ERROR: Invalid input argument, the combination doesn't exists");
  }
  if(BeatStart > BeatEnd) {
    console.log("ERROR: Invalid input argument, the starting beat cannot be superior than ending beat");
  }
  if(BeatStart < 0) {
    console.log("ERROR: Invalid input argument, beat indices cannot be negatives");
  }
  if(BeatEnd > COMBINATIONS[KeyComb]['nbbeats']) {
    console.log("ERROR: Invalid input argument, the indices of the ending beat exceed the number of beats of the selected combination");
  }
  let res = DivideCombination(KeyComb, BeatStart, BeatEnd);
  let CutLengths:number[] = res['lengths'];
  let NotesType:Array<'rest'|'pitch'> = res['types'];
  let OffsetStartIndice:number = res['offset'];
  let notes:Array<NoteInfo[]> = LengthToDuration(CutLengths, NotesType, COMBINATIONS[KeyComb]['triplet']);
  AddBeamInformation(notes, KeyComb);
  return {'notes':notes, 'offset':OffsetStartIndice};
}


export interface NoteInfo {
  'duration': number,
  'type': 'whole'|'half'|'quarter'|'eighth'|'16th',
  'dot': boolean,
  'triplet': boolean,
  'pitchORrest': 'rest'|'pitch',
  'beam': Beam,
  'indice': number
}

export function GetListNotesFromListComb(KeyCombList:string[], TimeBeat:number) {
  let NbBeatsPerComb:number[] = [];
  for(let comb of KeyCombList){
    NbBeatsPerComb.push(COMBINATIONS[comb]['nbbeats'])
  }

  let CombNotesIndices = GetListIndicesFromListComb(KeyCombList);
  let NbBeatsTotal = NbBeatsPerComb.reduce((a, b) => a + b, 0);
  let NbBeatsDone = 0;
  let IndComb = 0;
  let IndBeatStart = 0;
  let MeasureBeatsRemaining = TimeBeat;
  let ListMeasures:Array<NoteInfo[][]> = [];
  let MeasureTemp:Array<NoteInfo[]> = [];
  while(NbBeatsDone < NbBeatsTotal) {
    // Number of beat remaining in the current combination
    let CombBeatsRemaining = NbBeatsPerComb[IndComb] - IndBeatStart;
    // End Indice of the combination to consider
    let IndBeatEnd:number;
    if(CombBeatsRemaining < MeasureBeatsRemaining) {
      IndBeatEnd = NbBeatsPerComb[IndComb];
    } else {
      IndBeatEnd = IndBeatStart + MeasureBeatsRemaining;
    }
    // Get the correspondant notes
    let res = GetNotesFromCombination(KeyCombList[IndComb], IndBeatStart, IndBeatEnd);
    let NoteListTemp:Array<NoteInfo[]> = res['notes'];
    let OffsetStartIndice:number = res['offset'];

    let noteind = OffsetStartIndice + CombNotesIndices[IndComb];

    for(let notes of NoteListTemp) {
      for(let notetemp of notes) {
        notetemp['indice'] = noteind;
      }
      MeasureTemp.push(notes);
      noteind += 1;
    }
    // Adding the number ot beat done
    NbBeatsDone += (IndBeatEnd - IndBeatStart);
    // Increment on the combination if all the beat of the combination are processed
    if(CombBeatsRemaining <= MeasureBeatsRemaining) {
      IndComb += 1;
      IndBeatStart = 0;
    } else {
      IndBeatStart += MeasureBeatsRemaining;
    }
    // Adding a new measure if the measure is finished
    if(CombBeatsRemaining >= MeasureBeatsRemaining) {
      ListMeasures.push(MeasureTemp);
      MeasureTemp = [];
      MeasureBeatsRemaining = TimeBeat;
    } else {
      MeasureBeatsRemaining -= CombBeatsRemaining;
    }
  }

  // Complete the last measure of silence
  if(MeasureTemp != []) {
    for(let k=0; k<MeasureBeatsRemaining ; k++ ) {
      let notetemp:NoteInfo[] = [{'duration': LENGTH_QUARTER, 'type': 'quarter', 'dot': false, 'triplet': false, 'pitchORrest': 'rest', 'beam': {}, 'indice': 0}];
      MeasureTemp.push(notetemp);
    }
    ListMeasures.push(MeasureTemp);
  }
  return ListMeasures
}
