/*
This kata is about singly-linked lists. A linked list is an ordered set of data
elements, each containing a link to its successor (and sometimes its predecessor,
  known as a double linked list). You are you to implement an algorithm to find
  the kth to last element.

k will be an integer greater than or equal to 1.

Example
For example given the following linked list: a -> b -> c -> d

if k = 1 then d should be returned
if k = 2 then c should be returned
if k = 3 then b should be returned
if k = 4 then a should be returned
if k exceeds the length of the list then None(Python) or null(Java, JavaScript)
  should be returned

Each item in the linked list is a Node containing two fields:

data - the value of the node
next - pointing to the next node in the list, or to a null reference
       (null/NULL/None, depending on your language) for the last Node.

An empty list is represented as a null reference.

Preloaded class Node {
  data; //The value at the current node
  next; //The next node in the linkedList
}

Parameters:
  a linked list
  a num
Returns: value of kth to last node or null
Examples:
  searchKFromEnd(Node.build([5,2,3,1]), 2), 3
  searchKFromEnd(Node.build([5,2,3,1]), 1), 1
  searchKFromEnd(Node.build([19,18,17,16,4,3,4,2,1,65,23,3,12,34,2,6,2]), 7), 23
  searchKFromEnd(Node.build([3,2,1,5]),5), null
Pseudocode:
  initialize an empty array
  iterate over the input list
    push current node value to array
  return value in array at index length - k OR null
*/

function searchKFromEnd(linkedList, k) {
  const values = [];
  while (linkedList?.data) values.push(linkedList.data), linkedList = linkedList.next;
  return values[values.length - k] || null;
}