// input is a int
//return a 5 digit padded number saying "Value is 00005" for example

function solution(num) {
	return `Value is ${num.toString().padStart(5, '0')}`;
}

console.log(solution(5), 'Value is 00005');
console.log(solution(120), 'Value is 00120');
