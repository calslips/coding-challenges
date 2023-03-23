/*
Round any given number to the closest 0.5 step
I.E.
solution(4.2) = 4
solution(4.3) = 4.5
solution(4.6) = 4.5
solution(4.8) = 5

Round up if number is as close to previous and next 0.5 steps.
solution(4.75) == 5

Parameters: a number (integer/float)
Returns: input number rounded to the nearest 0.5
Examples:
  solution(4.2) // 4
  solution(4.4) // 4.5
  solution(4.6) // 4.5
  solution(4.8) // 5
Pseudocode:
  convert input number to string
  split num string on '.'
  add 0 padding to end of 2nd value of tuple (decimal portion)
    to account for numbers up to and exceeding 2 decimal places
  if 2nd value of tuple (decimal portion) is less than 25
    return only the first value in the tuple converted to number
  if 2nd value of tuple is less than 75
    return the first tuple value concated with '.' and 5 converted to number
  otherwise
    return the value of the first tuple + 1
*/

function solution(n) {
  return (tuple = `${n}`.split('.'), tuple[1] = tuple[1].slice(0, 2).padEnd(2, 0)) && +tuple[1] < 25 ? +tuple[0] : +tuple[1] < 75 ? +tuple[0] + .5 : +tuple[0] + 1;
}

// function solution(n) {
//   return (n * 2).toFixed() / 2;
// }