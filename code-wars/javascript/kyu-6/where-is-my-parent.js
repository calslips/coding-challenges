/*
Mothers arranged a dance party for the children in school.
At that party, there are only mothers and their children.
All are having great fun on the dance floor when suddenly all
the lights went out. It's a dark night and no one can see each
other. But you were flying nearby and you can see in the dark
and have ability to teleport people anywhere you want.

Legend:
- Uppercase letters stands for mothers, lowercase stand for
  their children, i.e. "A" mother's children are "aaaa".
- Function input: String contains only letters,
  uppercase letters are unique.

Task:
Place all people in alphabetical order where Mothers are
followed by their children, i.e. "aAbaBb" => "AaaBbb".

Parameters: a str
Returns: a str
Examples:
  findChildren("beeeEBb"), "BbbEeee"
  findChildren("uwwWUueEe"), "EeeUuuWww"
  findChildren("abBA"), "AaBb"
  findChildren("AaaaaZazzz"), "AaaaaaZzzz"
  findChildren("CbcBcbaA"), "AaBbbCcc"
  findChildren("xXfuUuuF"), "FfUuuuXx"
Pseudocode:
  convert input str into an array of chars
  sort array of chars
    if the two chars being compared are equal (case insensitive)
      if char a is the uppercase letter
        sort it 1st
      otherwise
        sort char b 1st
    otherwise
      sort the chars lexicographically
  join the sorted array of chars into a str
  return the sorted str
*/

function findChildren(dancingBrigade) {
	return [...dancingBrigade].sort((a, b) => a.toUpperCase() === b.toUpperCase() ? a === a.toUpperCase() ? -1 : 1 : a.localeCompare(b)).join('');
}