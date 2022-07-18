/*
Find the integer from a to b (included) with the greatest number of divisors.
If there are several numbers that have the same (maximum) number of divisors,
the smallest among them should be returned.
Return the string "Error" if a > b.

Parameters: 2 numbers
Returns: a number between the 2 input numbers
  that has the greatest number of divisors
Examples:
  divNum(15, 30) // 24
  divNum(1, 2) // 2
  divNum(0, 0) // 0
  divNum(52, 156) // 120
Pseudocode:
  check if 1st input (a) is greater than 2nd input (b)
    if it is,
      return 'Error'
  initialize a range array containing all numbers from a-b inclusive
  create a new divisors array from range array,
    where each element will become the count of its divisors from 1 to its sqrt
  return the element in the range array whose index matches the max value in divisors array
*/

const divNum = (a, b) => {
  if (a > b) return 'Error';
  const range = Array.from({length: b - a + 1}, (_, i) => a + i);
  const divisors = range.map(e => {
    let c = 0
    for (let i = 1; i < Math.sqrt(e); i++) !(e % i) && c++;
    return c;
  });
  return range[divisors.indexOf(Math.max(...divisors))];
};

// const divNum = (a, b) => {
//   if (a > b) return 'Error';
//   const range = Array.from({length: b - a + 1}, (_, i) => a + i);
//   const divisors = range.map(e => Array.from({length: Math.ceil(Math.sqrt(e))}, (_, i) => i).reduce((d, c) => !(e % c) ? ++d : d, 0));
//   return range[divisors.indexOf(Math.max(...divisors))];
// };