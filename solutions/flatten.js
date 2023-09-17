//p: one level of flatting from an array of arrays
//r: if multiple levels of arrays remove one flattening
//e: [[1,2,3],["a","b","c"],[1,2,3]])  // => [1,2,3,"a","b","c",1,2,3]
//p: if it is one array return it as is, if there is multiple levels remove one

const flatten = (arr) => {
  return arr.flat();
};

const result = flatten([
  [1, 2, 3],
  ['a', 'b', 'c'],
  [1, 2, 3],
]);
console.log(result);
