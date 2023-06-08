//prep
//parameters:a integer and limit integer. only positive integers not including 0, limit will be higher than base.
//return: an array of numbers that the integer can divide into up to the limit
//example:(5, 25), [5, 10, 15, 20, 25])
//pseudo: 1. for loop 2. return the results

function findMultiples(integer, limit) {
  const arr = [];
  for (let i = integer; i <= limit; i += integer) {
    arr.push(i);
  }
  return arr;
}
const result = findMultiples(5, 25);
