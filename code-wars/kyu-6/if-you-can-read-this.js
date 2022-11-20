/*
You'll have to translate a string to Pilot's alphabet
(NATO phonetic alphabet).

Input:
If, you can read?

Output:
India Foxtrot , Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta ?

Note:
There are preloaded dictionary you can use, named NATO
The set of used punctuation is ,.!?.
Punctuation should be kept in your return string, but spaces should not.
Xray should not have a dash within.
Every word and punctuation mark should be seperated by a space ' '.
There should be no trailing whitespace

Parameters: a string
Returns: a string
  letters replaced with the phonetic alphabet
Examples:
  to_nato('If you can read')
    // "India Foxtrot Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta"
  to_nato('Did not see that coming')
    // "Delta India Delta November Oscar Tango Sierra Echo Echo Tango Hotel Alfa Tango Charlie Oscar Mike India November Golf"
  to_nato('go for it!')
    // "Golf Oscar Foxtrot Oscar Romeo India Tango !"
Pseudocode:
  convert input str to lowercase
  remove spaces from input str
  split input string into an array of letters/punctuation
  map over split input
    if current char is a key in NATO dictionary
      replace with value
    otherwise
      keep current char as is (punctuation)
  return map joined on empty space
*/

function to_nato(words) {
	return [...words.toLowerCase().split(' ').join('')].map(c => NATO[c] || c).join(' ');
}

const NATO = {
  a: 'Alfa',
  n: 'November',
  b: 'Bravo',
  o: 'Oscar',
  c: 'Charlie',
  p: 'Papa',
  d: 'Delta',
  q: 'Quebec',
  e: 'Echo',
  r: 'Romeo',
  f: 'Foxtrot',
  s: 'Sierra',
  g: 'Golf',
  t: 'Tango',
  h: 'Hotel',
  u: 'Uniform',
  i: 'India',
  v: 'Victor',
  j: 'Juliett',
  w: 'Whiskey',
  k: 'Kilo',
  x: 'Xray',
  l: 'Lima',
  y: 'Yankee',
  m: 'Mike',
  z: 'Zulu',
};