//p: a test word as a string to see if it is an anagram of the original
//r: true or false if it is a anagram
//e: "foefet", "toffee"
//p:

const isAnagram = (test, original) => {
  const original2 = original
    .toLowerCase()
    .split('')
    .sort()
    .join('')
    .toLowerCase();
  const test2 = test.toLowerCase().split('').sort().join('');
  return original2 === test2 ? true : false;
};

const result = isAnagram('Buckethead', 'DeathCubeK');
console.log(result);
