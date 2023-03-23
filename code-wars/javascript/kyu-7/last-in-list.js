/*
Write a function last that accepts a list and returns the last
element in the list.

If the list is empty:
In languages that have a built-in option or result type
(like OCaml or Haskell), return an empty option

In languages that do not have an empty option, just return null

Parameters: an array
Returns: any value or null
  if there are values in the list
    return the last value
  if the list is empty
    return null
Examples:
  last([1, 2, 3]), 3
  last([]), null
Pseudocode:
  if list has a length (it contains values)
    return the value found at index equalling list length - 1
  otherwise if list is empty (no length)
    return null
*/

const last = xs => xs.length ? xs[xs.length - 1] : null;