/*
An array is circularly sorted if the elements are sorted in
ascending order, but displaced, or rotated, by any number of
steps.

Complete the function/method that determines if the given
array of integers is circularly sorted.

Examples

These arrays are circularly sorted (true):
[2, 3, 4, 5, 0, 1]       -->  [0, 1] + [2, 3, 4, 5]
[4, 5, 6, 9, 1]          -->  [1] + [4, 5, 6, 9]
[10, 11, 6, 7, 9]        -->  [6, 7, 9] + [10, 11]
[1, 2, 3, 4, 5]          -->  [1, 2, 3, 4, 5]
[5, 7, 43, 987, -9, 0]   -->  [-9, 0] + [5, 7, 43, 987]
[1, 2, 3, 4, 1]          -->  [1] + [1, 2, 3, 4]

While these are not (false):
[4, 1, 2, 5]
[8, 7, 6, 5, 4, 3]
[6, 7, 4, 8]
[7, 6, 5, 4, 3, 2, 1]

Parameters: an array of numbers
Returns: a boolean
  whether the elements in the input array are
  sorted in ascending order (circularly)
Examples:
  isCircleSorted([2, 3, 4, 5, 6]), true
  isCircleSorted([6, 2, 3, 4, 5]), true
  isCircleSorted([3, 2, 4, 5, 6]), false
Pseudocode:
  if arr is empty return true
  initialize iteration var to keep track of loops
  loop over the length of the input array
    initialize a isAscending flag to true
    (to keep track of value order in array)
    iterate over the length of the input array
      if current value is ever greater than next
        reassign isAscending flag to false
        break out of inner loop,
        continue to next iteration of outer loop
    if isAscending remains true
      return it
    otherwise
      take first value of array and place it at the end
      increment iteration
  if loop ends without returning true, it is not circularly sorted
    return false
*/

function isCircleSorted( arr ) {
  return arr.reduce((d, e, i, a) => e > a[++i % a.length] ? ++d : d, 0) < 2;
}

// function isCircleSorted( arr ) {
//   let displacedCount = 0;
//   arr.forEach((e, i, a) => e > a[++i % a.length] && displacedCount++);
//   return displacedCount < 2;
// }

// function isCircleSorted( arr ) {
//   if (!arr.length) return true;
//   let iteration = 0;
//   while (iteration < arr.length) {
//     let isAscending = true;
//     for (let i = 0; i < arr.length - 1; i++) {
//       if (arr[i] > arr[i + 1]) {
//         isAscending = false;
//         break;
//       }
//     }
//     if (isAscending) return isAscending;
//     arr.push(arr.shift());
//     iteration++;
//   }
//   return false;
// }

// did not work, [1, 2, 3, 4, 1] failed
// (along with other duplicate start/ends)
// Pseudocode:
  // double the input array
  // initialize a min index var assigned to the 1st index of min value
  // initialize a max index var assigned to the last index of max value
  // slice doubled input from min index through max index
  // if slice length is not equal to input array length
  //   return false
  // iterate over sliced array from beginning to 2nd last element
  //   if current is ever greater than next
  //     return false
  // return true
// function isCircleSorted( arr ) {
//   const dbl = arr.concat(arr),
//         min = Math.min(...arr),
//         max = Math.max(...arr),
//         minIndex = dbl.indexOf(min),
//         firstMax = dbl.indexOf(max),
//         lastMax = dbl.lastIndexOf(max),
//         maxIndex = minIndex > firstMax ? lastMax : firstMax,
//         sorted = dbl.slice(minIndex, maxIndex + 1);
//   if (sorted.length !== arr.length) return false;
//   for (let i = 0; i < sorted.length - 2; i++) if (sorted[i] > sorted[i + 1]) return false;
//   return true;
// }