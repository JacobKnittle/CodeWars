Jdknittle;
function positiveSum(arr) {
  if (arr.length === 0) return 0;
  const filtered = arr.filter((num) => num > 0);

  return filtered.reduce((a, b) => a + b, 0);
}
//
