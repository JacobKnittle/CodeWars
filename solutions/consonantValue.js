// lowercase string, letters only, no spaces,
// return the highest value of a collection of consonants between vowels

function solve(str) {
  const values = str
    .split(/[aeiou]/)
    .filter((el) => el !== '')
    .map((x) => [...x])
    .reduce((prev, val) => prev + val.charCodeAt() - 96, 0);

  return Math.max(...values);
}

console.log(solve('twelfthstreet'), 103);
