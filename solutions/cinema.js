//option one $15 each time
// option 2 card cost ex: 500$ + ticket cost ex: $15 * fraction to pay(ex:.90) and then an additional * ex:.90 each purchase
// how many visits using option 2 to make it worth it rounded up to the next dollar

function movie(card, ticket, perc) {
	// ceil(price of System B) < price of System A.
	let individualTicketsTotal = ticket;
	let cardTotal = card + ticket * perc;

	let numofPurchases = 1;

	for (
		let i = 2;
		Math.ceil(cardTotal) >= Math.ceil(individualTicketsTotal);
		i++
	) {
		individualTicketsTotal += ticket;
		cardTotal += ticket * Math.pow(perc, i);

		numofPurchases++;
	}
	console.log(individualTicketsTotal); // 230
	console.log(cardTotal); // 228.5
	return numofPurchases;
}

console.log(movie(500, 15, 0.9), 43);
console.log(movie(100, 10, 0.95), 24); //23
