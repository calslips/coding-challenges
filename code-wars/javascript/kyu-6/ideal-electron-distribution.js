/*
You are a khmmadkhm scientist and you decided to play with
electron distribution among atom's shells. You know that basic
idea of electron distribution is that electrons should fill a
shell untill it's holding the maximum number of electrons.

Rules:
Maximum number of electrons in a shell is distributed with a
rule of 2n^2 (n being position of a shell).
For example, maximum number of electrons in 3rd shield is
2*3^2 = 18.
Electrons should fill the lowest level shell first.
If the electrons have completely filled the lowest level shell,
the other unoccupied electrons will fill the higher level shell
and so on.

Parameters: a num
Returns: an array of nums
Examples:
  atomicNumber(1), [1]
  atomicNumber(10), [2, 8]
  atomicNumber(11), [2, 8, 1]
  atomicNumber(22), [2, 8, 12]
  atomicNumber(23), [2, 8, 13]
  atomicNumber(47), [2, 8, 18, 19]
  atomicNumber(50), [2, 8, 18, 22]
  atomicNumber(52), [2, 8, 18, 24]
  atomicNumber(60), [2, 8, 18, 32]
  atomicNumber(61), [2, 8, 18, 32, 1]
Pseudocode:
  initialize a distribution var assigned to an empty array
  initialize a loop to run as long as num is greater than 0
  counter initialized at 1, incremented by 1 each iteration
    if num is greater than shell limit (shell number to the 2nd power, doubled)
      reassign num to equal itself subtracted by shell limit
      push shell limit to distribution array
    otherwise
      push num to distribution array
      reassign num to 0
  return distribution array
*/

function atomicNumber(num) {
  const dist = [];
  for (let i = 1, limit = 2; num > 0; num -= limit, limit = ++i * i * 2) dist.push(Math.min(num, limit));
  return dist;
}

function atomicNumber(num) {
  const dist = [];
  for (let i = 1, limit = i * i * 2; num > 0; i++, limit = i * i * 2) {
    num > limit ? (dist.push(limit), num -= limit) : (dist.push(num), num = 0);
  }
  return dist;
}