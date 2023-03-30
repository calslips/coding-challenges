/*
Given a positive integer n, return first n dgits of Thue-Morse
sequence, as a string (see examples).

Thue-Morse sequence is a binary sequence with 0 as the first
element. The rest of the sequece is obtained by adding the
Boolean (binary) complement of a group obtained so far.

For example:
0
01
0110
01101001
and so on...

You don't need to test if n is valid -
  it will always be a positive integer.
n will be between 1 and 10000

Parameters: a num
Returns: a str
  the first n digits of the nth sequence
Examples:
  thueMorse(1), '0'
  thueMorse(2), '01'
  thueMorse(5), '01101'
  thueMorse(10), '0110100110'
Pseudocode:
  initialize seq var assigned to string 0
  initialize a var to contain slice of seq from beginning to input
  create a loop to run as long as the slice of seq is shorter than input
    reassign seq to equal itself concatted with itself, but bits inverted
    reassign slice of seq to equal new seq sliced from beginning to input
  return slice of seq
*/

function thueMorse(n) {
  let seq = '0', s = seq.slice(0, n);
  while (s.length < n) s = (seq += [...seq].map(b => +!+b).join('')).slice(0, n);
  return s;
}

function thueMorse(n, seq = '0') {
  for (let s = seq.slice(0, n); s.length < n; s = seq.slice(0, n)) seq += [...seq].map(b => +!+b).join('');
  return seq.slice(0, n);
}