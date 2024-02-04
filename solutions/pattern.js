//p: given a number to put into the function to run the pattern
//r: the number and that number is repeated that many times
//e: (5),"1\n22\n333\n4444\n55555"
//p: make a for loop that returns the number with the amount of numbers including a \n at the end of each iteration. return as a string

function pattern(n) {
  let str = '';
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      str += `${i}`;
    }
    if (i !== n) {
      str += '\n';
    }
  }
  return str;
}

const result = pattern(5);
console.log(result);
