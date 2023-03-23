/**
 * Linked Lists - Length & Count

Implement Length() to count the number of nodes in a linked list.
length(null) => 0
length(1 -> 2 -> 3 -> null) => 3

Implement Count() to count the occurrences of an integer in a linked list.
count(null, 1) => 0
count(1 -> 2 -> 3 -> null, 1) => 1
count(1 -> 1 -> 1 -> 2 -> 2 -> 2 -> 2 -> 3 -> 3 -> null, 2) => 4
 */

function Node(data) {
  this.data = data;
  this.next = null;
}

/*
Parameters: a linked list
Returns: the number of nodes in the linked list
Examples:
  length(null) // 0
  length(1 -> 2 -> 3 -> null) // 3
  length(99 -> null) // 1
Pseudocode:
  initialize a length variable assigned to 0
  if there is a linked list
    loop over the linked list
      increment length for each iteration that the node holds a value
  return length
*/

function length(head) {
  let length = 0;
  while (head) {
    length++;
    head = head.next;
  }
  return length;
}

/*
Parameters:
  a linked list,
  a number (to count the occurences of in the linked list)
Returns:
  the number of occurences of the 2nd arg within the linked list
Examples:
  count(null, 1) // 0
  count(1 -> 2 -> 3 -> null, 1) // 1
  count(1 -> 1 -> 1 -> 2 -> 2 -> 2 -> 2 -> 3 -> 3 -> null, 2) // 4
Pseudocode:
  initialize count variable assigned to 0
  as long as node exists
    loop over nodes of the linked list
      if current node data equals 2nd arg
        increment count
  return count
*/

function count(head, data) {
  let count = 0;
  while (head) {
    if (head.data === data) count++;
    head = head.next;
  }
  return count;
}