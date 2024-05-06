// class named song, new Song(title, artist)
// howMany() method -> takes in an array of people strs, output should be how many new listeners there are (case insensitive)

class Song {
	constructor(title, artist, listeners) {
		this.title = title;
		this.artist = artist;
		//creating a set to prevent duplicates
		this.listeners = new Set();
	}
	// use one parameter for array
	howMany(people) {
		//keeping track of the old size
		let oldSize = this.listeners.size;
		// map through the array and add each listener lowerCased to the array and return the listener size - the old size
		people.map((p) => this.listeners.add(p.toLowerCase()));
		return this.listeners.size - oldSize;
	}
}
