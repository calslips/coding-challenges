/*
Implement the method filter, which accepts a linked list (head) and a predicate
function, and returns a new linked list (head) which only contains the elements
which apply to the given predicate.

For example: Given the list: 1 -> 2 -> 3, and the predicate x => x >= 2,
filter should return 2 -> 3, since x >= 2 applies to both 2 and 3.

The linked list is defined as follows:

function Node(data, next = null) {
  this.data = data;
  this.next = next;
}
Note: the list may be null.

Parameters:
  a linked list
  a callback function
Returns:
  a new linked list
    only containing elements that satisfy the condition in the callback
Examples:
  filter(new Node(1, new Node(2, new Node(3))), x => true)
    // new Node(1, new Node(2, new Node(3)))
  filter(new Node(1, new Node(2, new Node(3))), x => x <= 2)
    // new Node(1, new Node(2))
  filter(new Node(1, new Node(2, new Node(3))), x => x === 1)
    // new Node(1)
Pseudocode:
  base case
    if theres no head
      return null
  recursive case
    check if the current node's data satisfies the call back condition
      if it does
        return a new node containing the current data,
          and next pointing to a recursive call to filter()
          with node's next value as an arg and the callback
      if it does NOT
        return a recursive call to filter() with node's next value as an arg and the callback
*/

function filter(head, p) {
  if (!head) return null;
  return p(head.data) ? new Node(head.data, filter(head.next, p)) : filter(head.next, p);
}