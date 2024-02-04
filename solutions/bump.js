//p: string containing n and _
//r: if 15 or less n in string return Woohoo! more return Car Dead
//e: ("__nn_nnnn__n_n___n____nn__nnn"), "Woohoo!"), ("_nnnnnnn_n__n______nn__nn_nnn"), "Car Dead")
//p: create count variable, split the string, loop through it, every n string subtract 1, return 'Woohoo' if 0 or higher, return "Car Dead if less than 0"

function bump(x) {
  let count = 16;
  x.split('').map((el) => (el === 'n' ? count-- : el));

  if (count >= 1) {
    return 'Woohoo!';
  } else {
    return 'Car Dead';
  }
}

const result1 = bump('__nn_nnnn__n_n___n____nn__nnn');
const result2 = bump('_nnnnnnn_n__n______nn__nn_nnn');
console.log(result1);
console.log(result2);
