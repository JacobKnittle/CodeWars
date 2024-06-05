// para is how many days as an int
// return the total cost based on the days and deals

function rentalCarCost(d) {
	let total = 0;
	// every day costs 40$ d x 40
	total += d * 40;
	// 7 or more days is $50 off the total
	if (d >= 7) return total - 50;
	// 3 or more days is $20 off the total but not both
	if (d >= 3) return total - 20;
	return total;
}

console.log(rentalCarCost(2), 80);
console.log(rentalCarCost(3), 100);
console.log(rentalCarCost(7), 230);
