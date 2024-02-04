//p: two strings of numbers one being the list of pars, and the other being the actual scores, both strings will be 18 char, each number will be between 1-9
//r: return the golf score of the game
//e: ('443454444344544443', '353445334534445344'), -1)
//p: convert the strings to numbers, split them into arrays, compare the two arrays and subtract the differences from scorelist and the parlist

function golfScoreCalculator(parList, scoreList) {
  parList.split('');
  scoreList.split('');
  const score = [];
  for (i = 0; i < parList.length; i++) {
    score.push(scoreList[i] - parList[i]);
  }
  return score.reduce((a, b) => a + b, 0);
}
const result = golfScoreCalculator('443454444344544443', '353445334534445344');
console.log(result);
