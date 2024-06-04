// two params that will be booleans
// if one of the two expressions is true than return true otherwise false

const xor = (a, b) => a != b;

console.log(xor(true, false), true);
console.log(xor(false, true), true);
console.log(xor(true, true), false);
