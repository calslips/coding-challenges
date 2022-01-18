/*
Implement the method indexOf (index_of in PHP), which accepts a linked list
(head) and a value, and returns the index (zero based) of the first occurrence
of that value if exists, or -1 otherwise.

For example: Given the list: 1 -> 2 -> 3 -> 3, and the value 3,
indexOf / index_of should return 2.

The linked list is defined as follows:

function Node(data, next = null) {
  this.data = data;
  this.next = next;
}
Note: the list may be null and can hold any type of value.

Parameters:
  a linked list,
  a value (any primitive data type?)
Returns:
  the index if the FIRST occurrence of the 2nd arg in the linked list,
  -1 if it doesn't exist within the linked list
Examples:
  indexOf(null, 17) // -1
  indexOf(listFromArray([1, 2, 3]), 2) // 1
  indexOf(listFromArray(['aaa', 'b', 'abc']), 'aaa') // 0
  indexOf(listFromArray([17, '17', 1.2]), 17) // 0
  indexOf(listFromArray([17, '17', 1.2]), '17') // 1
  indexOf(listFromArray([1, 2, 3, 3]), 3) // 2
Pseudocode:
  initialize index variable assigned to 0
  while the linked list exists
    loop over each node
      if current node value equals 2nd arg
        return index
  if execution finishes loop (value is NOT in array), return -1
*/

function indexOf(head, value) {
  let index = 0;
  while (head) {
    if (head.data === value) return index;
    index++;
    head = head.next;
  }
  return -1;
}