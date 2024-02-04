//prep

//parameter: string, number?, special character? empty?

//return: an array of strings

//example: "Robin Singh" ==> ["Robin", "Singh"]

//pseudo: 1. take in a string and split it. return array of strings

// function stringToArray(string) {
//   return string.split(' ');
// }

const stringToArray = (string) => string.split(' ');
const result = stringToArray('Robin Singh');
