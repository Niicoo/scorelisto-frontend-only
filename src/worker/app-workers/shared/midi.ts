export class Midi {
  public Tracks:MidiTrack[];
  private PPQ:number;
  private Format:number;

  constructor(PPQ:number = 480) {
    this.Tracks = [];
    this.PPQ = PPQ;
    this.Format = 1;
  }
  GetNumberOfTracks() {
    return(this.Tracks.length);
  }

  AddTrack() {
    this.Tracks.push(new MidiTrack());
  }

  GenerateMidiArray() {
    let HeaderArray:Uint8Array = unpack("MThd");
    HeaderArray = appendBuffer(HeaderArray, pack('>I', 6));
    HeaderArray = appendBuffer(HeaderArray, pack('>H', this.Format));
    HeaderArray = appendBuffer(HeaderArray, pack('>H', this.GetNumberOfTracks()));
    HeaderArray = appendBuffer(HeaderArray, pack('>H', this.PPQ));
    // Tracks
    let TracksArray:Uint8Array = new Uint8Array(0);
    for(let track of this.Tracks) {
      TracksArray = appendBuffer(TracksArray, track.GenerateArrayOfBytes());
    }
    return(appendBuffer(HeaderArray, TracksArray));
  }
}




export function appendBuffer(buffer1:Uint8Array, buffer2:Uint8Array ):Uint8Array {
  var tmp = new Uint8Array( buffer1.byteLength + buffer2.byteLength );
  tmp.set( new Uint8Array( buffer1 ), 0 );
  tmp.set( new Uint8Array( buffer2 ), buffer1.byteLength );
  return tmp;
}




export function unpack(str:string):Uint8Array {
    var bytes:number[] = [];
    for(var i = 0; i < str.length; i++) {
        var char = str.charCodeAt(i);
        bytes.push(char & 0xFF);
    }
    return(new Uint8Array(bytes));
}



export function str2Bytes(str:string, finalBytes:number):number[] {
    if(finalBytes) {
        while ((str.length / 2) < finalBytes) {
          str = "0" + str;
        }
    }

    let bytes = [];
    for (let i=str.length-1; i>=0; i = i-2) {
        let chars = i === 0 ? str[i] : str[i-1] + str[i];
        bytes.unshift(parseInt(chars, 16));
    }
    return bytes;
}
export function codes2Str(byteArray:number[]):string {
    return String.fromCharCode.apply(null, byteArray);
}


export function pack(format:string, data:number):Uint8Array {
  if(format === '>H') {
    return(new Uint8Array(str2Bytes(data.toString(16), 2)));
  } else if(format === '>I') {
    return(new Uint8Array(str2Bytes(data.toString(16), 4)));
  } else if(format === 'B') {
    return(new Uint8Array(str2Bytes(data.toString(16), 1)));
  } else {
    console.log("Error in 'pack' function: format does not exists");
  }
  return new Uint8Array(0);
}



export class MidiTrack {
  private MetaEventMode:boolean;
  private DeltaTimeSet:boolean;
  private TrackArray:Uint8Array;

  constructor() {
    this.TrackArray = new Uint8Array(0);
    this.MetaEventMode = true;
    this.DeltaTimeSet = false;
  }

  GenerateArrayOfBytes():Uint8Array {
    if(this.DeltaTimeSet == false) {
      // Header 'MTrk'
      let ArrayOfBytes:Uint8Array = unpack("MTrk");
      ArrayOfBytes = appendBuffer(ArrayOfBytes, pack('>I',this.GetTrackSize()));
      ArrayOfBytes = appendBuffer(ArrayOfBytes, this.TrackArray);
      return ArrayOfBytes;
    } else {
      console.log("Uncompleted track: a delta time has been defined with no event following");
      return;
    }
  }

  GetTrackSize() {
    return this.TrackArray.length;
  }

  AddNote(DeltaTime, Duration, Key, Volume, Channel:number=0) {
    this.AddDeltaTime(DeltaTime);
    this.AddMidiEvent("Note On",[Key,Volume],Channel);
    this.AddDeltaTime(Duration);
    this.AddMidiEvent("Note Off",[Key,64],Channel);
  }

  AddDeltaTime(TicksNumber) {
    if(this.DeltaTimeSet==false) {
      this.TrackArray = appendBuffer(this.TrackArray, ToVLQBytes(TicksNumber));
      this.DeltaTimeSet = true;
    } else {
      console.log("A delta time has already been defined, an event is now expected");
    }
  }

