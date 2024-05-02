// constructor for class cuboid receives three arguments length,width,height
// getter surfaceArea returns surface area of cuboid and volume getter return volume

// subclass cube receives the length using a super and uses that to set the length width and height

class Cuboid {
	constructor(length, width, height) {
		this.length = length;
		this.width = width;
		this.height = height;
	}
	get surfaceArea() {
		return (
			2 *
			(this.length * this.width +
				this.width * this.height +
				this.height * this.length)
		);
	}
	get volume() {
		return this.length * this.width * this.height;
	}
	// static cube(length) {
	// 	return new Cuboid(length, length, length);
	// }
}

// console.log(Cuboid.cube(3));
// Cuboid {length: 3, width3, height: 3}

class Cube extends Cuboid {
	constructor(length) {
		super(length, length, length);
	}
}

let cuboid = new Cuboid(1, 2, 3);
// let cube = new Cube(3);
