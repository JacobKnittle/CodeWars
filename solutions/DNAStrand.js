//p: string of letters either ATGC, cant be empty,lowercase?
//r: return the corresponding letter equivalent to DNA
//e: "ATTGC" --> "TAACG"
//p: split the string. loop through and change the char to its corresponding letter

function DNAStrand(dna) {
  return dna
    .split('')
    .map((el) => {
      if (el === 'A') return 'T';
      if (el === 'T') return 'A';
      if (el === 'G') return 'C';
      if (el === 'C') return 'G';
    })
    .join('');
}

const result = DNAStrand('ATTGC');
console.log(result);
