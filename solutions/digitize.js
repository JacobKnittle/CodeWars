//prep

//parameters: string?, random non-negative number, array?, empty?

//return: return number reversed in an array

//example: 35231 => [1,3,2,5,3]

//pseudo: take in a number split it into indivdual numbers separated by comma.
//2. reverse the order

function digitize(n) {
  return n.toString().split('').reverse().map(Number);
}
const result = digitize(35231);
