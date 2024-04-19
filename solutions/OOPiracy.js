// new class instance, two parameters draft is total weight and crew is the number of crew members which each adds 1.5 to the draft
// add method isWorthIt that checks if you subtract the crew number * 1.5 by the draft and it is still above 20 return true otherwise false

class Ship {
	constructor(draft, crew) {
		this.draft = draft;
		this.crew = crew;
	}
	isWorthIt() {
		return this.draft - this.crew * 1.5 > 20 ? true : false;
	}
	//YOUR CODE HERE...
}

let emptyShip = new Ship(0, 0);
let aWorthyShip = new Ship(100, 20);
