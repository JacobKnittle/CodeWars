// string of G,C,A, or, T
// convert the T to U

function DNAtoRNA(dna) {
	return dna.replaceAll('T', 'U');
}

console.log(DNAtoRNA('TTTT'), 'UUUU');
console.log(DNAtoRNA('GCAT'), 'GCAU');
console.log(DNAtoRNA('GACCGCCGCC'), 'GACCGCCGCC');
