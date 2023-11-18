// string of words with a number inside of them, numbers 1-9, empty string (y), funny business (n)
//return the string with the words in order based on the numbers

function order(words) {
  var array = words.split(' ');
  var sortedArray = [];
  //loops through each index in the array
  for (i = 0; i < array.length; i++) {
    //loops through each character in the word
    for (j = 0; j < array.length; j++) {
      if (array[j].includes(i)) {
        sortedArray.push(array[j]);
      }
    }
  }

  return sortedArray.join(' ');
}

console.log(order('is2 Thi1s T4est 3a'), 'Thi1s is2 3a T4est');
console.log(
  order('4of Fo1r pe6ople g3ood th5e the2'),
  'Fo1r the2 g3ood 4of th5e pe6ople'
);
console.log(order(''), '');
