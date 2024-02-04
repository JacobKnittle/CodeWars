//p: a start and stop number, start always lower than end, can be negative
//r: return the number of numbers from start to finish except numbers with a 5
//e: (1,9), 8)
//p: create an array using the range of the parameters, filter out the 5 and return the length

function dontGiveMeFive(start, end) {
  let arr = [];
  for (start; start <= end; start++) {
    arr.push(start);
  }
  const filtered = arr.filter((num) => !num.toString().includes(5));
  return filtered.length;
}

const result = dontGiveMeFive(1, 9);
console.log(result);
