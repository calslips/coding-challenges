/*
In your class, you have started lessons about arithmetic progression.
Since you are also a programmer, you have decided to write a function
that will return the first n elements of the sequence with the given
common difference d and first element a. Note that the difference may
be zero!
The result should be a string of numbers, separated by comma and space.

Parameters: 3 nums
  1st el, difference b/w els, count of els
Returns: a str
  comma separated nums of a sequence that
  aligns with the input values
Examples:
  arithmeticSequenceElements(1, 2, 5), "1, 3, 5, 7, 9"
  arithmeticSequenceElements(1, 0, 5), "1, 1, 1, 1, 1"
  arithmeticSequenceElements(1, -3, 10), "1, -2, -5, -8, -11, -14, -17, -20, -23, -26"
  arithmeticSequenceElements(100, -10, 10), "100, 90, 80, 70, 60, 50, 40, 30, 20, 10"
Pseudocode:
  create an array of n length
  fill it with input a
  map over values
    add index * d to each el
  return mapped array joined on comma and space
*/

function arithmeticSequenceElements(a, d, n) {
	return Array(n).fill(a).map((e, i) => e + i * d).join(', ');
}