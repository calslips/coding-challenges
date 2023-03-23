/*
Linked Lists - Sorted Insert

Write a SortedInsert() function which inserts a node into the correct location
of a pre-sorted linked list which is sorted in ascending order. SortedInsert
takes the head of a linked list and data used to create a node as arguments.
SortedInsert() should also return the head of the list.

sortedInsert(1 -> 2 -> 3 -> null, 4) === 1 -> 2 -> 3 -> 4 -> null)
sortedInsert(1 -> 7 -> 8 -> null, 5) === 1 -> 5 -> 7 -> 8 -> null)
sortedInsert(3 -> 5 -> 9 -> null, 7) === 3 -> 5 -> 7 -> 9 -> null)
The push() and buildOneTwoThree() functions do not need to be redefined.

Parameters:
  a linked list
  a number
Returns:
  a linked list with a new node containing the input number,
    inserted in the correct position according to ascending order
Examples:
  sortedInsert(1 -> 2 -> 3 -> null, 4) // 1 -> 2 -> 3 -> 4 -> null
  sortedInsert(1 -> 7 -> 8 -> null, 5) // 1 -> 5 -> 7 -> 8 -> null
  sortedInsert(3 -> 5 -> 9 -> null, 7) // 3 -> 5 -> 7 -> 9 -> null
  sortedInsert(null, 5) // 5 -> null
Pseudocode:
  basecase
    if there is no linked list
      return new Node with input number as the head data
  recursive call
    check if input number is less than current node data
      if it is,
        create new node with data as input num and next as current node
        return new node
      if it is not,
        create node with data as current node data,
        and next as recursive call to sortedInsert
          with head param being next node
          and data param being the same input number
        return new node
*/

function Node(data) {
  this.data = data;
  this.next = null;
}

function sortedInsert(head, data) {
  if (!head) return new Node(data);
  return data < head.data ? {data, next: head} : {data: head.data, next: sortedInsert(head.next, data)};
}