// function makeNegative(num) {
//   if(Math.sign(num) === 1){
//    return -Math.abs(num)
//   }
//   else return num
// }

const makeNegative = (num) => (Math.sign(num) === 1 ? -Math.abs(num) : num);
