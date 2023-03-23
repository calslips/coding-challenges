/*
Implement the method countIf (count_if in PHP and Python), which accepts
a linked list (head) and a predicate function, and returns the number of
elements which apply to the given predicate.

For example: Given the list: 1 -> 2 -> 3, and the predicate x => x >= 2,
countIf / count_if should return 2, since x >= 2 applies to both 2 and 3.

The linked list is defined as follows:

function Node(data, next = null) {
  this.data = data;
  this.next = next;
}
Note: the list may be null and can hold any type of value.

Parameters:
  a linked list
  callback function
Returns:
  the number of nodes that satisfy the condition in the callback
Examples:
  countIf(null, x => false) // 0
  countIf(listFromArray([1, 2, 3]), x => true) // 3
  countIf(listFromArray([1, 2, 3]), x => x <= 2) // 2
Pseudocode:
  basecase
    if there is no node
      return 0
  recursive case
    if current element satisfies condition in call back
      return 1 plus recursive call to countIf called with next node & callback
    otherwise
      return recursive call to countIf called with next node & callback
*/

function countIf(head, p) {
  return !head ? 0 : countIf(head.next, p) + (p(head.data) ? 1 : 0);
}

// function countIf(head, p) {
//   if (!head) return 0;
//   return countIf(head.next, p) + (p(head.data) ? 1 : 0);
// }

// function countIf(head, p) {
//   if (!head) return 0;
//   return p(head.data) ? 1 + countIf(head.next, p) : countIf(head.next, p);
// }