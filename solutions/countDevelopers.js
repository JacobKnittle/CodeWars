// array of object containing firstname, lastname, country, continent, age, language
// return the number of javascript developers that are coming from europe

function countDevelopers(list) {
	return list.filter(
		(person) =>
			person.continent === 'Europe' && person.language === 'JavaScript'
	).length;
}

console.log(
	countDevelopers([
		{
			firstName: 'Noah',
			lastName: 'M.',
			country: 'Switzerland',
			continent: 'Europe',
			age: 19,
			language: 'JavaScript',
		},
		{
			firstName: 'Maia',
			lastName: 'S.',
			country: 'Tahiti',
			continent: 'Oceania',
			age: 28,
			language: 'JavaScript',
		},
		{
			firstName: 'Shufen',
			lastName: 'L.',
			country: 'Taiwan',
			continent: 'Asia',
			age: 35,
			language: 'HTML',
		},
		{
			firstName: 'Sumayah',
			lastName: 'M.',
			country: 'Tajikistan',
			continent: 'Asia',
			age: 30,
			language: 'CSS',
		},
	])
);
