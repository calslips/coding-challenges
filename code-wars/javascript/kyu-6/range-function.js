/*
Create range generator function that will take up to 3 parameters -
start value, step and stop value. This function should return an iterable
object with numbers. For simplicity, assume all parameters to be positive
numbers.

Parameters: up to 3 numbers (only positive)
  1st: start value
  2nd: step
  3rd: stop value (inclusive, if it falls within step)
Returns:
  an array containing the range from start to stop, incremented by step
Examples:
  range(5), [1,2,3,4,5]
  range(3, 7) // [3,4,5,6,7]
  range(2, 3, 15) // [2,5,8,11,14]
Pseudocode:
  if 1 arg (stop)
    return a range from 1 to stop, incremented by 1
  if 2 args (start, stop)
    return a range from start to stop, incremented by 1
  if 3 args (start, step, stop)
    return a range from start to stop, incremented by step
*/

const range = (...data) => data.length === 1
  ? Array(data[0]).fill(1).map((e, i) => e + i)
  : data.length === 2
    ? Array(data[1] - data[0] + 1).fill(data[0]).map((e, i) => e + i)
    : Array(Math.floor((data[2] - data[0]) / data[1]) + 1).fill(data[0]).map((e, i) => e + data[1] * i);