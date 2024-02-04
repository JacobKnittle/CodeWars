//p: string, nums?, special?, spaces
//r: number of consonants in string so anything thats not aeiou
//e: 'aeiou AEIOU bcdfghjklmnpqrstvwxyz BCDFGHJKLMNPQRSTVWXYZ 01234567890_ ^&$#', 42
//p: filter out if the char is consonant take the length

function consonantCount(str) {
  const consonants = 'bcdfghjklmnpqrstvwxyz';
  const arr = str
    .toLowerCase()
    .split('')
    .filter((el) => consonants.includes(el));
  return arr.length;
}

const result = consonantCount(
  'aeiou AEIOU bcdfghjklmnpqrstvwxyz BCDFGHJKLMNPQRSTVWXYZ 01234567890_ ^&$#'
);
console.log(result);
