/*
You are given a node that is the beginning of a linked list.
This list contains a dangling piece and a loop. Your objective
is to determine the length of the loop.

// Use the `getNext' method or 'next' property to get the
   following node.
node.getNext()
node.next

Notes:
do NOT mutate the nodes!
in some cases there may be only a loop, with no dangling piece

Parameters: a node
Returns: a num
Examples:
  const A = new Node();
	A.setNext(A);
  loop_size(A), 1

  const A = new Node(), B = new Node();
	A.setNext(B), B.setNext(A);
  loop_size(A), 2

  const A = new Node(), B = new Node();
	A.setNext(B), B.setNext(B);
  loop_size(A), 1

  const A = new Node(), B = new Node(), C = new Node();
	A.setNext(B), B.setNext(C), C.setNext(A);
  loop_size(A), 3
Pseudocode:
  initialize a map
  initialize a index var assigned to 0
  create a loop to run as long as there is a node
    if map has node
      subtract its value in map from index
      return difference
    otherwise
      place node as key in map with index as value
      reassign node to be next node
      increment index
*/

function loop_size(node) {
  for (let i = 0, map = new Map(); node; i++) {
    if (map.has(node)) return i - map.get(node);
    map.set(node, i);
    node = node.getNext();
  }
}

function loop_size(node) {
  const map = new Map();
  let index = 0;
  while (node) {
    if (map.has(node)) return index - map.get(node);
    map.set(node, index++);
    node = node.getNext();
  }
}