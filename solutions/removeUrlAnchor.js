//p: a string with a link format containing special characters
//r: a string that removes everything after and including  the # if it has one
//e: 'www.codewars.com#about'), 'www.codewars.com')
//p:

const removeURLAnchor = (url) => url.split('#')[0];

const result = removeURLAnchor('www.codewars.com#about');
console.log(result);
