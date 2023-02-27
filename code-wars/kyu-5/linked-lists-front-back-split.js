/*
Write a FrontBackSplit() function that takes one list and splits
it into two sublists — one for the front half, and one for the
back half. If the number of elements is odd, the extra element
should go in the front list. For example, FrontBackSplit() on the
list 2 -> 3 -> 5 -> 7 -> 11 -> null should yield the two lists
2 -> 3 -> 5 -> null and 7 -> 11 -> null. Getting this right for
all the cases is harder than it looks. You will probably need
special case code to deal with lists of length < 2 cases.

var source = 1 -> 3 -> 7 -> 8 -> 11 -> 12 -> 14 -> null
var front = new Node()
var back = new Node()
frontBackSplit(source, front, back)
front === 1 -> 3 -> 7 -> 8 -> null
back === 11 -> 12 -> 14 -> null

You should throw an error if any of the arguments to
FrontBackSplit are null or if the source list has < 2 nodes.

Hint. Probably the simplest strategy is to compute the length of
the list, then use a for loop to hop over the right number of
nodes to find the last node of the front half, and then cut the
list at that point. There is a trick technique that uses two
pointers to traverse the list. A "slow" pointer advances one
nodes at a time, while the "fast" pointer goes two nodes at a
time. When the fast pointer reaches the end, the slow pointer
will be about half way. For either strategy, care is required to
split the list at the right point.

Parameters:
  a list
  2 nodes (empty?)
Returns: no return?
  input list is broken into front half & back half portions
  (started from the empty passed in nodes front/back)
  should throw error if
    list length < 2 or either front/back nodes are null
Examples:
  let source = buildOneTwo(), front = new Node(), back = new Node();
  frontBackSplit(source, front, back), front = new Node(1), back = new Node(2);

  source = buildOneTwoThree();
  frontBackSplit(source, front, back), front = buildList([1, 2]), back = buildList([3]);

  source = buildOneTwoThreeFourFiveSix();
  frontBackSplit(source, front, back), front = buildList([1, 2, 3]), back = buildList([4, 5, 6]);

  source = buildList([3, 4, 6, 1, 2, 4, 2, 0, 3, 2, 6]);
  frontBackSplit(source, front, back), front = buildList([3, 4, 6, 1, 2, 4]), back = buildList([2, 0, 3, 2, 6]);
Pseudocode:
  if list is null or next value is null or front is null or back is null
    throw error
  initalize a values var assigned to an empty array
  iterate over list
    pass current node data to values array
    move to next node
  iterate over values array
  (back pointer starts at mid point (length / 2, ceiled)
  front pointer starts at 0
  continue loop as long as front is less than mid point
  increment back and front by 1 each iteration)
    assign current front data to value at front index of values
    as long as back index is less than values length
      assign current back data to value at back index of values
    if there are more values to be split
      set next of front/back to a new node and
      reassign front/back to be that next node
*/

function Node(data = null, next = null) {
  this.data = data;
  this.next = next;
}

function frontBackSplit(source, front, back) {
  if (!(source && source.next && front && back)) throw Error;
  const values = [];
  while (source) values.push(source.data), source = source.next;
  for (let f = 0, m = Math.ceil(values.length / 2), b = m; f < m; f++, b++) {
    front.data = values[f];
    if (b < values.length) back.data = values[b];
    if (f < m - 1) front.next = new Node(), front = front.next;
    if (b < values.length - 1) back.next = new Node(), back = back.next;
  }
}