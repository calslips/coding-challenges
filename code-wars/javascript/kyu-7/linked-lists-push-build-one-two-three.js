/*
Write push() and buildOneTwoThree() functions to easily update and
initialize linked lists. Try to use the push() function within your
buildOneTwoThree() function.

Here's an example of push() usage:
var chained = null
chained = push(chained, 3)
chained = push(chained, 2)
chained = push(chained, 1)
push(chained, 8) === 8 -> 1 -> 2 -> 3 -> null

The push function accepts head and data parameters, where head is
either a node object or null/None/nil. Your push implementation
should be able to create a new linked list/node when head is
null/None/nil.

The buildOneTwoThree function should create and return a linked
list with three nodes: 1 -> 2 -> 3 -> null
*/

function Node(data) {
  this.data = data;
  this.next = null;
}

/*
Parameters:
  head node of list
  node to add on top of list arg
Returns:
  updated list with node arg as the new head
Examples:
  push(null, 1).data, 1
  push(null, 1).next, null
  push(new Node(1), 2).data, 2
  push(new Node(1), 2).next.data, 1
Pseudocode:
  create new node with data arg
  set new nodes next prop to head arg
  return new node
*/

function push(head, data) {
  const newHead = new Node(data);
  newHead.next = head;
  return newHead;
}

/*
Parameters: none
Returns: a new linked list containing 3 nodes
  (with values of 1, 2, 3 in order from head-tail)
Examples:
  buildOneTwoThree().data, 1
  buildOneTwoThree().next.data, 2
  buildOneTwoThree().next.next.data, 3
  buildOneTwoThree().next.next.next, null
Pseudocode:
  initialize a new list with data as null
  create a loop to run from 3 to 1, decrementing by 1 each loop
    use push fn to set a new node as head of list,
    where data arg is current counter and head arg is prev head of list
    reassign new list to point to result of above push call
  return new list
*/

function buildOneTwoThree() {
  let head = null;
  for (let i = 3; i > 0; i--) head = push(head, i);
  return head;
}

function buildOneTwoThree() {
  return Array(3).fill().reduceRight((h, _, i) => push(h, ++i), null);
}