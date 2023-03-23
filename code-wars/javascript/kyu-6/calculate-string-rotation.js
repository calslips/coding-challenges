/*
Write a function that receives two strings and returns n, where n is equal
to the number of characters we should shift the first string forward to match
the second. The check should be case sensitive.

For instance, take the strings "fatigue" and "tiguefa". In this case, the
first string has been rotated 5 characters forward to produce the second
string, so 5 would be returned.

If the second string isn't a valid rotation of the first string, the method
returns -1.

Parameters: two strings
  one is a word
  the other is potentially the first with its letters shifted
  (case Sensitive)
Returns: a number
  -1 if the 2nd arg could never be the 1st with shifting
  0 if no shift occurred (1st & 2nd arg are equal)
  n to be the number of shifts that occurred to get the 1st to be the 2nd
Examples:
  shiftedDiff('coffee', 'eecoff') // 2
  shiftedDiff('eecoff', 'coffee') // 4
  shiftedDiff('moose', 'Moose') // -1
  shiftedDiff("isn't", "'tisn") // 2
  shiftedDiff('Esham', 'Esham') // 0
  shiftedDiff('dog', 'god') // -1
Pseudocode:
  initialize rotations count variable assigned to 0
  create a loop to iterate over the length of the 1st arg
    compare equality of first & second
      if equal
        return count
      if not
        check if loop is on its last iteration
          if it is
            reassign count to -1
          otherwise
            increment count
            shift the last letter to the front of the string
            continue to next iteration of loop
*/

function shiftedDiff(first, second) {
  for (let i = 0; i < first.length; i++, first = first.slice(-1) + first.slice(0, -1)) {
    if (first === second) return i;
  }
  return -1;
}

// function shiftedDiff(first, second) {
//   return first.length === second.length ? second.repeat(2).indexOf(first) : -1;
// }