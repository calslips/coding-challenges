/*
Parameters: a number
Returns: an array of numbers
  (prime values through input num)
Examples:
  prime(0) // []
  prime(1) // []
  prime(2) // [2]
  prime(23) // [2,3,5,7,11,13,17,19,23]
Pseudocode:
  initialize a primes var assigned to an empty array
  initialize an array of nums containing nums from 2 to input num
  iterate over nums array
    initialize isPrime var assigned to true
    create a loop, counter starts at 2,
    runs while counter is less than or equal to sqrt of current num
    increment counter
      if the remainder of current num / counter is ever 0
        reassign isPrime to false
    if isPrime
      push current num to primes array
  return primes array
*/

function prime(num) {
  return Array.from({length: num - 1}, (_, i) => i + 2).filter(n => {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(n); i++) if (!(n % i)) isPrime = false;
    return isPrime;
  });
}

// function prime(num) {
//   const nums = Array.from({length: num - 1}, (_, i) => i + 2);
//   return nums.filter(n => {
//     let isPrime = true;
//     for (let i = 2; i <= Math.sqrt(n); i++) if (!(n % i)) isPrime = false;
//     return isPrime;
//   });
// }