/*
Write a MoveNode() function which takes the node from the front
of the source list and moves it to the front of the destintation
list. You should throw an error when the source list is empty.
For simplicity, we use a Context object to store and return the
state of the two linked lists. A Context object containing the
two mutated lists should be returned by moveNode.

MoveNode() is a handy utility function to have for later problems.

JavaScript
var source = 1 -> 2 -> 3 -> null
var dest = 4 -> 5 -> 6 -> null
moveNode(source, dest).source === 2 -> 3 -> null
moveNode(source, dest).dest === 1 -> 4 -> 5 -> 6 -> null

Parameters: 2 linked lists
Returns: a context obj
  containing 2 linked lists
  (1st node from source becomes new head of destination)
  or throws an error if source is empty
Examples:
  moveNode(buildOneTwoThree(), null), new Context(buildList([2, 3]), new Node(1))
  moveNode(buildOneTwoThree(), buildOneTwoThree()), new Context(buildList([2, 3]), buildList([1, 1, 2, 3]))
  moveNode(buildOneTwoThreeFourFiveSix(), buildOneTwoThreeFourFiveSix()), new Context(buildList([2, 3, 4, 5, 6]), buildList([1, 1, 2, 3, 4, 5, 6]))
  moveNode(buildList([1, 2, 3, 4, 5, 6, 7]), buildList([4, 5, 6, 7])), new Context(buildList([2, 3, 4, 5, 6, 7]), buildList([1, 4, 5, 6, 7]))
Pseudocode:
  if source is null
    throw error
  push source head data to the front of dest
  set source head to next node
  return new context containing modified source and dest
*/

function Node(data, next = null) {
  this.data = data;
  this.next = next;
}

function Context(source, dest) {
  this.source = source;
  this.dest = dest;
}

function moveNode(source, dest) {
  if (!source) throw Error;
  return new Context(source.next, push(dest, source.data));
}