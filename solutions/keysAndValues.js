// object, not an object or empty?, special char, nums, no funny business
// two arrays within an array first being the keys and the second being a value

function keysAndValues(obj) {
  //create an array variable
  const arr = [];
  // convert the keys and values into two separate arrays and store them in arr
  arr.push(Object.keys(obj));
  arr.push(Object.values(obj));
  return arr;
}

console.log(keysAndValues({ a: 1, b: 2, c: 3 }));
