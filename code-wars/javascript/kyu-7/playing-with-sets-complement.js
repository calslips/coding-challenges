/*
Set objects are new JavaScript built-in objects defined since
ECMAScript 2015

A Set lets you store unique values of any type. It comes with
some useful methods like .add, .clear, .has . . . BUT some
"Set operations" are missing, like . . .

Complement

Two sets can be "subtracted". The relative complement of B in A,
denoted by A \ B (or A − B), is the set of all elements that are
members of A but not members of B. Note that it is valid to
"subtract" members of a set that are not in the set, such as
removing the element green from the set {1, 2, 3}; doing so has
no effect.

Examples:
  {1, 2} \ {1, 2} = ∅.
  {1, 2, 3, 4} \ {1, 3} = {2, 4}.

Task
Create function diff getting 2 sets as arguments and returning a
new Set as result of relative complement of second set in first.

Examples:
A = new Set([1,2]);
B = new Set([2,3]);
diff(A,B) // -> {1}
diff(B,A) // -> {3}

Parameters: 2 sets
Returns: 1 set
Examples:
  let A = new Set([5, 6, 7]);
  let B = new Set([7, 8, 9]);
  diff(A, B), new Set([5, 6]);
  diff(B, A), new Set([8, 9]);
Pseudocode:
  initialize a new set to contain complement values
  iterate over 1st set
    if current value is NOT in 2nd set
      add to complement set
  return complement set
*/

function diff(s1, s2) {
  const complement = new Set();
  s1.forEach(v => !s2.has(v) && complement.add(v));
  return complement;
}