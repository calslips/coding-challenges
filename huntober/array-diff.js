// Implement a difference function, which subtracts one list from another and returns the result.
// It should remove all values from list a, which are present in list b keeping their order.
// If a value is present in b, all of its occurrences must be removed from the other:

// expect 2 arrays, can be empty or contain any amount of nums
// return should be an array containing nums from a1 that are NOT in a2
// if a1 is empty return empty? if a2 is empty return a1 untouched

function arrayDiff(a1, a2) {
  // if a1 OR a2 is empty
    // return a1
  // filter a1 array
    // if current element exists in a2
      // remove it
    // otherwise
      // keep it in
  // return filtered array

  if (!(a1.length && a2.length)) return a1;
  return a1.filter(n => !a2.includes(n));
}

console.log(arrayDiff([1, 2], [1]), [2])
console.log(arrayDiff([1, 2, 2, 2, 3], [2]), [1,3])
console.log(arrayDiff([], [4, 5]), [])
console.log(arrayDiff([3, 4], [3]), [4])
console.log(arrayDiff([1, 8, 2], []), [1, 8, 2])