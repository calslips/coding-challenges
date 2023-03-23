/*
Write a RemoveDuplicates() function which takes a list sorted in
increasing order and deletes any duplicate nodes from the list.
Ideally, the list should only be traversed once. The head of the
resulting list should be returned.

var list = 1 -> 2 -> 3 -> 3 -> 4 -> 4 -> 5 -> null
removeDuplicates(list) === 1 -> 2 -> 3 -> 4 -> 5 -> null
If the passed in list is null/None/nil, simply return null.

Note: Your solution is expected to work on long lists.
Recursive solutions may fail due to stack size limitations.

Parameters: a list
Returns: a list
  with duplicate nodes removed
Examples:
  removeDuplicates(null), null
  removeDuplicates(new Node(23)).data, 23
  removeDuplicates(buildOneTwoThree()), buildOneTwoThree()
  removeDuplicates(buildOneTwoThreeFourFiveSix()), buildOneTwoThreeFourFiveSix()
  removeDuplicates(buildList([1, 2, 2])), buildList([1, 2])
  removeDuplicates(buildList([1, 1, 1, 1, 1])), buildList([1])
  removeDuplicates(buildList([1, 2, 3, 3, 4, 4, 5])), buildList([1, 2, 3, 4, 5])
  removeDuplicates(buildList([1, 1, 1, 1, 2, 2, 2, 2])), buildList([1, 2])
Pseudocode:
  if head is null or next is null
    return null
  initialize a hash to contain seen values
  iterate over the list
    place current value in hash
    while next value is in hash
      reassign next to nexts next
  return head
*/

function Node(data, next = null) {
  this.data = data;
  this.next = next;
}

function removeDuplicates(head) {
  if (!head || !head.next) return head;
  let seen = new Map(), current = head;
  while (current?.next) {
    seen.set(current.data, true);
    while (seen.has(current.next?.data)) current.next = current.next.next;
    current = current.next;
  }
  return head;
}