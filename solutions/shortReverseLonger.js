//p: two strings that may be empty
//r: return which ever string is shorter first and also last with the longer string reversed in the middle
//e: ("first", "abcde"), "abcdetsrifabcde"
//p: compare strings put the shorter one in a shorter variable and longer in longer variable. reverse the longer. template literal short + reversed longer + short in one combined string with no spaces

function shorter_reverse_longer(a, b) {
  let short;
  let longer;
  if (a.length > b.length) {
    short = b;
    longer = a;
  } else if (a.length < b.length) {
    short = a;
    longer = b;
  } else {
    short = b;
    longer = a;
  }
  return `${short}${longer.split('').reverse().join('')}${short}`;
}

const result = shorter_reverse_longer('first', 'abcde');
console.log(result);
