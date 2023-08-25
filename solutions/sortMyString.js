//p: all input strings are valid with no space, 0 is considered even
//r: a string with even index chars in one group then a space and a odd index
//e: "CodeWars"), "CdWr oeas"
//p: split string, filter even and odds into two separate variables, join the chars together then the words separated by a space in a template literal

function sortMyString(S) {
  const even = S.split('')
    .filter((el, index) => index % 2 === 0)
    .join('');
  const odds = S.split('')
    .filter((el, index) => index % 2 !== 0)
    .join('');

  return `${even} ${odds}`;
}

const result = sortMyString('CodeWars');
console.log(result);
