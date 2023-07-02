/*
Set objects are new JavaScript built-in objects defined since
ECMAScript 2015

A Set lets you store unique values of any type. It comes with
some useful methods like .add, .clear, .has . . . BUT some
"Set operations" are missing, like . . .

Equality

Two sets ( A, B ) are considered "equal" if all elements of A
are elements of B and all elements of B are elements of A no
matter "order" of elements.

Examples:
  {1, 2} == {2, 1}
  {1, 2} != {1, 2, 3}

Task
Create 2 functions, areEqual and notEqual, getting 2 sets as
arguments and returning a true or false depending if these 2
sets are "equal" (respectively not equal) ie : if all elements
of 1st set are elements of 2d and all elements of 2d set are
elements of 1st.

Examples:
A  = new Set([1,2]);
A2 = new Set([2,1]);
B  = new Set([2,3]);
areEqual(A,B)  // -> false
areEqual(A,A2) // -> true
notEqual(A,B)  // -> true

Parameters: 2 sets
Returns: a boolean
Examples:
  let A = new Set([7, 8, 9]);
  let B = new Set([9, 7, 8]);
  areEqual(A, B), true
  notEqual(A, B), false

  let C = new Set([3, 4, 5]);
  let D = new Set([2, 4, 5]);
  areEqual(C, D), false
  notEqual(C, D), true
Pseudocode:
  areEqual()
    if set sizes are NOT equal
      return false
    return result of converting set1 to array
      call every on array
        check that set2 has current value

  notEqual()
    return the inverse of return from call to areEqual()
*/

function areEqual(s1, s2) {
  if (s1.size !== s2.size) return false;
  return [...s1].every(v => s2.has(v));
}

function notEqual(s1, s2) {
  return !areEqual(s1, s2);
}