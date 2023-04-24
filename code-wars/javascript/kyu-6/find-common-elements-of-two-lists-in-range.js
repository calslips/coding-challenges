/*
We are given two arrays of integers A and B and we have to output
a sorted array with the integers that fulfill the following
constraints:

they are present in both ones

they occur more than once in A and more than once in B

their values are within a given range

thay are odd or even according as it is requested

arrA = [1, -2, 7, 2, 1, 3, 7, 1, 0, 2, 3]
arrB = [2, -1, 1, 1, 1, 1, 2, 3, 3, 7, 7, 0]
rng = [-4, 4] # is the range of the integers from -4 to 4
  (inclusive)
wanted = 'odd'

Process to obtain the result:
0, 1, 2, 3, 7, are the numbers present in arrA and arrB
1, 2, 3, 7,  occur twice or more in arrA and arrB
1, 2, 3,  are in the range [-4, 4]
1, 3, are odd
output: [1, 3]

For the case:
arrA = [1, -2, 7, 2, 1, 3, 4, 7, 1, 0, 2, 3, 0, 4]
arrB = [0, 4, 2, -1, 1, 1, 1, 1, 2, 3, 3, 7, 7, 0, 4]
rng = [-4, 4]
wanted = 'even'
output[0, 2, 4]

If there are no elements to fulfill the constraints given above
the result will be the empty array.

The name of the function with the corresponding order of its
arguments and the data structure for the output is as it follows
below:
find_arr(arrA, arrB, rng, wanted) ----> []
(For Javascript the function will be findArr())

Features of the tests:
Number of Random Tests = 300
Length of the arrays A and B between 1000 and 10000
You may assume that you will always receive valid entries for all
the tests.

Parameters:
  an array of nums
  an array of nums
  a tuple of nums
  a str
Returns: an array of nums or empty
Examples:
  let arrA = [1, -2, 7, 2, 1, 3, 7, 1, 0, 2, 3];
  let arrB = [2, -1, 1, 1, 1, 1, 2, 3, 3, 7, 7, 0];
  let rng = [-4, 4];
  let wanted = 'odd';
  findArr(arrA, arrB, rng, wanted), [1, 3]

  arrA = [1, -2, 7, 2, 1, 3, 4, 7, 1, 0, 2, 3, 0, 4];
  arrB = [0, 4, 2, -1, 1, 1, 1, 1, 2, 3, 3, 7, 7, 0, 4];
  rng = [-4, 4];
  wanted = 'even';
  findArr(arrA, arrB, rng, wanted), [0, 2, 4]

  arrA = [1, -2, 7, 2, 1, 3, 4, 7, 1, 0, 2, 3, 0, 4];
  arrB = [0, 4, 2, -1, 1, 1, 1, 1, 2, 3, 3, 7, 7, 0, 4];
  rng = [-4, -1];
  wanted = 'even';
  findArr(arrA, arrB, rng, wanted), []
Pseudocode:
  define a hash for array a
    nums as keys, values as their count
  define a hash for array b
    nums as keys, values as their count
  iterate over the keys of hash a
    if the associated value is greater than 1
    AND it exists in hash b with a value greater than 1
    AND it is within the range nums
    AND it satisfies the even/odd qualifier
      keep it in hash
    otherwise
      delete it
  map over keys of hash a
    convert keys to nums
  return keys array
*/

function findArr(arrA, arrB, rng, wanted) {
  const [a, b] = [arrA, arrB].map(a => a.reduce((o, k) => (o[k] = ++o[k] || 1, o), {}));
  return Object
    .keys(a)
    .reduce((r, k) => (a[k] > 1 && b[k] > 1 && k >= rng[0] && k <= rng[1] && (wanted === 'odd' ? k % 2 : !(k % 2)) && r.push(+k), r), [])
    .sort((a, b) => a - b);
}

function findArr(arrA, arrB, rng, wanted) {
  const [a, b] = [arrA, arrB].map(a => a.reduce((o, k) => (o[k] = ++o[k] || 1, o), {}));
  Object.keys(a).forEach(k => !(a[k] > 1 && b[k] > 1 && k >= rng[0] && k <= rng[1] && (wanted === 'odd' ? k % 2 : !(k % 2))) && delete a[k]);
  return Object.keys(a).map(Number).sort((a, b) => a - b);
}