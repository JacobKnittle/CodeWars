//p: string that can be empty contain letter or numbers, special characters spaces
//r: string is turned into # except for the last 4 characters
//e: ('4556364607935616'), '############5616')
//p: return the string if its 4 or less characters. if more replace all but the last 4 characters with #

function maskify(cc) {
  return cc.slice(-4).padStart(cc.length, '#');
}

const result1 = maskify('4556364607935616');
const result2 = maskify('1');
console.log(result1);
console.log(result2);
