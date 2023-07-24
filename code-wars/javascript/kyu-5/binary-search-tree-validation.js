/*
A binary search tree is a binary tree that is ordered. This means
that if you were to convert the tree to an array using an in-order
traversal, the array would be in sorted order. The benefit gained
by this ordering is that when the tree is balanced, searching is a
logarithmic time operation, since each node you look at that isn't
the one you're searching for lets you discard half of the tree.

In this kata, you will write a function that will validate that a
given binary tree is a binary search tree. The sort order is not
predefined so it should work with either.

These are valid binary search trees:

    5
   / \
  2   7
 / \   \
1   3   9


  7
 / \
9   2

while these are not:

  1
 / \
2   3


  5
 / \
2   9
 \
  7

There are several different approaches you can take to solve this
kata. If you're not as comfortable with recursion I'd recommend
practicing that.

Note: no test case tree will contain duplicate numbers.

Parameters: a root node
Returns: a boolean
Examples:
  const T = (v, l, r) => new Node(v, l, r);

  isBST(T(5, T(2, T(1), T(3)), T(7, null, T(9)))), true
  isBST(T(7, T(9), T(2))), true
  isBST(T(1, T(2), T(3))), false
  isBST(T(5, T(2, null, T(7)), T(9))), false
Pseudocode:
  define traverse fn, takes in node and data array
    if node is NOT null
      traverse left sub tree
      push current node value to data array
      traverse right sub tree

  isBST, takes in root node of tree
    define array to contain all node values
    traverse tree, passing in root & vals array
      (traversal will populate vals array in order)
    if every preceding node's value is less than the next OR
    if every preceding node's value is greater than the next
      return true
    otherwise
      return false
*/

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

const isBST = node => {
  const vals = [];
  traverseInOrder(node, vals);
  return vals.every((v, i, a) => !i || (a[0] < a[1] ? a[--i] < v : a[--i] > v));
};

const traverseInOrder = (node, data) => {
  if (node) {
    traverseInOrder(node.left, data);
    data.push(node.value);
    traverseInOrder(node.right, data);
  }
};