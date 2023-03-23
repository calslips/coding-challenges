/*
Your are given a string. You must replace any occurence of the
sequence coverage by covfefe, however, if you don't find the word
coverage in the string, you must add covfefe at the end of the
string with a leading space.

For the languages where the string is not immutable (such as ruby),
don't modify the given string, otherwise this will break the test
cases.

Parameters: a str
Returns: a str
  occurrence of 'coverage' replaced with 'covfefe'
  if 'courage' is not within input str, concat with ' covfefe'
Examples:
  covfefe("coverage"), "covfefe"
  covfefe("coverage coverage"), "covfefe covfefe"
  covfefe("nothing"), "nothing covfefe"
  covfefe("double space "), "double space  covfefe"
  covfefe("covfefe") ,"covfefe covfefe"
Pseudocode:
  if 'coverage' is contained within input str
    while index of str 'coverage' is greater than -1
      reassign str to equal
      slice str from 0 to index of 'coverage' &
      concat with 'covfefe' &
      concat with index of 'coverage' plus its length to the end of str
  otherwise
    concat input str with ' coverage' (include space)
*/

function covfefe(str) {
  return str.includes('coverage') ? str.replaceAll('coverage', 'covfefe') : str + ' covfefe';
}