// given a string that may be empty, not camel cased or camel cased. special char or num? spacing?
// return the string with a space if there is a captalized letter.

function solution(str) {
  let notCamelCased = '';
  for (const char of str) {
    char.toUpperCase() === char
      ? (notCamelCased += ' ' + char)
      : (notCamelCased += char);
  }
  return notCamelCased;
}

console.log(solution('camelCasing'), 'camel Casing');
console.log(solution('camelCasingTest'), 'camel Casing Test');
