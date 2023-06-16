function fakeBin(x) {
  return x
    .split('')
    .map((e) => (e < 5 ? 0 : 1))
    .join('');
}

const result = fakeBin('509321967506747');
console.log(result);
