// two parameters both strings, name and owner, ever not a str?
// return 'Hello boss' if name === owner, return 'Hello guest' otherwise

const greet = (name, owner) => (name === owner ? 'Hello boss' : 'Hello guest');

console.log(greet('jacob', 'jacob'), 'hello boss');
console.log(greet('bob', 'jacob'), 'hello guest');
