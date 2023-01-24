/*
In this excercise, we will implement the "merge" function from
MergeSort.

MergeSort is often taught in Computer Science as the canonical
example of the "Divide and Conquer" algorithm. The strategy of
MergeSort is both simple and profound, leveraging two
simple-to-prove mathematical facts (1. That every list of 1
  element is "sorted" ... and 2. It is much easier to combine
  two already-sorted lists into 1 sorted list than it is to sort
  a big list all at once) to yield an algorithm with a worst-case
  complexity of O(n log n).

Basically, MergeSort works like this:
1. If we get a list of size 1, then it's already sorted: we're done.
   Just return that value.
2. Otherwise; break the list you have to sort in half: 2a. MergeSort
   the first half. 2b. MergeSort the second half. 2c. "Merge" the two
   sorted lists for 2a and 2b together. Voila: sorted.

2c is where the MergeSort "merge" function comes in. It takes two
already-sorted lists (arrays, in this example) and returns one large
sorted list.

The name of the function in this example is "mergesorted". It should
return a big sorted array from two smaller sorted arrays: e.g.
mergesorted([1,2],[3,4]) //should: [1,2,3,4]
mergesorted([1,2],[3]) //should: [1,2,3]
mergesorted([1],[2, 3]) //should: [1,2,3]

Parameters: 2 sorted arrays
Returns: 1 sorted array
  both input arrays merged
Examples:
  mergesorted([], []), []
  mergesorted([1], []), [1]
  mergesorted([], [1]), [1]
  mergesorted([1], [1]), [1, 1]
  mergesorted([1, 2, 3], [4]), [1, 2, 3, 4]
  mergesorted([4], [1, 2, 3]), [1, 2, 3, 4]
  mergesorted([1, 1, 1], [2, 2, 2]), [1, 1, 1, 2, 2, 2]
  mergesorted([2, 2, 2], [1, 1, 1]), [1, 1, 1, 2, 2, 2]
  mergesorted([1, 2, 3], [1, 2, 3]), [1, 1, 2, 2, 3, 3]
  mergesorted([1, 3, 5], [2, 4, 6]), [1, 2, 3, 4, 5, 6]
  mergesorted([2, 4, 6], [1, 3, 5]), [1, 2, 3, 4, 5, 6]
Pseudocode:
  initialize a sorted var assigned to an empty array
  iterate over the length of the longer input array
  (have 2 counters, i & j)
    if iterating over one array is done before the other
      push the rest of the remaining values to sorted
      and break out of loop
    otherwise
      compare values at counter indices,
      push lower value to sorted &
      increment respective counter
  return sorted array
*/

// TODO: implement 'mergesorted'
// INPUT: a and b are both sorted arrays consisting entirely of integers
// ALSO: Array.prototype.sort has been disabled
function mergesorted(a, b) {
  const sorted = [];
  for (let i = 0, j = 0; i < a.length || j < b.length; ) {
    if (!(i in a) || !(j in b))
      a[i]
        ? (sorted.push(...a.slice(i)), (i = a.length))
        : (sorted.push(...b.slice(j)), (j = b.length));
    else if (a[i] < b[j]) sorted.push(a[i]), i++;
    else sorted.push(b[j]), j++;
  }
  return sorted;
}

function mergesorted(a, b) {
  const sorted = [];
  for (let i = 0, j = 0; i < a.length || j < b.length; ) {
    if (!(i in a && j in b)) i = sorted.push(...a.slice(i), ...b.slice(j)), j = i;
    else if (a[i] < b[j]) sorted.push(a[i++]);
    else sorted.push(b[j++]);
  }
  return sorted;
}

function mergesorted(a, b) {
  const sorted = [];
  for (let i = 0, j = 0; i < a.length || j < b.length; ) {
    !(i in a && j in b)
      ? ((i = sorted.push(...a.slice(i), ...b.slice(j))), (j = i))
      : a[i] < b[j]
      ? sorted.push(a[i++])
      : sorted.push(b[j++]);
  }
  return sorted;
}
