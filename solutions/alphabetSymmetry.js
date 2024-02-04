// given an array of strings can be capitalized but doesnt matter, no spaces, no special characters
// return a number from each string which the number reprensents how many letters are in their correct position the alphabet

function solve(arr) {
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';

    return arr.map(x=>x.toLowerCase().split("").filter((y,i) => i==alphabetString.indexOf(y)).length)
}


console.log(solve(["abode","ABc","xyzD"]),[4,3,1]);
console.log(solve(["abide","ABc","xyz"]),[4,3,0]);
console.log(solve(["IAMDEFANDJKL","thedefgh","xyzDEFghijabc"]),[6, 5, 7]);
console.log(solve(["encode","abc","xyzD","ABmD"]),[1, 3, 1, 3]);