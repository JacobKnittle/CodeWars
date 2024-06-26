//given an array of only strings
//return string names with a length of 4 chars

function friend(friends) {
	return friends.filter((friend) => friend.length === 4);
}

console.log(friend(['Ryan', 'Kieran', 'Mark']), ['Ryan', 'Mark']);
console.log(friend(['Ryan', 'Jimmy', '123', '4', 'Cool Man']), ['Ryan']);
console.log(
	friend(['Jimm', 'Cari', 'aret', 'truehdnviegkwgvke', 'sixtyiscooooool']),
	['Jimm', 'Cari', 'aret']
);
console.log(friend(['Love', 'Your', 'Face', '1']), ['Love', 'Your', 'Face']);
