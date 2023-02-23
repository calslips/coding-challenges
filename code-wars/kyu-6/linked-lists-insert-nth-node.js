/*
Implement an InsertNth() function (insert_nth() in PHP) which can
insert a new node at any index within a list.

InsertNth() is a more general version of the Push() function that
we implemented in the first kata listed below. Given a list, an
index 'n' in the range 0..length, and a data element, add a new
node to the list so that it has the given index. InsertNth()
should return the head of the list.

insertNth(1 -> 2 -> 3 -> null, 0, 7) === 7 -> 1 -> 2 -> 3 -> null)
insertNth(1 -> 2 -> 3 -> null, 1, 7) === 1 -> 7 -> 2 -> 3 -> null)
insertNth(1 -> 2 -> 3 -> null, 3, 7) === 1 -> 2 -> 3 -> 7 -> null)

You must throw/raise an exception (ArgumentOutOfRangeException in C#,
  InvalidArgumentException in PHP) if the index is too large.

Parameters:
  head node
  index to insert new node
  data for new node to insert
Returns:
  head node
Examples:
  insertNth(null, 0, 12).data, 12
  insertNth(null, 0, 12).next, null

  buildOneTwoThree() = {data: 1, next: {data: 2, next: {data: 3, next: null}}};

  insertNth(buildOneTwoThree(), 0, 23).data, 23
  insertNth(buildOneTwoThree(), 0, 23).next.data, 1
  insertNth(buildOneTwoThree(), 0, 23).next.next.data, 2
  insertNth(buildOneTwoThree(), 0, 23).next.next.next.data, 3
  insertNth(buildOneTwoThree(), 0, 23).next.next.next.next, null

  insertNth(buildOneTwoThree(), 1, 23).data, 1
  insertNth(buildOneTwoThree(), 1, 23).next.data, 23
  insertNth(buildOneTwoThree(), 1, 23).next.next.data, 2
  insertNth(buildOneTwoThree(), 1, 23).next.next.next.data, 3
  insertNth(buildOneTwoThree(), 1, 23).next.next.next.next, null

  insertNth(buildOneTwoThree(), 2, 23).data, 1
  insertNth(buildOneTwoThree(), 2, 23).next.data, 2
  insertNth(buildOneTwoThree(), 2, 23).next.next.data, 23
  insertNth(buildOneTwoThree(), 2, 23).next.next.next.data, 3
  insertNth(buildOneTwoThree(), 2, 23).next.next.next.next, null

  insertNth(buildOneTwoThree(), 3, 23).data, 1
  insertNth(buildOneTwoThree(), 3, 23).next.data, 2
  insertNth(buildOneTwoThree(), 3, 23).next.next.data, 3
  insertNth(buildOneTwoThree(), 3, 23).next.next.next.data, 23
  insertNth(buildOneTwoThree(), 3, 23).next.next.next.next, null

  insertNth(buildOneTwoThree(), 4, 23), throw error
Pseudocode:
  initialize new node as node created with data arg passed in
  create a loop to run from 0 through length of list,
  initialize current node as head
  increment counter by 1
  reassign current node to be next node
    if index is 0
      set new node next to current node
      return new node
    otherwise if counter equals index - 1
      set temp to current node next
      set current node next to new node
      and new node next to temp
      return head
    otherwise if current node next is ever null
    (index to insert is out of range)
      throw error
*/

function Node(data) {
  this.data = data;
  this.next = null;
}

function insertNth(head, index, data) {
  const newNode = new Node(data);
  for (let i = 0, currNode = head; ; i++, currNode = currNode.next) {
    if (!index) return newNode.next = currNode, newNode;
    else if (i === index - 1) return [newNode.next, currNode.next] = [currNode.next, newNode], head;
    else if (currNode.next === null) throw Error;
  }
}