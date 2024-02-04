// string of words, num, spec char, any empty, no funny business
// return and array of the words in alphabetical order based on the last char in the word

function last(str) {
  //split str to array, sort based on the last char in the str
  return str.split(' ').sort((a, b) => {
    if (a[a.length - 1] < b[b.length - 1]) return -1;
    if (a[a.length - 1] > b[b.length - 1]) return 1;
    return 0;
  });
}

console.log(last('man i need a taxi up to ubud'), [
  'a',
  'need',
  'ubud',
  'i',
  'taxi',
  'man',
  'to',
  'up',
]);
console.log(last('what time are we climbing up the volcano'), [
  'time',
  'are',
  'we',
  'the',
  'climbing',
  'volcano',
  'up',
  'what',
]);
console.log(last('take me to semynak'), ['take', 'me', 'semynak', 'to']);
