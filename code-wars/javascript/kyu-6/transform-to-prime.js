/*
Given a List [] of n integers , find minimum number to be inserted in a
list, so that sum of all elements of list should equal the closest prime
number .

Notes
List size is at least 2 .
List's numbers will only positives (n > 0) .
Repetition of numbers in the list could occur .
The newer list's sum should equal the closest prime number .

Input >> Output Examples
1- minimumNumber ({3,1,2}) ==> return (1)
Explanation:
Since , the sum of the list's elements equal to (6) , the minimum number
to be inserted to transform the sum to prime number is (1) , which will
make the sum of the List equal the closest prime number (7) .
2-  minimumNumber ({2,12,8,4,6}) ==> return (5)
Explanation:
Since , the sum of the list's elements equal to (32) , the minimum number
to be inserted to transform the sum to prime number is (5) , which will
make the sum of the List equal the closest prime number (37) .
3- minimumNumber ({50,39,49,6,17,28}) ==> return (2)
Explanation:
Since , the sum of the list's elements equal to (189) , the minimum number
to be inserted to transform the sum to prime number is (2) , which will
make the sum of the List equal the closest prime number (191) .

Parameters: an array of numbers
Returns: a single number
  (the value added to the sum of the input list to equal the next higher prime num)
Examples:
  minimumNumber([3,1,2]) // 1
  minimumNumber([5,2]) // 0
  minimumNumber([1,1,1]) // 0
  minimumNumber([2,12,8,4,6]) // 5
  minimumNumber([50,39,49,6,17,28]) // 2
Pseudocode:
  initialize next prime variable, undefined
  sum all the elements in the input array
  loop over integers, initial count value to equal the sum of input array
    check if current value is prime
      if it is,
        assign next prime to current value
        break out of loop
      otherwise
        continue to next iteration
        increment count
  return next prime subtracted by input array sum
*/

function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) if (!(num % i)) return false;
  return true;
}

function minimumNumber(numbers) {
  for (let sum = numbers.reduce((s, n) => s + n), i = sum; ; i++) if (isPrime(i)) return i - sum;
}