//p: array of three integers, floats, negative, mixed empty, string, char?
//r: index of integer that is in between the other two integer values
//e: [-5.2, -10.6, 14], 0);
//p:

const gimme = function (arr) {
  return arr.indexOf([...arr].sort((x, y) => x > y)[1]);
};

const result = gimme([-5.2, -10.6, 14]);
console.log(result);
