/*
Let's implement the range function:

range([start], stop, [step])

range(1, 11);
=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

range(1, 4, 0); // /!\ note that the step is 0
=> [1, 1, 1]

range(0);
=> []

range(10, 0); // /!\ note that the end is before the start
=> []

range(10);
=> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

range(0, 30, 5);
=> [0, 5, 10, 15, 20, 25]
start, if omitted, defaults to 0; step defaults to 1.

Returns a list of integers from start to stop, incremented by step,
exclusive.
Note that ranges that stop before they start are considered to be
zero-length instead of negative.

Parameters: 3 separate number values
  (start, stop, step)
  start is optional; defaults to 0
  stop is required, the terminating point, do NOT include in return
  step is optional; defaults to 1
Returns: an array of numbers displaying a range depending on inputs
Examples:
  range(10) // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  range(1, 11) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  range(0, 30, 5) // [0, 5, 10, 15, 20, 25]
  range(1, 4, 0) // [1, 1, 1]
  range(0) // []
  range(10, 0) // []
Pseudocode:
  if end is less than start OR args are undefined
    return empty array
  check length of args
    if 1
      return an array containing numbers 0 to arg (exclusive),
        incremented by 1
    if 2
      return an array containing numbers from 1st arg to last arg (exclusive),
        incremented by 1
    if 3
      return an array containing numbers 1st arg to 2nd arg (exclusive)
        incremented by 3rd(last) arg
*/

function range(start, end, step) {
  if (end < start || [...arguments].every(e => e === undefined)) return [];
  else if (arguments.length === 1) return Array(start).fill(0).map((e, i) => e + i);
  else if (arguments.length === 2) return Array(end - start).fill(start).map((e, i) => e + i);
  else return Array(Math.ceil((end - start) / (step || 1))).fill(start).map((e, i) => e + i * step);
}