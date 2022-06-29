/**
 * Given the node object:

Node:
  val: <int>,
  left: <Node> or null,
  right: <Node> or null
write a function compare(a, b) which compares the two trees defined by
Nodes a and b and returns true if they are equal in structure and in
value and false otherwise.

Examples:

1       1
| \     | \
2  3    2  3
=> true

1       1
| \     | \
3  3    2  3
=> false (values not the same 2 != 3)

1       1
| \     |
2  3    2
        |
        3
=> false (structure not the same)
 */

function compare(a, b) {
  return a === b || (a && a.val) === (b && b.val) && compare(a.left, b.left) && compare(a.right, b.right);
}

// function compare(a, b) {
//   return (a === b) ? true : (a && a.val) === (b && b.val) ? compare(a.left, b.left) && compare(a.right, b.right) : false;
// }

// function compare(a, b) {
//   if (a === b) {
//     return true;
//   } else if ((a && a.val) === (b && b.val)) {
//     return compare(a.left, b.left) && compare(a.right, b.right);
//   }
//   return false;
// }