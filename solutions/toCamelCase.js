// string given, can have _ or -, special char num?, empty,
// return a camelcased string, if the first word is capitalized already leave it

function toCamelCase(str) {
  let arr = str.split('');
  for (i = 0; i < arr.length; i++) {
    let letter = arr[i];
    if (letter == '_' || letter == '-') {
      arr[i + 1] = arr[i + 1].toUpperCase();
      arr[i] = '';
    }
  }
  return arr.join('');
}

console.log(
  toCamelCase(''),
  '',
  'An empty string was provided but not returned'
);
console.log(toCamelCase('the_stealth_warrior'), 'theStealthWarrior');
console.log(toCamelCase('The-Stealth-Warrior'), 'TheStealthWarrior');
console.log(toCamelCase('A-B-C'), 'ABC');
