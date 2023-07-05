//p: array of strings of all different length, empty string, numbers, or special characters?
//r: return the array of strings from shortest to longest length
//e: ["Beg", "Life", "I", "To"]),["I", "To", "Beg", "Life"]
//p: loop through array, find the length of each string, sort from shortest to longest

// function sortByLength(arr) {
//   return arr.sort((a, b) => a.length - b.length);
// }

const sortByLength = (arr) => arr.sort((a, b) => a.length - b.length);
const result = sortByLength(['Beg', 'Life', 'I', 'To']);
console.log(result);
