/*
Implement a GetNth() function that takes a linked list and an
integer index and returns the node stored at the Nth index
position. GetNth() uses the C numbering convention that the
first node is index 0, the second is index 1, ... and so on.

So for the list 42 -> 13 -> 666, GetNth(1) should return Node(13);

getNth(1 -> 2 -> 3 -> null, 0).data === 1
getNth(1 -> 2 -> 3 -> null, 1).data === 2

The index should be in the range [0..length-1]. If it is not, or
if the list is empty, GetNth() should throw/raise an exception
(ArgumentException in C#, InvalidArgumentException in PHP,
  Exception in Java).

Parameters:
  a list of nodes
  a num (index)
Returns:
  a node
    the node at the arg index
  an error if list is null or index is greater than list length
Examples:
  const list = {data: 1, next: {data: 2, next: {data: 3, next: null}}}
  getNth(list, 0).data, 1
  getNth(list, 1).data, 2
  getNth(list, 2).data, 3
Pseudocode:
  create a loop to run from 0 until the end of the list (node data is null)
    if current counter equals target index
      return the current node
    otherwise
      reassign current node to be the next node
  if loop terminates (hit null before target index or list was null)
    throw error
*/

function Node(data) {
  this.data = data;
  this.next = null;
}

function getNth(node, index) {
  for (let i = 0; node.data !== null; node = node.next, i++) if (i === index) return node;
  throw Error;
}