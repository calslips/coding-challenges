// Given an array of numbers,
// return all pairs that add up to a given sum.
// The numbers can be used more than once.

// expect an array of nums, always an array, always nums, never empty?
// expect a num (target sum), always a num, always provided?
// return a 2d array (each subarray contains the two values from input array
  //   that add up to the target sum)

  const twoSum = (arr, sum) => {
    // initialize a hash, empty obj
    // initialize a pairs var assigned to an empty arr
    // iterate over the length of the input arr
      // find the difference between sum and current num
      // if difference exists as a key in hash
        // push array containing current num and difference to pairs
      // otherwise
        // set the current num as a key within hash (value doesn't matter)
    // return pairs

    const hash = {}, pairs = [];
    for (const num of arr) {
      const diff = sum - num;
      if (diff in hash) pairs.push([num, diff]);
      else hash[num] = true;
    }
    return pairs;
  };

  // Examples
  console.log(twoSum([1, 2, 2, 3, 4], 4), [[2, 2], [3, 1]]);
  console.log(twoSum([2, 7, 11, 15], 9), [[2, 7]]);
  console.log(twoSum([3, 2, 4], 6), [[2, 4]]);
  console.log(twoSum([3, 3], 6), [[3, 3]]);