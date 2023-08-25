//p: string of name. can be upper or lowercase char, number, special char
//r: string of Hello then the name with the first letter capitalized the rest lowercase and a ! at the end
//e: 'jAcob' => 'Hello Jacob!'
//p: remove the first char capitalize it and lowercase the rest. Join them back together. return a template literal with the name variable

const greet = (name) => {
  return `Hello ${name[0].toUpperCase() + name.slice(1).toLowerCase()}!`;
};

const result = greet('jAcob');
const result2 = greet('jAcob');
console.log(result);
