/*
Write a Recursive Reverse() function that recursively reverses a
linked list. You may want to use a nested function for the
recursive calls.

var list = 2 -> 1 -> 3 -> 6 -> 5 -> null
reverse(list) === 5 -> 6 -> 3 -> 1 -> 2 -> null

Parameters: a linked list or null
Returns: a linked list (same list in reverse order) or null
Examples:
  reverse(null), null
  reverse([1]), [1]
  reverse([1, 3]), [3, 1]
  reverse([3, 1, 8]), [8, 1, 3]
  reverse([1, 3, 5, 7, 9, 11, 13, 15]), [15, 13, 11, 9, 7, 5, 3, 1]
Pseudocode:
  base case
    if head of list is null
      return last head (which is now represented by prev)
  recursive case
    current next to equal prev
    prev to equal current head
    new head to equal old next
    recursively call reverse fn with new head and new prev
*/

function Node(data = null, next = null) {
  this.data = data;
  this.next = next;
}

function reverse(head, prev = null) {
  return head ? reverse(head.next, (head.next = prev, head)) : prev;
}