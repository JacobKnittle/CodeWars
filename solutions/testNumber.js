//p: array of letter string, can be empty, number of special characters?
//r: array with "n:string" format from the variable
//e: ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]
//p: map through array and return temperate literal ${index}:{element}

// function number(arr) {
//   if (arr.length < 0) return [];
//   return arr.map((el, index) => `${index + 1}: ${el}`);
// }

let number = (a) => a.map((v, i) => `${i + 1}: ${v}`);
const result = number(['a', 'b', 'c']);
console.log(result);
