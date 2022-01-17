/*
Implement the method lastIndexOf (last_index_of in PHP and Python), which
accepts a linked list (head) and a value, and returns the index (zero based)
of the last occurrence of that value if exists, or -1 otherwise.

For example: Given the list: 1 -> 2 -> 3 -> 3, and the value 3,
lastIndexOf / last_index_of should return 3.

The linked list is defined as follows:

function Node(data, next = null) {
  this.data = data;
  this.next = next;
}
Note: the list may be null/None and can hold any type of value.

Parameters:
  a linked list,
  a value of any type
Returns:
  the last index (L-R) of the 2nd arg in the linked list
  -1 if the 2nd arg does NOT exist in the linked list
Examples:
  lastIndexOf(null, 17) // -1
  lastIndexOf(listFromArray([1, 2, 3]), 2) // 1
  lastIndexOf(listFromArray(['aaa', 'b', 'abc']), 'aaa') // 0
  lastIndexOf(listFromArray([17, '17', 1.2]), 17) // 0
  lastIndexOf(listFromArray([17, '17', 1.2]), '17') // 1
  lastIndexOf(listFromArray([1, 2, 3, 3]), 3) // 3
Pseudocode:
  initialize index variable assigned to -1
  iterate over the linked list, initialize i to 0 (increment each loop)
    if the current node value equals 2nd arg
      reassign index to equal i
  return index
*/

function lastIndexOf(head, value) {
  let index = -1;
  for (let i = 0; head; head = head.next, i++) {
    if (head.data === value) index = i;
  }
  return index;
}