/*
You will get an array of numbers.

Every preceding number is smaller than the one following it.

Some numbers will be missing, for instance:
[-3,-2,1,5] //missing numbers are: -1,0,2,3,4

Your task is to return an array of those missing numbers:
[-1,0,2,3,4]

Parameters: an array of numbers (ordered from least to greatest)
Returns: an array of numbers missing within the range of the inputs min-max values
Examples:
  findMissingNumbers([-3,-2,1,4]) // [-1,0,2,3]
  findMissingNumbers([-1,0,1,2,3,4]) // []
  findMissingNumbers([]) // []
Pseudocode:
  initialize a result array assigned to an empty array
  loop over the input array from lowest value to highest
    check if current value exists in input array
      if it does
        continue to next iteration
      if not
        push value to result array
  return result array
Refactored:
  create an array whose length matches the difference from inputs lowest to highest range
    with each element to equal the lowest value plus current index
      (this creates an array that includes every value between inputs min to max)
    filter out the values missing from the input array
    return the filtered array
*/

function findMissingNumbers(arr) {
  return Array.from({length: arr[arr.length - 1] - arr[0]}, (e, i) => arr[0] + i).filter(n => !arr.includes(n));
}