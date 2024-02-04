//p: string of letters ,nums?, char?, empty?, uppercase?
//r: alphabetical order string with same chars
//e: ('pqksuvy'), 'kpqsuvy')
//p: lowercase, sort by alphabetical order

function sortGiftCode(code) {
  return code.toLowerCase().split('').sort().join('');
}

const result = sortGiftCode('pqksuvy');
console.log(result);
