/*
Write an AlternatingSplit() function that takes one list and
divides up its nodes to make two smaller lists. The sublists
should be made from alternating elements in the original list.
So if the original list is a -> b -> a -> b -> a -> null then
one sublist should be a -> a -> a -> null and the other should
be b -> b -> null.

var list = 1 -> 2 -> 3 -> 4 -> 5 -> null
alternatingSplit(list).first === 1 -> 3 -> 5 -> null
alternatingSplit(list).second === 2 -> 4 -> null

For simplicity, we use a Context object to store and return the
state of the two linked lists. A Context object containing the
two mutated lists should be returned by AlternatingSplit().

Parameters: a linked list
Returns: a context obj
  containing 2 linked lists
  each list contains alternating values from input list
  or an error if passed in list is null or only has a single node
Examples:
  alternatingSplit(buildOneTwo()).first.data, 1
  alternatingSplit(buildOneTwo()).first.next, null
  alternatingSplit(buildOneTwo()).second.data, 2
  alternatingSplit(buildOneTwo()).second.next, null
  alternatingSplit(buildOneTwoThree()).first.data, 1
  alternatingSplit(buildOneTwoThree()).first.next.data, 3
  alternatingSplit(buildOneTwoThree()).first.next.next, null
  alternatingSplit(buildOneTwoThree()).second.data, 2
  alternatingSplit(buildOneTwoThree()).second.next, null
  alternatingSplit(buildOneTwoThreeFourFiveSix()).first, buildList([1, 3, 5])
  alternatingSplit(buildOneTwoThreeFourFiveSix()).second, buildList([2, 4, 6])
  alternatingSplit(buildOneTwoThreeFourFiveSix()).first.next.next.next, null
  alternatingSplit(buildOneTwoThreeFourFiveSix()).second.next.next.next, null
  alternatingSplit(buildList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])).first, buildList([1, 3, 5, 7, 9, 11])
  alternatingSplit(buildList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])).second, buildList([2, 4, 6, 8, 10])
  alternatingSplit(buildList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])).first.next.next.next.next.next.next, null
  alternatingSplit(buildList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])).second.next.next.next.next.next, null
  alternatingSplit(buildList([5, 6, 1, 2, 3, 3, 3, 4, 8, 5, 4, 1])).first, buildList([5, 1, 3, 3, 8, 4])
  alternatingSplit(buildList([5, 6, 1, 2, 3, 3, 3, 4, 8, 5, 4, 1])).second, buildList([6, 2, 3, 4, 5, 1])
  alternatingSplit(buildList([5, 6, 1, 2, 3, 3, 3, 4, 8, 5, 4, 1])).first.next.next.next.next.next.next, null
  alternatingSplit(buildList([5, 6, 1, 2, 3, 3, 3, 4, 8, 5, 4, 1])).second.next.next.next.next.next.next, null
Pseudocode:
  if head is null or head.next is null
    throw error
  initialize first and second vars as null
  iterate over list, counter starts at 0, increments by 1
    when counter is even
      push current node to first
    when counter is odd
      push current node to second
  return context containing first and second lists
*/

function Node(data) {
  this.data = data;
  this.next = null;
}

function Context(first, second) {
  this.first = first;
  this.second = second;
}

function alternatingSplit(head) {
  if (!(head && head.next)) throw Error;
  const first = new Node(head.data), second = new Node(head.next.data);
  for (let i = 0, current = head.next.next, f = first, s = second; current; i++, current = current.next) {
    i % 2 ? (s.next = new Node(current.data), s = s.next) : (f.next = new Node(current.data), f = f.next);
  }
  return new Context(first, second);
}