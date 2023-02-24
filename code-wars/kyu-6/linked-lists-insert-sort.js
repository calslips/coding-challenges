/*
Write an InsertSort() function which rearranges nodes in a linked
list so they are sorted in increasing order. You can use the
SortedInsert() function that you created in the "Linked Lists -
Sorted Insert" kata below. The InsertSort() function takes the
head of a linked list as an argument and must return the head of
the linked list.

var list = 4 -> 3 -> 1 -> 2 -> null
insertSort(list) === 1 -> 2 -> 3 -> 4 -> null

If the passed in head node is null or a single node, return null
or the single node, respectively. You can assume that the head node
will always be either null, a single node, or a linked list
consisting of multiple nodes.

The push(), buildOneTwoThree(), and sortedInsert() functions need
not be redefined.

Parameters: head node of list
Returns: head node of sorted list
Examples:
  insertSort(new Node(5)).data, 5
  insertSort(buildOneTwo()).data, 1
  insertSort(buildOneTwo()).next.data, 2
  insertSort(buildOneTwo()).next.next, null
  insertSort(buildTwoOne()).data, 1
  insertSort(buildTwoOne()).next.data, 2
  insertSort(buildTwoOne()).next.next, null
  insertSort(buildOneTwoThree()).data, 1
  insertSort(buildOneTwoThree()).next.data, 2
  insertSort(buildOneTwoThree()).next.next.data, 3
  insertSort(buildOneTwoThree()).next.next.next, null
  insertSort(buildThreeTwoOne()).data, 1
  insertSort(buildThreeTwoOne()).next.data, 2
  insertSort(buildThreeTwoOne()).next.next.data, 3
  insertSort(buildThreeTwoOne()).next.next.next, null
  insertSort(buildNodes([4, 8, 1, 3, 2, 9, 6, 5, 9, 2])).data, 1
  insertSort(buildNodes([4, 8, 1, 3, 2, 9, 6, 5, 9, 2])).next.data, 2
  insertSort(buildNodes([4, 8, 1, 3, 2, 9, 6, 5, 9, 2])).next.next.data, 2
  insertSort(buildNodes([4, 8, 1, 3, 2, 9, 6, 5, 9, 2])).next.next.next.data, 3
  insertSort(buildNodes([4, 8, 1, 3, 2, 9, 6, 5, 9, 2])).next.next.next.next.data, 4
  insertSort(buildNodes([4, 8, 1, 3, 2, 9, 6, 5, 9, 2])).next.next.next.next.next.data, 5
  insertSort(buildNodes([4, 8, 1, 3, 2, 9, 6, 5, 9, 2])).next.next.next.next.next.next.data, 6
  insertSort(buildNodes([4, 8, 1, 3, 2, 9, 6, 5, 9, 2])).next.next.next.next.next.next.next.data, 8
  insertSort(buildNodes([4, 8, 1, 3, 2, 9, 6, 5, 9, 2])).next.next.next.next.next.next.next.next.data, 9
  insertSort(buildNodes([4, 8, 1, 3, 2, 9, 6, 5, 9, 2])).next.next.next.next.next.next.next.next.next.data, 9
  insertSort(buildNodes([4, 8, 1, 3, 2, 9, 6, 5, 9, 2])).next.next.next.next.next.next.next.next.next.next, null
Pseudocode:
  if head is null return head
  initialize a sorted var to be a new node made from head data
  create a loop to run as long as head next is NOT null
    reassign sorted to equal sortedInsert fn called on sorted and head next data
    reassign head to head next
  return sorted
*/

function Node(data, next = null) {
  this.data = data;
  this.next = next;
}

function insertSort(head) {
  if (head === null) return head;
  let sorted = new Node(head.data);
  while (head.next !== null) sorted = sortedInsert(sorted, head.next.data), head = head.next;
  return sorted;
}