  AddMidiEvent(Message:string, Data?:number[], Channel:number=0) {
    let MessageWritten:boolean = true;
    if(this.DeltaTimeSet == false) {
      MessageWritten = false;
      console.log("You first need to defined a delta time before creating an event");
    } else if(Message === "Note Off") {
      this.TrackArray = appendBuffer(this.TrackArray, pack('B', 128 + Channel));
      this.TrackArray = appendBuffer(this.TrackArray, pack('B', Data[0]));
      this.TrackArray = appendBuffer(this.TrackArray, pack('B', Data[1]));
    } else if(Message === "Note On") {
      this.TrackArray = appendBuffer(this.TrackArray, pack('B', 144 + Channel));
      this.TrackArray = appendBuffer(this.TrackArray, pack('B', Data[0]));
      this.TrackArray = appendBuffer(this.TrackArray, pack('B', Data[1]));
    } else if(Message === "Polyphonic Key Pressure") {
      this.TrackArray = appendBuffer(this.TrackArray, pack('B', 160 + Channel));
      this.TrackArray = appendBuffer(this.TrackArray, pack('B', Data[0]));
      this.TrackArray = appendBuffer(this.TrackArray, pack('B', Data[1]));
    } else if(Message === "Controller Change") {
      this.TrackArray = appendBuffer(this.TrackArray, pack('B', 176 + Channel));
      this.TrackArray = appendBuffer(this.TrackArray, pack('B', Data[0]));
      this.TrackArray = appendBuffer(this.TrackArray, pack('B', Data[1]));
    } else if(Message === "Program Change") {
      this.TrackArray = appendBuffer(this.TrackArray, pack('B', 192 + Channel));
      this.TrackArray = appendBuffer(this.TrackArray, pack('B', Data[0]));
    } else if(Message === "Channel Key Pressure") {
      this.TrackArray = appendBuffer(this.TrackArray, pack('B', 208 + Channel));
      this.TrackArray = appendBuffer(this.TrackArray, pack('B', Data[0]));
    } else if(Message === "Pitch Bend") {
      this.TrackArray = appendBuffer(this.TrackArray, pack('B', 224 + Channel));
      this.TrackArray = appendBuffer(this.TrackArray, pack('B', Data[0]));
      this.TrackArray = appendBuffer(this.TrackArray, pack('B', Data[1]));
    } else if(Message === "All Sound Off") {
      this.TrackArray = appendBuffer(this.TrackArray, pack('B', 176 + Channel));
      this.TrackArray = appendBuffer(this.TrackArray, pack('B', 120));
    } else if(Message === "Reset All Controllers") {
      this.TrackArray = appendBuffer(this.TrackArray, pack('B', 176 + Channel));
      this.TrackArray = appendBuffer(this.TrackArray, pack('B', 121));
    } else if(Message === "Local Control") {
      this.TrackArray = appendBuffer(this.TrackArray, pack('B', 176 + Channel));
      this.TrackArray = appendBuffer(this.TrackArray, pack('B', 122));
      this.TrackArray = appendBuffer(this.TrackArray, pack('B', Data[0]));
    } else if(Message === "All Notes Off") {
      this.TrackArray = appendBuffer(this.TrackArray, pack('B', 176 + Channel));
      this.TrackArray = appendBuffer(this.TrackArray, pack('B', 123));
    } else if(Message === "Omni Mode Off") {
      this.TrackArray = appendBuffer(this.TrackArray, pack('B', 176 + Channel));
      this.TrackArray = appendBuffer(this.TrackArray, pack('B', 124));
    } else if(Message === "Omni Mode On") {
      this.TrackArray = appendBuffer(this.TrackArray, pack('B', 176 + Channel));
      this.TrackArray = appendBuffer(this.TrackArray, pack('B', 125));
    } else if(Message === "Mono Mode On") {
      this.TrackArray = appendBuffer(this.TrackArray, pack('B', 176 + Channel));
      this.TrackArray = appendBuffer(this.TrackArray, pack('B', 126));
      this.TrackArray = appendBuffer(this.TrackArray, pack('B', Data[0]));
    } else if(Message === "Poly Mode On") {
      this.TrackArray = appendBuffer(this.TrackArray, pack('B', 176 + Channel));
      this.TrackArray = appendBuffer(this.TrackArray, pack('B', 127));
    } else {
      MessageWritten = false;
      console.log('Wrong value of input "Message"');
    }
    
    if(MessageWritten) {
      this.DeltaTimeSet = false;
    }
  }

