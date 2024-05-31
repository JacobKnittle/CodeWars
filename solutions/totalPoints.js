// array of strings in "int1:int2" format, int1 is team score, int2 is opp score
// return how many points the team scored

function points(scores) {
	let teamScore = 0;
	for (let i = 0; i < scores.length; i++) {
		if (scores[i][0] > scores[i][2]) {
			teamScore += 3;
		} else if (scores[i][0] === scores[i][2]) {
			teamScore += 1;
		}
	}
	return teamScore;
}

console.log(points(['1:0', '0:0', '0:1']), 4);
