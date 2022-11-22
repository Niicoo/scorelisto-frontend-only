

export function ConvertToneToFreq(Tone:number, f0:number){
  return(f0*Math.pow(2.0, Tone/12.0));
}

export function ConvertFreqToTone(Freq:number, f0:number){
  return(Math.log10(Freq/f0)*12.0/Math.log10(2.0));
}


export function autocovariance(Xi:number[]){
  let N = Xi.length;
  let Xs:number = 0;
  for(let k=0; k<N; k++) {
    Xs = Xs + Xi[k];
  }
  Xs = Xs/N;
  let autoCov:number = 0;
  for(let k=0; k<N; k++) {
    autoCov = autoCov + Math.pow((Xi[k]-Xs), 2);
  }
  return (1/(N-1))*autoCov;
}




export function gaussian(N:number, std:number, densityfunction?:false) {
  if(N%2 == 0){
    console.log("Error: input 'N' must be an even number");
    return;
  }
  let moy = (N-1)/2;
  let coef:number = 1.0;
  if(densityfunction) {
    let coef:number = 1.0/(std*Math.sqrt(2.0*Math.PI));
  }
  let result:number[] = [];
  let tempvalue:number;
  for(let k=0; k<N; k++) {
    tempvalue = coef*Math.exp(-0.5*Math.pow((k-moy)/std, 2));
    result.push(tempvalue);
  }
  return result;
}



export function histogram(data:number[], bins:number, range_min:number, range_max:number){
  let x:number[] = [];
  let stepbins:number = (range_max-range_min)/bins;
  for(let k=0; k<bins+1; k++) {
    x.push(range_min + stepbins*k);
  }

  let histo:number[] = new Array(bins).fill(0);
  let xmin:number;
  let xmax:number;
  for(let k=0; k<bins; k++) {
    xmin = x[k];
    xmax = x[k+1];
    for(let p=0; p<data.length; p++) {
      if((data[p] >= xmin) && (data[p] < xmax)) {
        histo[k] = histo[k]+1;
      }
    }
  }
  return [histo, x];
}

export function convolve(A:number[], B:number[]){
  // same size as 'A' array
  let size_A:number = A.length;
  let size_B:number = B.length;
  // output same size as A
  let mid:number;
  if(size_A == size_B){
    if(size_A%2 == 0){
      mid = size_A/2 -1;
    } else {
      mid = (size_A-1)/2;
    }
  } else {
    if(size_B%2 == 0){
      mid = size_B/2 -1;
    } else{
      mid = (size_B-1)/2;
    }
  }
  let result:number[] = [];
  let tempvalue:number;
  let m_min:number;
  let m_max:number;
  for(let n=mid; n < mid+size_A; n++) {
    tempvalue = 0;
    m_min = Math.max(0, n-size_B+1);
    m_max = Math.min(size_A-1, n);
    for(let m=m_min; m < m_max+1; m++) {
      tempvalue = tempvalue + A[m]*B[n-m];
    }
    result.push(tempvalue);
  }
  return result;
}


export function mode(array:number[]) {
    if(array.length == 0)
        return null;
    let modeMap = {};
    let maxEl:number = array[0];
    let maxCount:number = 1;
    for(let i = 0; i < array.length; i++) {
      let el:number = array[i];
      if(modeMap[el] == null) {
        modeMap[el] = 1;
      } else {
        modeMap[el]++;
      }
      if(modeMap[el] > maxCount) {
        maxEl = el;
        maxCount = modeMap[el];
      }
    }
    return maxEl;
}



export function MaxOfArray(array:number[]) {
  let valmax:number = -Number.MAX_VALUE;
  let ind_max:number = 0;
  for(let k=0; k<array.length; k++) {
    if(array[k] > valmax){
      valmax = array[k];
      ind_max = k;
    }
  }
  return {argmax:ind_max, value:valmax};
}

export function MinOfArray(array:number[]) {
  let valmin:number = Number.MAX_VALUE;
  let ind_min:number = 0;
  for(let k=0; k<array.length; k++) {
    if(array[k] < valmin){
      valmin = array[k];
      ind_min = k;
    }
  }
  return {argmin:ind_min, value:valmin};
}




// RHYTHM DETECTOR
export function ConvertSemitoneToNoteAndOctave(semitone:number) {
  let Height = semitone%12;
  let Octave = Math.floor(semitone/12.0);
  return {height: Height, octave:Octave};
}
export function ConvertNoteAndOctaveToSemitone(height:number, octave:number) {
  let semitone = octave*12.0 + height;
  return semitone;
}