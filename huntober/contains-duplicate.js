// Given an integer array nums,
// return true if any value appears at least twice in the array,
// and return false if every element is distinct.

// expect an array of nums, always has nums? no other data type, never empty
// return a boolean
// true if every num in the input array is NOT unique
// otherwise return false (all are unique)

// runtime beats 79.92%, memory beats 28.94%
const containsDuplicate = function(nums) {
  // convert input array into a set (keeps only uniques)
  // compare all values in input arr with value in uniques arr at same index
    // if they are ever not equal
      // return true
    // otherwise if they are all equal
      // return false
    const uniques = [...new Set(nums)];
    return nums.some((n, i) => n !== uniques[i]);
};

// runtime beats 19.62%, memory beats 5.2%
const containsDuplicate = function(nums) {
  // initialize a hash
  // iterate over nums
    // if num exists as a key in has
      // increment its value
    // otherwise
      // initialize its value as 1
  // find the max value within hash
  // if max value in hash is greater than 1
    // return true
  // otherwise
    // return false

  return Math.max(...Object.values(nums.reduce((o, k) => (o[k] = ++o[k] || 1, o), {}))) > 1;
};

// runtime beats 58.10%, memory beats 25.6%
const containsDuplicate = function(nums) {
  const hash = {};
  for (const num of nums) {
    if (hash[num]) return true;
    else hash[num] = 1;
  }
  return false;
}

// Examples

// Input: nums = [1,2,3,1]
// Output: true
console.log(containsDuplicate([1, 2, 3, 1]), true);

// Input: nums = [1,2,3,4]
// Output: false
console.log(containsDuplicate([1, 2, 3, 4]), false);

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]), true);