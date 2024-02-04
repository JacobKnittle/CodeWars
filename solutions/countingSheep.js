//prep
//p: array, empty?,undefined and null
//r: return the number of true values in the array
//e:[true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true] => 17
//p: 1. loop through array and filter out all truthy values 2. get the length of the new array and return it

// function countSheeps(arrayOfSheep) {
//   return arrayOfSheep.filter((el) => el === true).length;
// }

const countSheeps = (arrayOfSheep) =>
  arrayOfSheep.filter((el) => el === true).length;

const result = countSheeps([
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
]);
console.log(result);
