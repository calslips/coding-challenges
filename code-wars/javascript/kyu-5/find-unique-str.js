/*
There is an array of strings.
All strings contains similar letters except one. Try to find it!

findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ])
  === 'BbBb'
findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ])
  === 'foo'

Strings may contain spaces. Spaces are not significant,
only non-spaces symbols matters.
E.g. string that contains only spaces is like empty string.

It’s guaranteed that array contains more than 2 strings.

Parameters: an array of strings
Returns: a string
Examples:
  findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]), 'BbBb'
  findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]), 'foo'
  findUniq([ 'silvia', 'vasili', 'victor' ]), 'victor'
  findUniq([ 'Tom Marvolo Riddle', 'I am Lord Voldemort', 'Harry Potter' ]), 'Harry Potter'
  findUniq([ '    ', 'a', ' ' ]), 'a'
Pseudocode:
  map over the input arr
    lowercase current str and spread into an array of chars
    convert array of chars into a set of unique chars
    convert set back into an array of unique chars
    sort unique chars alphabetically
    join chars to be a str of sorted unique letters
    return sorted unique str to replace old one
  iterate over mapped arr
    return the index of the unique str
  return the value located in the input arr at the unique index
*/

function findUniq(arr) {
  return arr[arr.map(s => [...new Set([...s.toLowerCase()])].sort().join('')).findIndex((e, _, a) => a.indexOf(e) === a.lastIndexOf(e))];
}

function findUniq(arr) {
  const unique = arr.map(s => [...new Set([...s.toLowerCase()])].sort().join(''));
  const index = unique.findIndex((e, _, a) => a.indexOf(e) === a.lastIndexOf(e));
  return arr[index];
}