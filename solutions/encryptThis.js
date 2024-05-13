const encryptWord = (w) => {
	const first = w.charCodeAt(0);
	let res;
	switch (w.length) {
		case 0:
			return '';
		case 1:
			return first;
		case 2:
			res = [first, w[1]];
			break;
		case 3:
			res = [first, w[2], w[1]];
			break;
		default:
			res = [first, w.slice(-1), w.slice(2, -1), w[1]];
			break;
	}
	return res.join('');
};

const encryptThis = (text) => text.split(' ').map(encryptWord).join(' ');

console.log(
	encryptThis('A wise old owl lived in an oak'),
	'65 119esi 111dl 111lw 108dvei 105n 97n 111ka'
);
