/*
Parameters:
  an array of numbers
  an array of functions
Returns:
  a number
  (the reduced result from applying the functions
  to each number in the input array, consecutively
  and circularly)
Examples:
    let rules = [ (a, b) => a + b, (a, b) => a - b ]
    reduceByRules([2.0, 2.0, 3.0, 4.0], rules) // 5.0

    rules = [ (a, b) => a + b, (a, b) => a - b, (a, b) => a * b ]
    reduceByRules([2.0, 2.0, 2.0], rules) // 2.0
    reduceByRules([2.0, 2.0, 2.0, 2.0], rules) // 4.0
    reduceByRules([2.0, 2.0, 2.0, 2.0, 2.0], rules) // 6.0
    reduceByRules([2.0, 2.0, 2.0, 2.0, 2.0, 2.0], rules) // 4.0

    rules = [ (a, b) => Math.min(a, b), (a, b) => Math.max(a, b) ]
    reduceByRules([1.3, 2.0, 3.3], rules) // 3.3
    reduceByRules([4.1, 2.2, 2.1, 2.5], rules) // 2.2
    reduceByRules([8.0, 8.1, 4.1, 12.0, 2.0], rules) // 8.0
    reduceByRules([2.9, 2.8, 2.7, 2.6, 2.5, 2.4], rules) // 2.4
Pseudocode:
  initialize a result var, equal to 0
  iterate over the numbers array, initialize counter to 1
    if its the first iteration
      apply the first function to elements before current & current
      reassign result to equal the return value
    otherwise
      apply the function at counter-1 modulo fn's array length to result & current
      reassign result to equal the return value
  return result
*/

function reduceByRules(numbers, rules) {
  for (let i = 1, result; i < (end = numbers.length); i++) {
    result = rules[(i - 1) % rules.length](i === 1 ? numbers[i - 1] : result, numbers[i]);
    if (i + 1 === end) return result;
  }
}

// function reduceByRules(numbers, rules) {
//   let result = 0;
//   for (let i = 1; i < numbers.length; i++) {
//     result = rules[(i - 1) % rules.length](i === 1 ? numbers[i - 1] : result, numbers[i]);
//   }
//   return result;
// }