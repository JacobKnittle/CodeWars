//p: string of a name can be less then 4 chars long. num?, char?, First char capitalized the rest lower
//r: if string is less than 4 char return "Error: Name too short". else return the first four chars if the 3th is a "aeiou" if it is not a vowel return the first three char
//e: ("Jimmy"), "Jim", ("Sam"), "Error: Name too short"), ("Jeannie") //=> "Jean"
//p: check if is less than 4 chars and return error message if it is. check if the third char is equal to any of the vowels. if it is slice and return the first four, otherwise slice and return three

function nicknameGenerator(name) {
  const vowels = 'aeiou';
  if (name.length < 4) {
    return 'Error: Name too short';
  } else if (vowels.includes(name[2])) {
    return name.slice(0, 4);
  } else {
    return name.slice(0, 3);
  }
}

const result = nicknameGenerator('Jimmy');
const result2 = nicknameGenerator('Sam');
const result3 = nicknameGenerator('Jeannie');
console.log(result, result2, result3);
