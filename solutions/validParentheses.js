//p: contains a string between 0-100 chars long with parathesis that can be not correctly formatted
//r: true or false if the parathesis order in the string is correct or empty
//e: true, "()(())((()))(())()"), false, "())(()")
//p: split the string, check if there are any )( patterns within it or odd amount

function validParentheses(str) {
  if (str === '') return true;

  const stack = [];
  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i);
    if (char === '(') {
      stack.push(char);
    } else if (char === ')') {
      if (stack.length === 0) return false; // Unmatched closing parenthesis
      stack.pop(); // Matched closing parenthesis
    }
  }

  return stack.length === 0; // If the stack is empty, all parentheses are matched.
}

const result = validParentheses('()(())((()))(())()');
const result2 = validParentheses('())(()');
console.log(result); // true
console.log(result2); // false
