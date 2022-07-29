/*
Beaches are filled with sand, water, fish, and sun. Given a string,
calculate how many times the words "Sand", "Water", "Fish", and "Sun"
appear without overlapping (regardless of the case).

Examples
sumOfABeach("WAtErSlIde")                    ==>  1
sumOfABeach("GolDeNSanDyWateRyBeaChSuNN")    ==>  3
sumOfABeach("gOfIshsunesunFiSh")             ==>  4

Parameters: a string
Returns: the number of times specific strings exist
  within the input string without overlap & regardless
  of case ('sand', 'water', 'fish', 'sun')
Examples:
  sumOfABeach('SanD') // 1
  sumOfABeach('sunshine') // 1
  sumOfABeach('sunsunsunsun') // 4
  sumOfABeach('123FISH321') // 1
Pseudocode:
  initialize an array of words to find containing the 4 words
  initialize a count to keep track of words found, value 0
  lowercase the input string
  iterate over the length of the words array
    split the string on the current word
    add the length of string array - 1 to count
    join the string array on empty string
    continue
  return count
*/

function sumOfABeach(beach) {
  return ['sand', 'water', 'fish', 'sun'].reduce((c, w) => c += beach.toLowerCase().split(w).length - 1, 0);
}