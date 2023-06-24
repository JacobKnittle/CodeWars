//prep
//p: string with at least one word, special characters or numbers?
//r: return the parameter string as a string with first letter capitalized on words with more than two characters
//e: "apple of banana"  => "Apple of Banana"
//p: pseudo

function dropCaps(str) {
  const words = str.split(' ');
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 2) {
      words[i] = words[i][0].toUpperCase() + words[i].toLowerCase().substr(1);
    }
  }
  return words.join(' ');
}

const result = dropCaps('APPLE of banana');
console.log(result);
