/*
Write an Append() function which appends one linked list to
another. The head of the resulting list should be returned.

var listA = 1 -> 2 -> 3 -> null
var listB = 4 -> 5 -> 6 -> null
append(listA, listB) === 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null

If both listA and listB are null/NULL/None/nil,
  return null/NULL/None/nil.
If one list is null/NULL/None/nil and the other is not,
  simply return the non-null/NULL/None/nil list.

Parameters: 2 lists
  either/both can be null
Returns: a list
  list a joined with list b
  or null if both are null
  or populated list if the other is null
Examples:
  append(null, null), null
  append(null, buildOneTwoThree()), buildOneTwoThree()
  append(buildOneTwoThree(), null), buildOneTwoThree()
  append(new Node(1), new Node(2)), buildOneTwo()
  append(new Node(2), new Node(1)), buildTwoOne()
  append(new Node(2), new Node(1)).next.next, null
  append(buildOneTwoThree(), buildFourFiveSix()), buildOneTwoThreeFourFiveSix()
  append(buildFourFiveSix(), buildOneTwoThree()), buildFourFiveSixOneTwoThree()
  append(buildFourFiveSix(), buildOneTwoThree()).next.next.next.next.next.next, null
Pseudocode:
  if both lists are null
    return null
  if list a is null
    return list b
  if list b is null
    return list a
  target the 2nd to last node of list a
    set its next prop to the head of list b
  return list a
*/

function Node(data) {
  this.data = data;
  this.next = null;
}

function append(listA, listB) {
  if (!(listA || listB)) return null;
  if (!listA && listB) return listB;
  if (listA && !listB) return listA;
  let last = listA;
  while (last.next) last = last.next;
  return last.next = listB, listA;
}