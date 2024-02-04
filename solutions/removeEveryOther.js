function removeEveryOther(arr) {
  return arr.filter((el, index) => index % 2 === 0);
}

const result = removeEveryOther([1, 2, 3, 4]);
