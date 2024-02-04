//p: array of positive integers containing at least one, will always be positive
//r: return an array of the total numbers of the evens and odds weights integers
//e: [70,58,75,34,91]), [236,92]
//p: filter out the even number indexes, filter out the odd number indexes. reduce them and then put them back together even than odd

function rowWeights(array) {
  const evens = array
    .filter((el, index) => index % 2 === 0)
    .reduce((a, b) => a + b, 0);
  const odds = array
    .filter((el, index) => index % 2 !== 0)
    .reduce((a, b) => a + b, 0);
  return [evens, odds];
}
const result = rowWeights([70, 58, 75, 34, 91]);
console.log(result);
