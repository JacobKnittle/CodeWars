//p: 2 array of letters, 'a,b,c, or d', arrays are not empty and are the same length
//r: return of the score of the array answers depending on the matching answers, +4 for match, -1 for incorrect, +0 for blank
//e: ["b", "c", "b", "a"], ["",  "a", "a", "c"]), 0)
//["a", "a", "b", "c"], ["a", "a", "b", "d"]), 15)
//p: make a score variable, compare each index of the array if they are equal +4, if not equal -1, if one of them is not equal do 0, if score < 0 return 0

function checkExam(array1, array2) {
  let score = 0;

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] == array2[i]) {
      score += 4;
    } else if (array2[i] === '') {
      score += 0;
    } else {
      score -= 1;
    }
  }

  if (score < 0) {
    score = 0;
  }

  return score;
}

const result1 = checkExam(['b', 'c', 'b', 'a'], ['', 'a', 'a', 'c']);
const result2 = checkExam(['a', 'a', 'b', 'c'], ['a', 'a', 'b', 'd']);
console.log(result1);
console.log(result2);
