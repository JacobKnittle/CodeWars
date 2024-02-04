//p: string of duplicated words with spaces, special num?
//r: return a string that has not duplicate words
//e: 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta' =>'alpha beta gamma delta'
//p: take string and make it into a set to remove duplicates and return the set

function removeDuplicateWords(s) {
  const arr = s.split(' ');
  const set1 = new Set(arr);
  return [...set1].join(' ');
}

const result = removeDuplicateWords(
  'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
);
console.log(result);
