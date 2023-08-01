/*
The goal of this kata is two-fold:

1.) You must produce a fibonacci sequence in the form of an array,
containing a number of items equal to the input provided.

2.) You must replace all numbers in the sequence divisible by 3 with Fizz,
those divisible by 5 with Buzz,
and those divisible by both 3 and 5 with FizzBuzz.

For the sake of this kata,
you can assume all input will be a positive integer.

Use Cases
Return output must be in the form of an array,
with the numbers as integers and the replaced numbers (fizzbuzz) as strings.

Parameters: a num
Returns: an array of nums/strs
Examples:
  fibsFizzBuzz(2),
    [1, 1]
  fibsFizzBuzz(5),
    [1, 1, 2, 'Fizz', 'Buzz']
  fibsFizzBuzz(20),
    [1,1,2,"Fizz","Buzz",8,13,"Fizz",34,"Buzz",89,"Fizz",233,377,"Buzz","Fizz",1597,2584,4181,"FizzBuzz"]
Pseudocode:
  initialize result array to conain 2 1's
  if input is less than result array length
    return slice of result array from 0 to input
  while result length is less than input
    add the last 2 nums in result and push sum to result
  iterate over the result array
    if current num is divisible by 3 & 5
      replace it with 'FizzBuzz'
    if current num is divisible by 3
      replace it with 'Fizz'
    if current num is divisible by 5
      replace it with 'Buzz'
  return result array
*/

const fibsFizzBuzz = function(n) {
  const result = [1, 1];
  if (n < result.length) return result.slice(0, n);
  while (result.length < n) result.push(result.at(-1) + result.at(-2));
  return result.map(n => !(n % 15) ? 'FizzBuzz' : !(n % 3) ? 'Fizz' : !(n % 5) ? 'Buzz' : n);
}