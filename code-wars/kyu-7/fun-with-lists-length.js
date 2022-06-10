/*
Implement the method length, which accepts a linked list (head), and
returns the length of the list.

For example: Given the list: 1 -> 2 -> 3 -> 4, length should return 4.

The linked list is defined as follows:

function Node(data, next = null) {
  this.data = data;
  this.next = next;
}
Note: the list may be null and can hold any type of value.

Parameters: a linked list
Returns: length of the linked list (number)
Examples:
  length(null) // 0
  length(listFromArray([1, 2, 3, 4])) // 4
Pseudocode:
  initialize length variable to value of 0 (zero)
  loop over nodes of the list
    if current node exists
      increment length
      iterate to next node
    otherwise
      break out of loop
  return length
*/

function length(head) {
  let l = 0;
  while (head) {
    l++;
    head = head.next;
  }
  return l;
}