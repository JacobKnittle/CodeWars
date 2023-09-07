//p: string of numbers and words being either plus or minus
//r: a total number in a string based on the string numbers and words
//e: ('1plus2plus3minus4'), '2'
//p: split at the numbers, convert the string to + or -, put together into a equation, return the total num as a string

function calculate(str) {
  return eval(str.replaceAll('plus', '+').replaceAll('minus', '-')).toString();
}

const result = calculate('1plus2plus3minus4');
console.log(result);
