/*
Write a SortedIntersect() function which creates and returns a
list representing the intersection of two lists that are sorted
in increasing order. Ideally, each list should only be traversed
once. The resulting list should not contain duplicates.

var first = 1 -> 2 -> 2 -> 3 -> 3 -> 6 -> null
var second = 1 -> 3 -> 4 -> 5 -> -> 6 -> null
sortedIntersect(first, second) === 1 -> 3 -> 6 -> null

Parameters: 2 linked lists
Returns: 1 linked list
  containing nodes that exist in both inputs,
  no duplicates
Examples:
  sortedIntersect(null, null), null
  sortedIntersect(new Node(1), null), null
  sortedIntersect(null, new Node(1)), null
  sortedIntersect(new Node(23), new Node(44)), null
  sortedIntersect(new Node(44), new Node(23)), null
  sortedIntersect(new Node(12), new Node(12)), new Node(12)
  sortedIntersect(buildList([1, 3]), buildList([2, 4])), null
  sortedIntersect(buildList([4, 5]), buildList([1, 2, 3, 4, 5])), buildList([4, 5])
  sortedIntersect(buildList([2, 3, 5, 8]), buildList([2, 4, 6])), new Node(2)
  sortedIntersect(buildList([3, 4, 5]), buildList([4, 4, 4, 4, 4])), new Node(4)
Pseudocode:
  initialize head var set to null
  initialize tail var set to null
  loop over both input lists as long as the end has NOT been hit for either
    if 1st node is less than 2nd
      move 1st to next
      continue to next iteration
    if 2nd node is less than 1st
      move 2nd to next
      continue to next iteration
    if 1st node & 2nd node are equal
      if head is null (1st occurrence)
        set head to equal a new node containing 1st/2nd nodes data, with next as null
        set tail to equal head
        continue to next iteration
      if 1st/2nd nodes data are equal to tail data (skip duplicates)
        move 1st & 2nd to next
        continue to next iteration
      otherwise
        set tail next as a new node containing the 1st/2nd nodes data
        reassign tail to its next
  return head
*/

function Node(data = null, next = null) {
  this.data = data;
  this.next = next;
}

function sortedIntersect(first, second) {
  let head = null, tail = null;
  while (first && second) {
    if (first.data < second.data) first = first.next;
    else if (second.data < first.data) second = second.next;
    else {
      if (!head) head = new Node(first.data), tail = head;
      else if (first.data === tail.data) first = first.next, second = second.next;
      else tail.next = new Node(first.data), tail = tail.next;
    }
  }
  return head;
}