  AddMetaEvent(EventName:string|number, Data?:any) {
    let MessageWritten:boolean = true;
    if(this.DeltaTimeSet == false) {
      MessageWritten = false;
      console.log("You first need to defined a delta time before creating an event");
    } else if(this.MetaEventMode == false) {
      MessageWritten = false;
      console.log("You no longer can defined a meta event, a midi event has already been written");
    // Sequence Number
    } else if(EventName === "Sequence Number" || EventName === 0) {
      this.TrackArray = appendBuffer(this.TrackArray, pack('B', 255));
      this.TrackArray = appendBuffer(this.TrackArray, pack('B', 0));
      this.TrackArray = appendBuffer(this.TrackArray, pack('B', 2));
      this.TrackArray = appendBuffer(this.TrackArray, pack('>H', Data));
    // Text Event
    } else if(EventName === "Text Event" || EventName === 1) {
      this.TrackArray = appendBuffer(this.TrackArray, pack('B', 255));
      this.TrackArray = appendBuffer(this.TrackArray, pack('B', 1));
      this.TrackArray = appendBuffer(this.TrackArray, ToVLQBytes(Data.length));
      this.TrackArray = appendBuffer(this.TrackArray, unpack(Data));
    // Copyright Notice
    } else if(EventName === "Copyright Notice" || EventName === 2) {
      this.TrackArray = appendBuffer(this.TrackArray, pack('B', 255));
      this.TrackArray = appendBuffer(this.TrackArray, pack('B', 2));
      this.TrackArray = appendBuffer(this.TrackArray, ToVLQBytes(Data.length));
      this.TrackArray = appendBuffer(this.TrackArray, unpack(Data));
    // Sequence/Track Name
    } else if(EventName === "Sequence/Track Name" || EventName === 3) {
      this.TrackArray = appendBuffer(this.TrackArray, pack('B', 255));
      this.TrackArray = appendBuffer(this.TrackArray, pack('B', 3));
      this.TrackArray = appendBuffer(this.TrackArray, ToVLQBytes(Data.length));
      this.TrackArray = appendBuffer(this.TrackArray, unpack(Data));
    // Instrument Name
    } else if(EventName === "Instrument Name" || EventName === 4) {
      this.TrackArray = appendBuffer(this.TrackArray, pack('B', 255));
      this.TrackArray = appendBuffer(this.TrackArray, pack('B', 4));
      this.TrackArray = appendBuffer(this.TrackArray, ToVLQBytes(Data.length));
      this.TrackArray = appendBuffer(this.TrackArray, unpack(Data));
    // Lyric
    } else if(EventName === "Lyric" || EventName === 5) {
      this.TrackArray = appendBuffer(this.TrackArray, pack('B', 255));
      this.TrackArray = appendBuffer(this.TrackArray, pack('B', 5));
      this.TrackArray = appendBuffer(this.TrackArray, ToVLQBytes(Data.length));
      this.TrackArray = appendBuffer(this.TrackArray, unpack(Data));
    // Marker
    } else if(EventName === "Marker" || EventName === 6) {
      this.TrackArray = appendBuffer(this.TrackArray, pack('B', 255));
      this.TrackArray = appendBuffer(this.TrackArray, pack('B', 6));
      this.TrackArray = appendBuffer(this.TrackArray, ToVLQBytes(Data.length));
      this.TrackArray = appendBuffer(this.TrackArray, unpack(Data));
    // Cue Point
    } else if(EventName === "Cue Point" || EventName === 7) {
      this.TrackArray = appendBuffer(this.TrackArray, pack('B', 255));
      this.TrackArray = appendBuffer(this.TrackArray, pack('B', 7));
      this.TrackArray = appendBuffer(this.TrackArray, ToVLQBytes(Data.length));
      this.TrackArray = appendBuffer(this.TrackArray, unpack(Data));
    // MIDI Channel Prefix
    } else if(EventName === "MIDI Channel Prefix" || EventName === 32) {
      this.TrackArray = appendBuffer(this.TrackArray, pack('B', 255));
      this.TrackArray = appendBuffer(this.TrackArray, pack('B', 32));
      this.TrackArray = appendBuffer(this.TrackArray, pack('B', 1));
      this.TrackArray = appendBuffer(this.TrackArray, pack('B', Data));
    // End of Track
    } else if(EventName === "End of Track" || EventName === 47) {
      this.TrackArray = appendBuffer(this.TrackArray, pack('B', 255));
      this.TrackArray = appendBuffer(this.TrackArray, pack('B', 47));
      this.TrackArray = appendBuffer(this.TrackArray, pack('B', 0));
    // Set Tempo
    } else if(EventName === "Set Tempo" || EventName === 81) {
      this.TrackArray = appendBuffer(this.TrackArray, pack('B', 255));
      this.TrackArray = appendBuffer(this.TrackArray, pack('B', 81));
      this.TrackArray = appendBuffer(this.TrackArray, pack('B', 3));
      this.TrackArray = appendBuffer(this.TrackArray, pack('B', str2Bytes(Data.toString(16), 3)[0]));
      this.TrackArray = appendBuffer(this.TrackArray, pack('B', str2Bytes(Data.toString(16), 3)[1]));
      this.TrackArray = appendBuffer(this.TrackArray, pack('B', str2Bytes(Data.toString(16), 3)[2]));
    // SMTPE Offset
    } else if(EventName === "SMTPE Offset" || EventName === 84) {
      this.TrackArray = appendBuffer(this.TrackArray, pack('B', 255));
      this.TrackArray = appendBuffer(this.TrackArray, pack('B', 84));
      this.TrackArray = appendBuffer(this.TrackArray, pack('B', 5));
      this.TrackArray = appendBuffer(this.TrackArray, pack('B', Data[0])); //hh
      this.TrackArray = appendBuffer(this.TrackArray, pack('B', Data[1])); //mm
      this.TrackArray = appendBuffer(this.TrackArray, pack('B', Data[2])); //ss
      this.TrackArray = appendBuffer(this.TrackArray, pack('B', Data[3])); //fr
      this.TrackArray = appendBuffer(this.TrackArray, pack('B', Data[4])); //ff
    // Time Signature
    } else if(EventName === "Time Signature" || EventName === 88) {
      this.TrackArray = appendBuffer(this.TrackArray, pack('B', 255));
      this.TrackArray = appendBuffer(this.TrackArray, pack('B', 88));
      this.TrackArray = appendBuffer(this.TrackArray, pack('B', 4));
      this.TrackArray = appendBuffer(this.TrackArray, pack('B', Data[0])); //nn
      this.TrackArray = appendBuffer(this.TrackArray, pack('B', Data[1])); //dd
      this.TrackArray = appendBuffer(this.TrackArray, pack('B', Data[2])); //cc
      this.TrackArray = appendBuffer(this.TrackArray, pack('B', Data[3])); //bb
    // Key Signature
    } else if(EventName === "Key Signature" || EventName === 89) {
      this.TrackArray = appendBuffer(this.TrackArray, pack('B', 255));
      this.TrackArray = appendBuffer(this.TrackArray, pack('B', 89));
      this.TrackArray = appendBuffer(this.TrackArray, pack('B', 2));
      this.TrackArray = appendBuffer(this.TrackArray, pack('b', Data[0])); //sf
      this.TrackArray = appendBuffer(this.TrackArray, pack('B', Data[1])); //mi
    // Sequencer-Specific Meta-event
    } else if(EventName === "Sequencer-Specific Meta-event" || EventName === 127) {
      this.TrackArray = appendBuffer(this.TrackArray, pack('B', 255));
      this.TrackArray = appendBuffer(this.TrackArray, pack('B', 127));
      this.TrackArray = appendBuffer(this.TrackArray, ToVLQBytes(Data.length));
      this.TrackArray = appendBuffer(this.TrackArray, unpack(Data));
    } else {
      MessageWritten = false;
      console.log('Wrong value of type');
    }
    
    if(MessageWritten) {
      this.DeltaTimeSet = false;
    }
  }
}


