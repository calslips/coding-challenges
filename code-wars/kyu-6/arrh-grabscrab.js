/*
Pirates have notorious difficulty with enunciating. They tend to blur all
the letters together and scream at people.

At long last, we need a way to unscramble what these pirates are saying.

Write a function that will accept a jumble of letters as well as a dictionary,
and output a list of words that the pirate might have meant.

For example:

grabscrab( "ortsp", ["sport", "parrot", "ports", "matey"] )
Should return ["sport", "ports"].

Return matches in the same order as in the dictionary.
Return an empty array if there are no matches.

Parameters: a string and an array of possible matches scrambled
Returns:
  an array of definitive matches
Examples:
  grabscrab("trisf", ["first"]) // ["first"]
  grabscrab("oob", ["bob", "baobab"]) // []
  grabscrab("ainstuomn", ["mountains", "hills", "mesa"]) // ["mountains"]
  grabscrab("oolp", ["donkey", "pool", "horse", "loop"]) // ["pool", "loop"]
  grabscrab("ortsp", ["sport", "parrot", "ports", "matey"]) // ["sport", "ports"]
  grabscrab("ourf", ["one","two","three"]) // []
Pseudocode:
  iterate over dictionary
    compare anagram with letters sorted alphabetically
    to current word in dictionary with letters sorted alphabetically
      keep words that match
  return array of matches
*/

function grabscrab(anagram, dictionary) {
  return dictionary.filter(w => [...w].sort().join('') === [...anagram].sort().join(''));
}