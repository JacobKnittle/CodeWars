// normal price of bottle, discount in percentage, cost of holiday, will all be ints
// return how many bottles need to be purchased to save enough money with the discount to get the cost of the holiday and round down

function holidayDutyFree(bottle, discount, holiday) {
	return Math.floor((holiday / bottle / discount) * 100);
}

console.log(holidayDutyFree(200, 10, 200), 10);
console.log(holidayDutyFree(12, 50, 1000), 166);
