// arrays of positive and negative numbers, special char, empty, string, no funny business
// the number of pairs of numbers next to each other by one

function pairs(array, count = 0) {
  for (let i = 0; i < array.length; i += 2)
    if (Math.abs(array[i] - array[i + 1]) === 1) count += 1;
  return count;
}

console.log(pairs([1, 2, 5, 8, -4, -3, 7, 6, 5]));
