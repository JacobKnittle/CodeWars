//p: valid string with spaces and multiple words, nums, special chars?
//r: return the words in order based on the last letter in the string
//e: 'take me to semynak'), ['take', 'me', 'semynak', 'to']
//p: split of words into array, loop through array and based on the last character in each string sort the words

// function last(x) {
//   return x.split(' ').sort((a, b) => {
//     if (a[a.length - 1] < b[b.length - 1]) {
//       return -1;
//     }
//     if (b[a.length - 1] > a[a.length - 1]) {
//       return 1;
//     } else {
//       return 0;
//     }
//   });
// }

const last = (x) =>
  x.split(' ').sort((a, b) => (a.slice(-1) > b.slice(-1) ? 1 : -1));
const result = last('take me to semynak');
console.log(result);
