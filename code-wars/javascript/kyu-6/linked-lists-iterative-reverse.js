/*
Write an iterative Reverse() function that reverses a linked list.
Ideally, Reverse() should only need to make one pass of the list.

var list = 2 -> 1 -> 3 -> 6 -> 5 -> null
reverse(list)
list === 5 -> 6 -> 3 -> 1 -> 2 -> null

Parameters: a linked list
Returns: no return (reverse input linked list in place)
Examples:
  reverse(null), null
  reverse(buildList([1])), buildList([1])
  reverse(buildList([1, 3])), buildList([3, 1])
  reverse(buildList([1, 3, 8])), buildList([8, 3, 1])
Pseudocode:
  if list head or list next are null
    return (exit fn, do nothing)
  initialize a reversed var as null
  initialize current as list
  iterate over current as long as current is NOT null
    reassign reversed to be new node with current list data as data and old reversed as next
    reassign current to be current next
  assign list data to revesed data
  assigne list next to revesed next
*/

function Node(data = null, next = null) {
  this.data = data;
  this.next = next;
}

function reverse(list) {
  if (!(list && list.next)) return;
  let reversed = null, current = list;
  while (current) reversed = new Node(current.data, reversed), current = current.next;
  list.data = reversed.data, list.next = reversed.next;
}