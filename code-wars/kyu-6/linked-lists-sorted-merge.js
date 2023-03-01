/*
Write a SortedMerge() function that takes two lists, each of
which is sorted in increasing order, and merges the two together
into one list which is in increasing order. SortedMerge() should
return the new list. The new list should be made by splicing
together the nodes of the first two lists. Ideally, SortedMerge()
should only make one pass through each list. SortedMerge() is
tricky to get right and it may be solved iteratively or recursively.

var first = 2 -> 4 -> 6 -> 7 -> null
var second = 1 -> 3 -> 5 -> 6 -> 8 -> null
sortedMerge(first, second) === 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 6 -> 7 -> 8 -> null

There are many cases to deal with: either 'first' or 'second' may
be null/None/nil, during processing either 'first' or 'second' may
run out first, and finally there's the problem of starting the result
list empty, and building it up while going through 'first' and 'second'.

If one of the argument lists is null, the returned list should be the
other linked list (even if it is also null). No errors need to be thrown
in SortedMerge().

Parameters: 2 asc sorted linked lists (possible null)
Returns: a single linked list
  passed in lists merged in asc order
Examples:
  sortedMerge(null, null), null
  sortedMerge(new Node(1), null), buildList([1])
  sortedMerge(null, new Node(1)), buildList([1])
  sortedMerge(new Node(23), new Node(44)), buildList([23, 44])
  sortedMerge(new Node(44), new Node(23)), buildList([23, 44])
  sortedMerge(buildList([1, 3]), buildList([2, 4])), buildList([1, 2, 3, 4])
  sortedMerge(buildList([3]), buildList([2, 4])), buildList([2, 3, 4])
  sortedMerge(buildList([3, 4, 5]), buildList([2, 9])), buildList([2, 3, 4, 5, 9])
  sortedMerge(buildList([4, 5]), buildList([1])), buildList([1, 4, 5])
  sortedMerge(buildList([1, 3, 8]), null), buildList([1, 3, 8])
  sortedMerge(buildList([1, 3, 8]), buildList([2, 4, 9])), buildList([1, 2, 3, 4, 8, 9])
  sortedMerge(buildList([2, 3, 5, 8]), buildList([2, 4, 6])), buildList([2, 2, 3, 4, 5, 6, 8])
  sortedMerge(buildList([3, 4, 5]), buildList([2])), buildList([2, 3, 4, 5])
  sortedMerge(buildList([1, 1, 1]), buildList([1, 1, 1])), buildList([1, 1, 1, 1, 1, 1])
  sortedMerge(buildList([1, 3, 5, 7, 9, 11, 13, 15]), null), buildList([1, 3, 5, 7, 9, 11, 13, 15])
  sortedMerge(buildList([1, 3, 5, 7, 9, 11, 13, 15]), buildList([1, 3, 3, 5, 6])), buildList([1, 1, 3, 3, 3, 5, 5, 6, 7, 9, 11, 13, 15])
  sortedMerge(buildList([1, 3, 5, 7, 9, 11, 13, 15]), buildList([2, 4, 6, 8, 10, 12, 14, 16])), buildList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16])
  sortedMerge(buildList([1, 3, 5, 7, 9, 11, 13, 15]), new Node(88)), buildList([1, 3, 5, 7, 9, 11, 13, 15, 88])
Pseudocode:
  if first is null return second
  if second is null return first
  if first data is greater than second data
    return new node with value as second data and next as recursive call with first and second next as args
  otherwise
    return new node with value as first data and next as recursive call with first next and second as args
*/

function Node(data = null, next = null) {
  this.data = data;
  this.next = next;
}

function sortedMerge(f, s) {
  return !f ? s : !s ? f : f.data > s.data ? new Node(s.data, sortedMerge(f, s.next)) : new Node(f.data, sortedMerge(f.next, s));
}