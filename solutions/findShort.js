//string of words, will not be empty or have other data types
// return the length of the shortest word in the string

function findShort(str) {
  return str
    .split(' ')
    .map((x) => x.length)
    .sort((b, a) => b - a)[0];
}

console.log(
  findShort('bitcoin take over the world maybe who knows perhaps'),
  3
);
console.log(
  findShort(
    'turns out random test cases are easier than writing out basic ones'
  ),
  3
);
console.log(findShort("Let's travel abroad shall we"), 2);
