// an a array of array integer pairs,
//first num is people that get on the bus,
//second num was who got off the bus,
// first array 0 people get off the bus since it is the first stop
// return the number of people still on the bus cannot be negative

function busStop(array) {
	//reduce all the inner arrays through subtraction and then reduce all the outcomes of those arrays into the total
	let totalPassengers = 0;
	for (let i = 0; i < array.length; i++) {
		totalPassengers += array[i][0];

		totalPassengers -= array[i][1];
	}
	return totalPassengers;
}

console.log(
	busStop([
		[8, 0],
		[5, 3],
		[2, 8],
	]),
	4
);
console.log(
	busStop([
		[10, 0],
		[3, 5],
		[5, 8],
	]),
	5
);

console.log(
	busStop([
		[3, 0],
		[9, 1],
		[4, 10],
		[12, 2],
		[6, 1],
		[7, 10],
	]),
	17
);

console.log(
	busStop([
		[3, 0],
		[9, 1],
		[4, 8],
		[12, 2],
		[6, 1],
		[7, 8],
	]),
	21
);

console.log(busStop([[0, 0]]), 0);
