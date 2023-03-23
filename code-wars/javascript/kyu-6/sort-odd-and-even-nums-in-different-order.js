/*
You are given an array of integers. Your task is to sort odd
numbers within the array in ascending order, and even numbers
in descending order.

Note that zero is an even number. If you have an empty array,
you need to return it.

For example:

[5, 3, 2, 8, 1, 4]  -->  [1, 3, 8, 4, 5, 2]

odd numbers ascending:   [1, 3,       5   ]
even numbers descending: [      8, 4,    2]

Parameters: an array of nums
Returns: an array of nums
  odds sorted ascending,
  evens sorted descending
  (odds/evens positions maintained)
Examples:
  sortArray([5, 3, 2, 8, 1, 4, 11]), [1, 3, 8, 4, 5, 2, 11]
  sortArray([2, 22, 37, 11, 4, 1, 5, 0]), [22, 4, 1, 5, 2, 11, 37, 0]
  sortArray([1, 111, 11, 11, 2, 1, 5, 0]), [1, 1, 5, 11, 2, 11, 111, 0]
  sortArray([]), []
Pseudocode:
  initialize an odds var assigned to array of odds from input sorted asc
  initialize an evens var assigned to array of evens from input sorted desc
  initialize a results var assigned to an empty array
  iterate over the input array until length of results equals input length
  (initialize counter at 0
  also keep track of odds & evens indices (start at 0)
  increment counter by 1 after each iteration)
    if current num in inputs is even
      push num in evens at evens index to results
      increment evens index
    otherwise if current num in inputs is odd
      push num in odds at odds inces to results
      increment odds index
  return results array
*/

function sortArray(array) {
  const odds = array.filter(n => n % 2).sort((a, b) => a - b),
        evens = array.filter(n => !(n % 2)).sort((a, b) => b - a),
        results = [];
  for (let i = 0, o = 0, e = 0; results.length < array.length; i++) {
    array[i] % 2 ? results.push(odds[o]) && o++ : results.push(evens[e]) && e++;
  }
  return results;
}