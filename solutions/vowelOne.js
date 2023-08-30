//p: string which can contain any type of char
//r: print out 1 for vowels, 0 for everything else in a sting
//e: "123, arou" ), "000001011"
//p: vowel variable, split string, compare if it includes the vowel if it does convert it to a 1 otherwise convert it to a zero

// function vowelOne(s) {
//   return s
//     .toLowerCase()
//     .split('')
//     .map((el) =>
//       el === 'a' || el === 'e' || el === 'i' || el === 'o' || el === 'u' ? 1 : 0
//     )
//     .join('');
// }

const vowelOne = (s) =>
  s
    .toLowerCase()
    .split('')
    .map((x) => ('aeiou'.includes(x) ? 1 : 0))
    .join('');

const result = vowelOne('123, arou');
console.log(result);
