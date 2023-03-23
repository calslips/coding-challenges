/*
Your job here is to write a function (keepOrder in JS/CoffeeScript,
keep_order in Ruby/Crystal/Python, keeporder in Julia), which takes
a sorted array ary and a value val, and returns the lowest index
where you could insert val to maintain the sorted-ness of the array.
The input array will always be sorted in ascending order. It may
contain duplicates.

Do not modify the input.

Some examples:
keepOrder([1, 2, 3, 4, 7], 5) //=> 4
                      ^(index 4)
keepOrder([1, 2, 3, 4, 7], 0) //=> 0
          ^(index 0)
keepOrder([1, 1, 2, 2, 2], 2) //=> 2
                ^(index 2)

Parameters:
  a sorted array of nums
  a num
Returns: a num
  the lowest index where you can insert input num
  into the sorted array, while keeping it sorted
Examples:
  keepOrder([1, 2, 3, 4, 7], 5), 4
  keepOrder([1, 2, 3, 4, 7], 0), 0
  keepOrder([1, 1, 2, 2, 2], 2), 2
  keepOrder([1, 2, 3, 4], 5), 4
  keepOrder([1, 2, 3, 4], -1), 0
  keepOrder([1, 2, 3, 4], 2), 1
  keepOrder([1, 2, 3, 4], 0), 0
  keepOrder([1, 2, 3, 4], 1), 0
  keepOrder([1, 2, 3, 4], 2), 1
  keepOrder([1, 2, 3, 4], 3), 2
Pseudcode:
  call find index on input array
    conditional where input num is less than or equal to current num
  if less than 0 (-1 means not found) return length of input array
  otherwise return found index
*/

function keepOrder(ary, val) {
  return (i = ary.findIndex(n => val <= n)) < 0 ? ary.length : i;
}