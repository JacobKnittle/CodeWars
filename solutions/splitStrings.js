// given a string, can be empty, special char or num?
//if even number return string split into an array of paired strings,
//if odd then the last pair ends with a _

function solution(str) {
  if (str === '') return [];
  if (str.length % 2 === 0) {
    return str.match(/.{2}/g);
  } else {
    return str
      .match(/.{2}/g)
      .map((pair) => (pair.length < 2 ? pair + '_' : pair));
  }
}

console.log(solution('abcdef'), ['ab', 'cd', 'ef']);
console.log(solution('abcdefg'), ['ab', 'cd', 'ef', 'g_']);
console.log(solution(''), []);
