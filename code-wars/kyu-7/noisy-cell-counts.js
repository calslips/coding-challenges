/*
A researcher is studying cell division in a large number of samples.
Counting the cells in each sample is automated, but when she looks
at the data, she immediately notices that something is wrong.

The data are arrays of integers corresponding to the number of cells
in the sample over time. The first element data[0] is the initial
count. The next element data[1] is the cell count at a later time.
data[2] is the next count, and so on.

The cells are reproducing, so the elements of the array are supposed
to be non-decreasing (there is no cell death), but the automatic cell
counter has undercounted. In fact, the researcher has verified that
the counter undercounts by 1 at random. The error rate is unknown.

Your task is to create a new non-decreasing array that is minimally
different from the data array.
For example, if the data = [1, 1, 2, 2, 1, 2, 2, 2, 2] then the
returned array should be [1, 1, 2, 2, 2, 2, 2, 2, 2] because
data[4] < data[3] is clearly an error.

The first entry of the array is correct, and does not require an adjustment.
The array will never be empty.

Parameters: an array of nums
Returns: an array of nums
  correct erroneously reduced value
Examples:
  cleanedCounts([10,11,10]), [10,11,11]
  cleanedCounts([1,1,2,2,1,2,2,2,2]), [1,1,2,2,2,2,2,2,2]
  cleanedCounts([2,1,2]), [2,2,2]
  cleanedCounts([4,4,4,4]), [4,4,4,4]
  cleanedCounts([5,5,6,5,5,5,5,6]), [5,5,6,6,6,6,6,6]
Pseudocode:
  initialize a new array
  iterate over the input array
    if current value is less than last value in new array
      push last value of new array to new array
    otherwise
      push current value to new array
  return new array
*/

function cleanedCounts(data) {
  return data.reduce((p, c) => (c < p.at(-1) ? p.push(p.at(-1)) : p.push(c), p), []);
}

function cleanedCounts(data) {
  return data.reduce((p, c) => (p.push(Math.max(c, p.at(-1) || 0)), p), []);
}

function cleanedCounts(data) {
  return data.reduce((p, c) => p.concat(Math.max(c, p.at(-1) || 0)), []);
}