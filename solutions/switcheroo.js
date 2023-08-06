//p: string of a,b,c's, num?, special?, empty?, uppercase?
//r: change a's to b and vice versa leave c alone, return updated string
//e: ('abc'), 'bac')
//p: split string, loop through turn a to b and b to a, leave c alone

function switcheroo(x) {
  return x
    .split('')
    .map((el) => {
      if (el === 'a') return (el = 'b');
      if (el === 'b') return (el = 'a');
      else return el;
    })
    .join('');
}

const result = switcheroo('abc');
console.log(result);
