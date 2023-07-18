//p: an object containing languages in strings with a score value. no duplicates, empty?
//r: return the languages that have a score of at least 60 in an array
//e: //{"Java" : 10, "Ruby" : 80, "Python" : 65}), ["Ruby", "Python"])
//{"Hindi" : 60, "Greek" : 71, "Dutch" : 93}), ["Dutch", "Greek", "Hindi"])
//{"C++" : 50, "ASM" : 10, "Haskell" : 20}), [])
//p: loop through object and return the keys whos values are at least 60 into an array

function myLanguages(results) {
  return Object.keys(results)
    .filter((r) => results[r] > 59)
    .sort((a, b) => results[b] - results[a]);
}

const result1 = myLanguages({ Java: 10, Ruby: 80, Python: 65 });
const result2 = myLanguages({ 'C++': 70, ASM: 10, Haskell: 20 });
console.log(result1);
console.log(result2);
