/*
Set objects are new JavaScript built-in objects defined since
ECMAScript 2015

A Set lets you store unique values of any type. It comes with
some useful methods like .add, .clear, .has . . . BUT some
"Set operations" are missing, like . . .

Symmetric difference

The symmetric difference is an extension of the complement.
Denoted A Δ B, it's the set of all element of A which are not
element of B and all element of B which are not element of A.

Example:
{7,8,9,10} Δ {9,10,11,12} = {7,8,11,12}.

Task
Create function symDiff getting 2 sets as arguments and
returning a new Set as result of symmetric difference of these
sets.

Examples:
A = new Set([1,2,3]);
B = new Set([2,3,4]);
symDiff(A,B) // -> {1,4}

Note: as I've got some problem outputting "Δ" in tests,
      I will use "^" instead of it.

Parameters: 2 sets
Returns: 1 set
Examples:
  let A = new Set([4, 5, 6, 7]);
  let B = new Set([6, 7, 8, 9]);
  symDiff(A, B), new Set([4, 5, 8, 9]);
Pseudocode:
  initialize a set to contain uncommon values
  for each value in set1
    if current value is NOT in set2
      add current value to uncommon set
  for each value in set2
    if current value is NOT in set1
      add current value to uncommon set
  return uncommon set
*/

function symDiff(s1, s2) {
  return [s1, s2].reduce((u, s, i) => (s.forEach(v => !(i ? s1 : s2).has(v) && u.add(v)), u), new Set);
}

function symDiff(s1, s2) {
  const uncommon = new Set();
  [s1, s2].forEach((s, i) => s.forEach(v => !(i ? s1 : s2).has(v) && uncommon.add(v)));
  return uncommon;
}