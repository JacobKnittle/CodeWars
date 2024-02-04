//prep

//parameter: takes a size number that will only be positive and only whole numbers
//return: string of binary numbers starting with 1 depending on the size variable amount

//example: size of 4 would be '1010'

//pseudo: take in the size parameter.
//2. based on the number alternate 1 and 0 based on size. 3. make sure it is a string.

function stringy(size) {
  let str = '';
  for (let i = 0; i < size; i++) {
    str += i % 2 === 0 ? '1' : '0';
  }
  return str;
}

const result = stringy(5);
console.log(result);
