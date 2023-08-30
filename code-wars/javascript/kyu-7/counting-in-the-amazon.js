/*
The Arara are an isolated tribe found in the Amazon who count
in pairs. For example one to eight is as follows:

1 = anane
2 = adak
3 = adak anane
4 = adak adak
5 = adak adak anane
6 = adak adak adak
7 = adak adak adak anane
8 = adak adak adak adak

Take a given number and return the Arara's equivalent.

e.g.

countArara(3) 'adak anane'
countArara(8) 'adak adak adak adak'

countArara 3 // -> "adak anane"
countArara 8 // -> "adak adak adak adak"

Parameters: a num
Returns: a str
Examples:
  countArara(1), "anane"
  countArara(3), "adak anane"
  countArara(8), "adak adak adak adak"
Pseudocode:
  initialize result var as 'adak ' repeated input divided by 2 times
  if there is a remainder after dividing input by 2
    concat result with 'anane'
  otherwise
    trim end space off result
  return result
*/

function countArara(n) {
  let result = 'adak '.repeat(n / 2);
  return n % 2 ? result += 'anane' : result.trimEnd();
}