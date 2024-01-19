const countSheep = function (num) {
	let repeatedSheep = [];
	if (num === 0) return '';
	if (num === 1) return '1 sheep...';
	if (num > 1) {
		for (let i = 1; i <= num; i++) {
			repeatedSheep.push(`${i} sheep...`);
		}
	}
	return repeatedSheep.join('');
};

console.log(countSheep(0), '');
console.log(countSheep(1), '1 sheep...');
console.log(countSheep(2), '1 sheep...2 sheep...');
console.log(countSheep(3), '1 sheep...2 sheep...3 sheep...');
