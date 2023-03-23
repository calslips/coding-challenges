/*
Preloaded for you is a class, struct or derived data type Node
( depending on the language ) used to construct linked lists
in this Kata:

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

Create a function stringify which accepts an argument list / $list
and returns a string representation of the list. The string
representation of the list starts with the value of the current Node,
specified by its data / $data / Data property, followed by a whitespace
character, an arrow and another whitespace character (" -> "), followed
by the rest of the list. The end of the string representation of a list
must always end with null / NULL / None / nil / nullptr / null() ( all
  caps or all lowercase depending on the language you are undertaking
  this Kata in ).

Note that null / NULL / None / nil / nullptr / null() itself is also
considered a valid linked list. In that case, its string representation
would simply be "null" / "NULL" / "None" / "nil" / "nullptr" / @"NULL" / "null()"
( again, depending on the language ).

For the simplicity of this Kata, you may assume that any Node in this Kata
may only contain non-negative integer values. For example, you will not
encounter a Node whose data / $data / Data property is "Hello World".

Parameters: a singly linked list (values will only be positive integers)
Returns: a string containing each value within each node, separated by ' -> '
  terminates with 'null'
Examples:
  stringify(new Node(1, new Node(2, new Node(3)))) // "1 -> 2 -> 3 -> null"
  stringify(new Node(0, new Node(1, new Node(4, new Node(9, new Node(16)))))) // "0 -> 1 -> 4 -> 9 -> 16 -> null"
  stringify(null) // "null"
Pseudocode:
  base case is when list equals null
    return string representation of null
  otherwise return template literal containing
    current node data
    string arrow (' -> ')
    recursive call of stringify with the next node as its argument
*/

function stringify(list) {
  return list === null ? `${list}` : `${list.data} -> ${stringify(list.next)}`;
}

// function stringify(list) {
//   if (list === null) return `${list}`;
//   return `${list.data} -> ${stringify(list.next)}`;
// }