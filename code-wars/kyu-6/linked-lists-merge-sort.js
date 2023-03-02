/*
Write a MergeSort() function which recursively sorts a list in
ascending order. Note that this problem requires recursion.
Given FrontBackSplit() and SortedMerge(), you can write a
classic recursive MergeSort(). Split the list into two smaller
lists, recursively sort those lists, and finally merge the two
sorted lists together into a single sorted list. Return the list.

var list = 4 -> 2 -> 1 -> 3 -> 8 -> 9 -> null
mergeSort(list) === 1 -> 2 -> 3 -> 4 -> 8 -> 9 -> null

FrontBackSplit() and SortedMerge() need not be redefined.
You may call these functions in your solution.

These function names will depend on the accepted naming
conventions of language you are using.
In Python, FrontBackSplit() is actually front_back_split().
In JavaScript, it is frontBackSplit(), etc.

Paremters: a linked list
Returns: a linked list (sorted asc)
Examples:
  mergeSort(null), null
  mergeSort(buildList([1])), buildList([1])
  mergeSort(buildList([1, 3])), buildList([1, 3])
  mergeSort(buildList([3, 1])), buildList([1, 3])
  mergeSort(buildList([1, 3, 8])), buildList([1, 3, 8])
  mergeSort(buildList([8, 3, 1])), buildList([1, 3, 8])
  mergeSort(buildList([1, 8, 3])), buildList([1, 3, 8])
  mergeSort(buildList([3, 8, 1])), buildList([1, 3, 8])
  mergeSort(buildList([1, 3, 5, 7, 9, 11, 13, 15])), buildList([1, 3, 5, 7, 9, 11, 13, 15])
  mergeSort(buildList([15, 13, 11, 9, 7, 5, 3, 1])), buildList([1, 3, 5, 7, 9, 11, 13, 15])
  mergeSort(buildList([9, 1, 7, 3, 5, 15, 13, 11])), buildList([1, 3, 5, 7, 9, 11, 13, 15])
  mergeSort(buildList([1, 1, 1, 1, 1, 1, 1, 1])), buildList([1, 1, 1, 1, 1, 1, 1, 1])
Pseudocode:
  base case
    if list is null or contains only 1 node
      return list
  recursive case
    initialize left and right empty nodes
    split input list into left and right lists
    recursively call mergesort for both left and right sides
    sort & merge left and right
    return merged list
*/

function Node(data = null, next = null) {
  this.data = data;
  this.next = next;
}

function mergeSort(list) {
  if (!(list && list.next)) return list;
  const left = new Node(), right = new Node();
  frontBackSplit(list, left, right);
  return sortedMerge(mergeSort(left), mergeSort(right));
}