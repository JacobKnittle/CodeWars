// three params all int between 0 - 100
// return the capitalized letter grade char

const getGrade = (s1, s2, s3) => {
	// return all the params added together divided by three
	const averageScore = (s1 + s2 + s3) / 3;
	// check what grade the score was and return the char
	if (averageScore >= 90) return 'A';
	if (averageScore >= 80) return 'B';
	if (averageScore >= 70) return 'C';
	if (averageScore >= 60) return 'D';
	else return 'F';
};

console.log(getGrade(95, 93, 92), 4);
