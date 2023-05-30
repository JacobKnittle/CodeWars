// PREP
//P can it only be a string, can they be an empty array

//R: return new filtered array

//E: ["Keep", "Remove", "Keep", "Remove", "Keep", ...] ["Keep", "Keep", "Keep", ...]

//P:

//use arr parameter
//remove everyother index starting at the 2nd

function removeEveryOther(arr) {
  return arr.filter((el, index) => index % 2 === 0);
}

const result = removeEveryOther([1, 2, 3, 4]);
