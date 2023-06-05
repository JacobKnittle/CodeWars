// function solution(a, b) {
//   let longerStr = '';
//   let shorterStr = '';
//   if (a.length > b.length) {
//     longerStr = a;
//     shorterStr = b;
//   } else {
//     longerStr = b;
//     shorterStr = a;
//   }
//   return `${shorterStr}${longerStr}${shorterStr}`;
// }

function solution(a, b) {
  return a.length < b.length ? a + b + a : b + a + b;
}
const result = solution('1', '22');
