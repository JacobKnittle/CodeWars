//p: be given a number to determine if it a palindrome which is a number that is the same from front to back and back to front
//r: true or false depending on if its a palindrome

//e: 121 => true, 10 => false

const isPalindrome = (x) => {
  return x.toString() === x.toString().split('').reverse().join('')
    ? true
    : false;
};

console.log(isPalindrome(121));
console.log(isPalindrome(10));
