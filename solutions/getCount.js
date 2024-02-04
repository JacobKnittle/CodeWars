//p: string that contains lower case letters or spaces
//r: return number of vowels in string
//e: "abracadabra"), 5
//p: split string into array, loop through and look for vowels, return how many instances in string

// function getCount(str) {
//   const divided = str.split('');
//   const total = divided.filter(
//     (letter) =>
//       letter.includes('a') ||
//       letter.includes('e') ||
//       letter.includes('i') ||
//       letter.includes('o') ||
//       letter.includes('u')
//   );
//   return total.length;
// }

function getCount(str) {
  return str.split('').filter((c) => 'aeiou'.includes(c)).length;
}
const result = getCount('abracadabra');
console.log(result);
