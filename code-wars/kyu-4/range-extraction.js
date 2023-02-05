/*
A format for expressing an ordered list of integers is to use a
comma separated list of either

individual integers
or a range of integers denoted by the starting integer separated
from the end integer in the range by a dash, '-'. The range
includes all integers in the interval including both endpoints.
It is not considered a range unless it spans at least 3 numbers.
For example "12,13,15-17"
Complete the solution so that it takes a list of integers in
increasing order and returns a correctly formatted string in the
range format.

Parameters: an array of nums
  sorted ascending
Returns: a str
  comma separated nums
  dash separated consecutive (3+) nums
Examples:
  solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20])
    , "-6,-3-1,3-5,7-11,14,15,17-20"
  solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20])
    , "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"
Pseudocode:
  initialize a result var assigned to an empty array
  initialize a temp var assigned to an array containing the 0th el of input
  iterate over the input array (starting at index 1)
    if current is equal to last el in temp + 1
      push current to temp
    otherwise if current is NOT the next consecutive value OR
    if we are at the LAST value
      if temp length is greater than 2
        concat 1st el with dash and last el
        push concatted str to result
      otherwise
        push all temp els to result
      if we are at the LAST value AND current is NOT consecutive
        push current value to result
      otherwise if we are NOT at LAST value
        reset temp to only contain current
  return result array joined into comma separated str
*/

function solution(list) {
  let result = [], temp = [];
  for (let i = 0; i < list.length; i++) {
    const consecutive = list[i] === temp.at(-1) + 1, end = i === list.length - 1;
    if (consecutive) temp.push(list[i]);
    if (!consecutive || end) {
      temp.length > 2 ? result.push(temp.at(0) + '-' + temp.at(-1)) : temp.forEach(n => result.push(n));
      end && !consecutive ? result.push(list[i]) : temp = [list[i]];
    }
  }
  return result.join(',');
}

function solution(list) {
  let result = [], temp = [];
  for (let i = 0; i < list.length; i++) {
    const consecutive = list[i] === temp.at(-1) + 1, end = i === list.length - 1;
    if (consecutive) {
      temp.push(list[i]);
    }
    if (!consecutive || end) {
      if (temp.length > 2) {
        result.push(temp.at(0) + '-' + temp.at(-1));
      } else {
        temp.forEach(n => result.push(n));
      }
      end && !consecutive ? result.push(list[i]) : temp = [list[i]];
    }
  }
  return result.join(',');
}