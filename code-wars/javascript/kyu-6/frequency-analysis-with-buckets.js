/*
Given an input array (arr) of positive integers, the objective
is to return an output array where each index represents the
amount of times an element appeared (frequency) in the input
array.

More specifically, the element at each index of the output array
will be an array (bucket) containing integers that appeared
index-amount-of-times.

Otherwise, slot nulls (JavaScript, Java), None's (Python),
nils (Ruby), or NULL's (C/C++) where appropriate.
A valid array will always be provided.

If an array of [1,2,3,4,4,5,5,5] is passed in, the expected
output should be:
[null, [1,2,3], [4], [5], null, null, null, null, null].

Explanation:

// bucketize(arr) ======> outputArray
bucketize([1,2,3,4,4,5,5,5]) ======> [null, [1,2,3], [4], [5], null, null, null, null, null]

An element cannot appear 0 times, so a null is placed at
outputArray[0]. The elements 1, 2, and 3 appear once. This is
why they are located at outputArray[1]. Notice the elements are
grouped together in an array and sorted in ascending order. The
element 4 appears twice. This is why it is located at
outputArray[2]. The element 5 appears three times. This is why
it is located at outputArray[3].

Although an integer could have possibly appeared four, five,
six, seven, or eight times, this is not the case for this
particular example. This is the reason why the elements at
outputArray[4], outputArray[5], outputArray[6], outputArray[7],
and outputArray[8] are all null values.

Examples:

bucketize([2,2,4,4,6,6,9,9,9,9]) ===> [null, null, [2,4,6], null, [9], null, null, null, null, null, null];
bucketize([3,3,3,3,2]) =============> [null, [2], null, null, [3], null];
bucketize([5,5,5,5,5]) =============> [null, null, null, null, null, [5]];
bucketize([77,3,40,40,40]) =========> [null, [3,77], null, [40], null, null];
bucketize([16,7,5,3,6,23]) =========> [null, [3,5,6,7,16,23], null, null, null, null, null];

Parameters: an array of nums
Returns: 2d array
  (can have nested arrays of nums or null elements)
Examples:
  bucketize([1,1,1]), [null, null, null, [1]]
  bucketize([7,6,6]), [null, [7], [6], null]
  bucketize([5,5,5,9]), [null, [9], null, [5], null]
  bucketize([8,8,4,4]), [null, null, [4, 8], null, null]
  bucketize([1,7,7,7,7,10]), [null, [1,10], null, null, [7], null, null]
  bucketize([20, 40, 60, 80, 100, 20]), [null, [40, 60, 80, 100], [20], null, null, null, null]
  bucketize([9,9,9,9,4,34,65,17]), [null, [4, 17, 34, 65], null, null, [9], null, null, null, null]
  bucketize([12,12,12,12,12,12,19,19]), [null, null, [19], null, null, null, [12], null, null]
  bucketize([1,1,1,2,3,5,5,5,5,4]), [null, [2, 3, 4], null, [1], [5], null, null, null, null, null, null]
  bucketize([7,6,4,3,3,3,3,3,3,2]), [null, [2, 4, 6, 7], null, null, null, null, [3], null, null, null, null]
Pseudocode:
  create a map
    each key to be a num
    and its value will be its frequency within input array
  ierate over input array and populate map
  create a buckets array the length of input array + 1
    each element to be null
  iterate over the keys of map
    use current keys value as an index for buckets array
    if value in buckets array at index is null
      create an array and place key in it
      place array with key at index in buckets array
    otherwise
      push key to array at index in buckets array
  return buckets array
*/

function bucketize(arr) {
  const map = arr.reduce((o, k) => (o[k] = ++o[k] || 1, o), {}),
        buckets = Array(arr.length + 1).fill(null);
  Object.keys(map).forEach(k => buckets[map[k]] ? buckets[map[k]].push(+k) : buckets[map[k]] = [+k]);
  return buckets;
}