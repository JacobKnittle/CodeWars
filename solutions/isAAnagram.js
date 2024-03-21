//given two strings
//return true if they are anagrams of each other

function isAnagram(str1, str2) {
	//sort both strings
	return [
		str1.toLowerCase().split('').sort().join(''),
		str2.toLowerCase().split('').sort().join(''),
	];
	//compare the strings and return true or false
}

console.log(
	isAnagram('foefet', 'toffee'),
	true,
	'The word "foefet" is an anagram of "toffee"'
);
console.log(
	isAnagram('Buckethead', 'DeathCubeK'),
	false,
	'The word "Buckethead" is an anagram of "DeathCubeK"'
);
console.log(
	isAnagram('Twoo', 'WooT'),
	true,
	'The word "Twoo" is an anagram of "WooT"'
);
