// string of one or more words, only will be letters and spaces
// return the string with the words reversed that are 5 or more in length

function spinWords(str) {
  // split the words,
  // loop through arr check length,
  // if length is 5 or more reverse it,
  // join it and return it
  return str
    .split(' ')
    .map((word) =>
      word.length >= 5 ? word.split('').reverse().join('') : word
    )
    .join(' ');
}

console.log(
  spinWords('Just kidding there is still one more'),
  'Just gniddik ereht is llits one more'
);
