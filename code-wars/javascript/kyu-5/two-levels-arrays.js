/*
You have to write an algorithm that flatten an arrays structure
to 2 levels. It means that each array under the second level will
be merge to its parent. Only two levels are kept.
Empty arrays are ignored.

Parameters: an array
  potentially nested
Returns: an array
  flattened to at most 2 levels
Examples:
  flattenTwoLevels([1,[2, 3, [], [4, [], 5]]]), [1,[2,3,4,5]]
  flattenTwoLevels([1, [2, 3], [4, 5, [6, 7, 8], 9, 10, [11, [12, [13, 14], 15], 16], 17], 18]),
    [1, [2, 3], [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], 18]
Pseudocode:
  define a second param, lvl, to keep track of array depth (initialized as 0)
  initialize a result array, empty
  iterate over the input array
    if current el is NOT an array
      push current el to result
    otherwise if it is an array
      if lvl is greater than 0
        spread result of recursive call to fn with el and lvl incremented into result
      otherwise
        push result of recursive call to fn with el and lvl incremented to result
  return result
*/

function flattenTwoLevels(array, lvl = 0) {
  return array.reduce((f, e) => (Array.isArray(e) && (a = flattenTwoLevels(e, lvl + 1)) ? lvl ? f.push(...a) : f.push(a) : f.push(e), f), []);
}

function flattenTwoLevels(array, lvl = 0) {
  return array.reduce((f, e) => Array.isArray(e) && (a = flattenTwoLevels(e, lvl + 1)) ? lvl ? f.concat(a) : f.concat([a]) : f.concat(e), []);
}

function flattenTwoLevels(array, lvl = 0) {
  return array.reduce((f, e) => {
    if (Array.isArray(e)) {
      const nested = flattenTwoLevels(e, lvl + 1);
      if (lvl) {
        f.push(...nested);
      } else {
        f.push(nested);
      }
    } else {
      f.push(e);
    }
    return f;
  }, []);
}