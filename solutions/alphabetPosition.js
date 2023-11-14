// given a string of words, lowercase only spaces, special char?, num?, no funny business
// return the alphabet position for each letter in a string with spaces

function alphabetPosition(str) {
  //generates an array of alphabet
  const alphabet = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(97 + i)
  );
  return str
    .toLowerCase()
    .split('')
    .filter((el) => el !== ' ')
    .map((el) => alphabet.indexOf(el) + 1)
    .filter((el) => el !== 0)
    .join(' ');
}

console.log(
  alphabetPosition("The sunset sets at twelve o' clock."),
  '20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11'
);
console.log(
  alphabetPosition('The narwhal bacons at midnight.'),
  '20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20'
);
