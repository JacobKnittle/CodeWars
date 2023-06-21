//prep
//p: taken in a string, number?, special character?,empty string?, spaces
//r: string where each character is doubled
//e: "Hello World" -> "HHeelllloo  WWoorrlldd"
//p: 1. split string 2. map through and add character to each 3. join

// function doubleChar(str) {
//   return str
//     .split('')
//     .map((el) => el + el)
//     .join('');
// }

const doubleChar = (str) =>
  str
    .split('')
    .map((el) => el + el)
    .join('');
const result = doubleChar('Hello World');
console.log(result);
