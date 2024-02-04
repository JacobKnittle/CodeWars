//p: array of numbers, and a number number. array will be all numbers
//r: return true if all numbers in array are below the limit value, else return false
//e: ([66, 101], 200), true), ([78, 117, 110, 99, 104, 117, 107, 115], 100), false)
//p: if every number in array is less than the limit return true else false

const smallEnough = (a, limit) => {
  return a.every((el) => el <= limit);
};

const test = smallEnough([66, 101], 200);
const test2 = smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100);
console.log(test);
console.log(test2);
