// two strings with letters from a-z, capital?,
//a combined string of the two parameters with one instance of each letter

function longest(str1, str2) {
    return [...new Set(str1+str2)].sort().join('')

}
console.log(longest("aretheyhere", "yestheyarehere"), "aehrsty")
    console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"), "abcdefghilnoprstu")
    console.log(longest("inmanylanguages", "theresapairoffunctions"), "acefghilmnoprstuy")