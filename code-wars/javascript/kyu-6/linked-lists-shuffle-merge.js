/*
Write a ShuffleMerge() function that takes two lists and merges
their nodes together to make one list, taking nodes alternately
between the two lists.
So ShuffleMerge() with 1 -> 2 -> 3 -> null and 7 -> 13 -> 1 -> null
should yield 1 -> 7 -> 2 -> 13 -> 3 -> 1 -> null. If either list
runs out, all the nodes should be taken from the other list.
ShuffleMerge() should return the new list. The solution depends on
being able to move nodes to the end of a list.

var first = 3 -> 2 -> 8 -> null
var second = 5 -> 6 -> 1 -> 9 -> 11 -> null
shuffleMerge(first, second) === 3 -> 5 -> 2 -> 6 -> 8 -> 1 -> 9 -> 11 -> null

If one of the argument lists is null, the returned list should be
the other linked list (even if it is also null). No errors need to
be thrown in ShuffleMerge().

Parameters: 2 linked lists (can be null)
Returns: a single list
  the 2 passed in lists merged,
  alternating nodes when present
Examples:
  shuffleMerge(null, null), null
  shuffleMerge(new Node(1), null), buildList([1])
  shuffleMerge(null, new Node(1)), buildList([1])
  shuffleMerge(new Node(23), new Node(44)), buildList([23, 44])
  shuffleMerge(buildList([1, 3]), buildList([2, 4])), buildList([1, 2, 3, 4])
  shuffleMerge(buildList([3]), buildList([2, 4])), buildList([3, 2, 4])
  shuffleMerge(buildList([3, 4, 5]), buildList([9, 2])), buildList([3, 9, 4, 2, 5])
  shuffleMerge(buildList([4, 5]), buildList([1])), buildList([4, 1, 5])
  shuffleMerge(buildList([1, 3, 8]), null), buildList([1, 3, 8])
  shuffleMerge(buildList([1, 3, 8]), buildList([2, 4, 9])), buildList([1, 2, 3, 4, 8, 9])
  shuffleMerge(buildList([3, 8, 5, 1]), buildList([2, 4, 6])), buildList([3, 2, 8, 4, 5, 6, 1])
  shuffleMerge(buildList([3, 4, 5]), buildList([2])), buildList([3, 2, 4, 5])
  shuffleMerge(buildList([1, 3, 5, 7, 9, 11, 13, 15]), null), buildList([1, 3, 5, 7, 9, 11, 13, 15])
  shuffleMerge(buildList([1, 3, 5, 7, 9, 11, 13, 15]), buildList([2, 4, 6, 8, 10, 12, 14, 16])), buildList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16])
  shuffleMerge(buildList([1, 3, 5, 7, 9, 11, 13, 15]), new Node(88)), buildList([1, 88, 3, 5, 7, 9, 11, 13, 15])
Pseudocode:
  if both lists are null
    return null
  initialize merged as first data or second data if first is null
    (if first data was used, reassign first to equal first next,
    otherwise if second data was used, reassign second to equal second next)
  initialize current as merged
  while either first or second are NOT null
    if second is NOT null
      set current next to second data
      set current to current next
      set second to second next
    if first is NOT null
      set current next to first data
      set current to current next
      set first to first next
  return merged
*/

function Node(data = null, next = null) {
  this.data = data;
  this.next = next;
}

function shuffleMerge(first, second) {
  if (!(first || second)) return null;
  let merged = new Node (first ? first.data : second.data), current = merged;
  first ? first = first.next : second = second.next;
  while (first || second) {
    if (second) current.next = second, current = current.next, second = second.next;
    if (first) current.next = first, current = current.next, first = first.next;
  }
  return merged;
}