//p: given a word in a string, numbers? special characters? spaces?
//r: the middle letter in an odd numbers string or the two middle letters in an even string as a string
//e: "test" => "es"
//p:

function getMiddle(s) {
  return s.slice((s.length - 1) / 2, s.length / 2 + 1);
}

const result = getMiddle('test');
console.log(result);
