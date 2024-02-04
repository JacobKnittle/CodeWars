//p: string that can contain spaces, num?, char?
//r: return a string with a space between each char
//e: ('hello world'),'h e l l o   w o r l d')
//p: split the string add a space

const spacify = (str) => str.split('').join(' ');

const result = spacify('hello world');
console.log(result);