export function ToVLQBytes(num:number):Uint8Array {
  let BinString:string = num.toString(2);
  let NbBits:number = BinString.length;

  let NbVLQBytes:number = Math.floor(NbBits / 7);
  if(NbBits % 7 > 0) {
    NbVLQBytes += 1;
  }

  let ArrayOfBytes:Uint8Array = new Uint8Array(0);
  let TempByte:string;
  for(let k=0; k<NbVLQBytes; k++) {
    if(k==0) {
      let NbBitsLastByte:number = NbBits % 7;
      if(NbBitsLastByte === 0) {
        NbBitsLastByte = 7;
      }
      
      let NbZeros = 7 - NbBitsLastByte;
      if(k === NbVLQBytes-1) {
        TempByte = '0';
        for(let kzero=0; kzero<NbZeros; kzero++) {
          TempByte += '0';
        }
        TempByte += BinString;
      } else {
        TempByte = '1';
        for(let kzero=0; kzero<NbZeros; kzero++) {
          TempByte += '0';
        }
        for(let kbyte=0; kbyte<NbBitsLastByte; kbyte++) {
          TempByte += BinString[kbyte];
        }
      }
    } else if(k==NbVLQBytes-1) {
      TempByte = '0';
      for(let kbyte=BinString.length-7; kbyte<BinString.length; kbyte++) {
        TempByte += BinString[kbyte];
      }
    } else {
      TempByte = '1';
      for(let kbyte=(BinString.length-(k+1)*7); kbyte<(BinString.length-k*7); kbyte++) {
        TempByte += BinString[kbyte];
      }
    }
    ArrayOfBytes = appendBuffer(ArrayOfBytes, pack('B',parseInt(TempByte, 2)));
  }
  return ArrayOfBytes;
}


