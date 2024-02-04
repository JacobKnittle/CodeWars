//p: array of numbers, char?, string?, empty?
//r: the first number in an array with the most digits
//e: ([9000, 8, 800, 8000]), 9000)
//p:

function findLongest(array) {
  return array.reduce((acc, curr) =>
    String(acc).length < String(curr).length ? curr : acc
  );
}
const result = findLongest([9000, 8, 800, 8000]);
console.log(result);
