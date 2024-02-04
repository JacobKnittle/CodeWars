//p: string, which can be empty, upper or lowercase
//r: whether it is a isogram conditional, so is there any repeated letters then return false
//e: isogram = true, need = false
//p: lowercase string, split into array of strings, check if there is a letter that occurs more than once.
// function isIsogram(str) {
//   const arr = str.toLowerCase('').split('');

//   return new Set(arr).size === arr.length;
// }

const isIsogram = (str) => new Set(str.toLowerCase()).size == str.length;

const result1 = isIsogram('isOgram');
const result2 = isIsogram('');
const result3 = isIsogram('need');
console.log(result1);
console.log(result2);
console.log(result3);
