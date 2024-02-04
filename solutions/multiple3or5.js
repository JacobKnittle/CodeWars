// given a number, it can be negative, special char, let, no funny business
// return the sum of the numbers below the parameter number that are divisible by 3 or 5. if both then count as one

function solution(number) {
  let total = 0;

  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      total += i;
    }
  }
  return total;
}

// function solution(number){
//     var sum = 0;

//     for(var i = 1;i< number; i++){
//       if(i % 3 == 0 || i % 5 == 0){
//         sum += i
//       }
//     }
//     return sum;
//   }
console.log(solution(-1), 0);
console.log(solution(10), 23);
console.log(solution(15));
