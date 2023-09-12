//p: string containing lets from a-z only, can be capital or lower, empty?, num?
//r: return the string with the capital letter of each with the amount of characters after depending on its index separated by a -
//e: "ZpglnRxqenU"), "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"
//p: capitalize the whole string, split them, add the lowercase char based on index in array, join with a - in between each char into a string

function accum(s) {
  return s
    .split('')
    .map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i))
    .join('-');
}

const result = accum('ZpglnRxqenU');
console.log(result);
