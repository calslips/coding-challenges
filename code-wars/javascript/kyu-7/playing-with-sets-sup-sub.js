/*
Set objects are new JavaScript built-in objects defined since
ECMAScript 2015

A Set lets you store unique values of any type. It comes with
some useful methods like .add, .clear, .has . . . BUT some
"Set operations" are missing, like . . .

Subset and Superset

If every member of set A is also a member of set B, then A is
said to be a subset of B, written A ⊆ B (also pronounced "A is
contained in B"). Equivalently, we can write B ⊇ A, read as
"B is a superset of A", "B includes A", or "B contains A".

Example:
  {1, 3} ⊆ {1, 2, 3, 4}.
  {1, 2, 3, 4} ⊆ {1, 2, 3, 4}.

  {1, 2, 3, 4} ⊇ {1, 3}.
  {1, 2, 3, 4} ⊇ {1, 2, 3, 4}.

Task
Create 2 functions:

isSubsetOf getting 2 sets as arguments and returning true if
  2d set contains all elements of 1st one.

isSupersetOf getting 2 sets as arguments and returning true if
  1st set contains all elements of 2d one.

Examples:
A = new Set([1,2]);
B = new Set([1,2,3]);

isSubsetOf(A,B) // -> true
isSubsetOf(B,A) // -> false

isSupersetOf(A,B) // -> false
isSupersetOf(B,A) // -> true

Parameters: 2 sets
Returns: a boolean
Examples:
  let A = new Set([1, 2, 3]);
  let B = new Set([3, 2, 1]);
  isSubsetOf(A, B), true
  isSupersetOf(B, A), true

  let C = new Set([1, 2, 3, 4, 5]);
  let D = new Set([1, 2, 4, 5, 6, 7]);
  isSubsetOf(C, D), false
  isSupersetOf(D, C), false
Pseudocode:
  isSubsetOf
    if every value in set1 is contained in set2
      return true
    otherwise
      return false

  isSupersetOf
    return call to isSubsetOf() with args switched
      (2nd set 1st, 1st set 2nd)
*/

function isSubsetOf(s1, s2) {
  return [...s1].every(v => s2.has(v));
}

function isSupersetOf(s1, s2) {
  return isSubsetOf(s2, s1);
}