/*
The goal of this Kata is to return the greatest distance of
index positions between matching number values in an array or 0
if there are no matching values.

Example: In an array with the values [0, 2, 1, 2, 4, 1] the
greatest index distance is between the matching '1' values at
index 2 and 5. Executing greatestDistance against this array
would return 3. (i.e. 5 - 2)

greatestDistance([0, 2, 1, 2, 4, 1]), 3

Parameters: an array of nums
Returns: a num
  max diff between positions of
  matching values
Examples:
  greatestDistance([9,7,1,2,3,7,0,-1,-2]), 4
  greatestDistance([0,7,0,2,3,7,0,-1,-2]), 6
  greatestDistance([1,2,3,4]), 0
Pseudocode:
  initialize a hash as an obj with max key set to 0
  iterate over the input array from end to beginning
    if current num is not a key in hash
      set current num as key in hash with index as the value
    otherwise if current num IS a key in hash
      if current nums value in hash minus current index is greater than max
        reassign max to difference
  return max value in hash
*/

const greatestDistance = function(data) {
  return data.reduceRight((o, k, i) => (k in o ? o.max = Math.max(o.max, o[k] - i) : o[k] = i, o), {max: 0}).max;
};

const greatestDistance = function(data) {
  return data.reduceRight((o, k, i) => (k in o ? (d = o[k] - i) > o.max && (o.max = d) : o[k] = i, o), {max: 0}).max;
};