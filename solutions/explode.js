//p: a string made of digits 0-9
//r: string where the original number is displayed that many times in a string
//e: "312" => "333122"
//p: split the string, make a new array iterating based on the numbers, join it back together as a string

function explode(s) {
  return s
    .split('')
    .map((digit) => digit.repeat(Number(digit)))
    .join('');
}

const result = explode('312');
console.log(result);
