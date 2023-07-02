/*
Set objects are new JavaScript built-in objects defined since
ECMAScript 2015

A Set lets you store unique values of any type. It comes with
some useful methods like .add, .clear, .has . . . BUT some
"Set operations" are missing, like . . .

Intersection

A new set can be constructed by determining which members two
sets have "in common". The intersection of A and B, denoted by
A ∩ B, is the set of all things that are members of both A and B.
If A ∩ B = ∅, then A and B are said to be disjoint.

Examples:
  {1, 2} ∩ {1, 2} = {1, 2}.
  {1, 2} ∩ {2, 3} = {2}.

Task
Create function inter getting 2 sets as arguments and returning a
new Set as result of intersection of these 2 sets.

Examples:
A = new Set([1,2]);
B = new Set([2,3]);
C = inter(A,B) // -> {2}

Parameters: 2 sets
Returns: 1 set
Examples:
  let A = new Set([5, 6, 7]);
  let B = new Set([7, 8, 9]);
  inter(A, B), new Set([7]);
Pseudocode:
  initialize a new set to contain common values
  iterate over set1
    if set2 has current value
      add current value to common set
  return common set
*/

function inter(s1, s2) {
  const common = new Set();
  s1.forEach(v => s2.has(v) && common.add(v));
  return common;
}