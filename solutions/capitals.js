//p: string with upper and lowercase letters, num? char?, empty?
//r: array of indexs of capitalized letters
//e: "CodEWaRs" --> [0,3,4,6]
//p:  split string into array, map

const capitals = (word) => {
  const result = [];
  word.split('').forEach((el, index) => {
    if (el === el.toUpperCase()) {
      result.push(index);
    }
  });
  return result;
};

const result = capitals('CodEWaRs');
console.log(result);
