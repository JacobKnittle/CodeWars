// input is an arr and a int assuming it will always be one
// output how many elements in that way based on the int

const take = (arr, n) => arr.splice(0, n);

console.log(take([1, 2, 3, 4], 2));
