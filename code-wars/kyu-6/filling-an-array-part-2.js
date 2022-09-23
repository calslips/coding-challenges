/*
So let's try filling an array with...

...square numbers
The numbers from 1 to n*n
const squares = n => ???
squares(5) // [1, 4, 9, 16, 25]

...a range of numbers
A range of numbers starting from start and increasing by step
const range = (n, start, step) => ???
range(6, 3, 2) // [3, 5, 7, 9, 11, 13]

...random numbers
A bunch of random integers between min and max
const random = (n, min, max) => ???
random(4, 5, 10) // [5, 9, 10, 7]

...prime numbers
All primes starting from 2 (obviously)...
const primes = n => ???
primes(6) // [2, 3, 5, 7, 11, 13]

NOTE: All the above functions should take as their first parameter
  a number that determines the length of the returned array.
*/

/*
Parameters: a number, n
Returns: an array of numbers squared, length n
Examples: squares(5) // [1, 4, 9, 16, 25]
Pseudocode:
  initialize an array with length of n (undefined elements)
  map over the array
    for each element, return its index + 1 squared
  return mapped array
*/

const squares = n => Array(n).fill().map((_, i) => ++i ** 2);

/*
Parameters: 3 numbers, length, start value, step value
Returns: an array of numbers from start incrementing by step,
  length n
Examples: range(6, 3, 2) // [3, 5, 7, 9, 11, 13]
Pseudocode:
  initialize an array with length of n, each element equals start
  map over the array
    add the current element with step multiplied by the current index
  return mapped array
*/

const range = (n, start, step) => Array(n).fill(start).map((e, i) => i * step + e);

/*
Parameters: 3 numbers, length, min value, max value
Returns: an array of random numbers between min and max, length n
Examples: random(4, 5, 10) // [5, 9, 10, 7] (potentially)
Pseudocode:
  initialize an array with length of n, each element undefined
  map over the array
    return a random value greater than or equal to min AND
      less than or equal to max
  return mapped array
*/

const random = (n, min, max) => Array(n).fill().map(_ => Math.round(Math.random() * (max - min) + min));

/*
Parameters: a number, n (target length)
Returns: an array of prime numbers starting at 2
Examples: primes(6) // [2, 3, 5, 7, 11, 13]
Pseudocode:
  initialize a result var, assigned to an empty array
  create a loop to run the length of n
  (initialize count at 2 and increment by 1)
    initialize an isPrime var, assigned to true
    create an inner loop to run to sqrt of outer loop count
    (initialize count at 2 and increment by 1)
      if outer count is evenly divisible by inner count
        reassign isPrime to false and break out of inner loop
      otherwise
        continue
    if the outer count value is prime, push it to result
  return result array
*/

const primes = n => {
  const result = [];
  for (let i = 2; result.length < n; i++) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (!(i % j)) {
        isPrime = false;
        break;
      }
    }
    isPrime && result.push(i);
  }
  return result;
}