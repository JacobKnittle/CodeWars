//p: string that will contain a 9
//r: return the string without 9s if they are between two 7s
//e: "79712312" --> "7712312
//p:

function sevenAte9(str) {
  while (str.includes('797')) {
    str = str.replace('797', '77');
  }
  return str;
}

const result = sevenAte9('79712312');
console.log(result);
