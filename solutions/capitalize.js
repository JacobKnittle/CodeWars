//p: string lowercase with no spaces, nums or special chara? empty?
//r: an array of the string zero index even character capitalize and one index odd number
//e: ("codewars"),['CoDeWaRs', 'cOdEwArS']);
//p: loop through the string and capitalize the even chars, push to a variable. again with the odds and then return the variable

function capitalize(s) {
  let arr = [];
  let even = s
    .split('')
    .map((char, index) => (index % 2 === 0 ? char.toUpperCase() : char))
    .join('');
  arr.push(even);

  let odd = s
    .split('')
    .map((char, index) => (index % 2 !== 0 ? char.toUpperCase() : char))
    .join('');
  arr.push(odd);
  return arr;
  //   return arr;
}

const result = capitalize('codewars');
console.log(result);
