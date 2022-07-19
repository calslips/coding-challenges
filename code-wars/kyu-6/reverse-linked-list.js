/*
Parameters:
  a linked list or null
Returns:
  the input linked list reversed or null
Examples:
  reverseList([1, [2, [3, null]]]) // [3, [2, [1, null]]]
  reverseList([5, [4, [3, [2, [1, null]]]]]) // [1, [2, [3, [4, [5, null]]]]]
  reverseList(null) // null
Pseudocode:
  define a parameter (array) that will contain the values of the linked list
  base case
    if list is null
      return null
  recursive case
    add current value to the front of values array
    if list.tail is null
      return terminal node where value is values[0] and tail is null
    otherwise
      return intermediate node where value is values[0] and tail is recursive call
      to reverseList, 1st arg is node.tail, 2nd arg is values array
(recursion did not work for large lists, max call stack exceeded)

  define a values paramater, default to an empty array
  while list has a value
    add current value to the end of the values array
    reassign list to list tail
  reduce the values array from left to right
    initial value set to null
    at each iteration
      return a tuple
        index 0 to equal current value
        index 1 to equal accumulating list
  return accumulated list from reduce
*/

function reverseList(list, node = null) {
  for (; list; list = list[1]) node = [list[0], node];
  return node;
}

// function reverseList(list, values = []) {
//   if (!list) return null;
//   while (list) {
//     values.push(list[0]);
//     list = list[1];
//   }
//   return values.reduce((l, v) => [v, l], null);
// }

// function reverseList(list, values = []) {
//   if (!list) return null;
//   while (list) values.push(list[0]), list = list[1];
//   return values.reduce((l, v) => [v, l], null);
// }