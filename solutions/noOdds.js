//p: array of integers. any strings special or empty
//r: return all non-odd values in order in an array
//e: [0,1,2] => [0,2]
//p: loop through array and return numbers % 2 into a new array

const noOdds = (values) => values.filter((el) => el % 2 === 0);

const result = noOdds([0, 1, 2]);
console.log(result);
