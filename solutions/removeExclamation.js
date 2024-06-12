// given a string of chars including one or more !
// remove a single !

const removeExclamation = (str) => {
	if (str.endsWith('!')) return str.slice(0, -1);
	return str;
};

console.log(removeExclamation('!hello!'), '!hello');
