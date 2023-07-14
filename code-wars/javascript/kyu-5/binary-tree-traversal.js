/*
Given the root node of a binary tree (but not necessarily a
  binary search tree,) write three functions that will print
  the tree in pre-order, in-order, and post-order.

A Node has the following properties:

var data; // A number or string.
Node left; // Undefined if there is no left child.
Node right; // Undefined if there is no right child.

The structure of a tree looks like:

data Tree a = Nil | Node (Tree a) a (Tree a)

Pre-order means that we
1.) Visit the root.
2.) Traverse the left subtree (left node.)
3.) Traverse the right subtree (right node.)

In-order means that we
1.) Traverse the left subtree (left node.)
2.) Visit the root.
3.) Traverse the right subtree (right node.)

Post-order means that we
1.) Traverse the left subtree (left node.)
2.) Traverse the right subtree (right node.)
3.) Visit the root.

Let's say we have three Nodes.

var a = new Node("A");
var b = new Node("B");
var c = new Node("C");

a.left = b;
a.right = c;

Then, preOrder(a) should return ["A", "B", C"]
inOrder(a) should return ["B", "A", "C"]
postOrder(a) should return ["B", "C", A"]

What would happen if we did this?

var d = new Node("D");
c.left = d;

preOrder(a) should return ["A", "B", "C", "D"]
inOrder(a) should return ["B", "A", "D", "C"]
postOrder(a) should return ["B", "D", "C", "A"]

A Node has the following properties:
var data; // A number or string.
Node left; // Undefined if there is no left child.
Node right; // Undefined if there is no right child.

Parameters: a root node
Returns: an array of node data
Examples:
  const a = new Node(5);
  const b = new Node(10);
  const c = new Node(2);
  a.left = b;
  a.right = c;

  preOrder(a), [a.data, b.data, c.data]
  preOrder(b), [b.data]
  preOrder(c), [c.data]

  inOrder(a), [b.data, a.data, c.data]
  inOrder(b), [b.data]
  inOrder(c), [c.data]

  postOrder(a), [b.data, c.data, a.data]
  postOrder(b), [b.data]
  postOrder(c), [c.data]
Pseudocode:
  preOrder
    initialize a data var assigned to an empty arr
    call traverse helper fn
      pass in root node & data arr
    return data arr
  traversePreOrder
    push current node data to data arr
    if current node has a left node
      recursively call fn with left node & data arr passed in
    if current node has a right node
      recursively call fn with right node & data arr passed in

  inOrder
    initialize data var assigned to an empty arr
    call traverse helper fn
      pass in root node & data arr
    return data arr
  traverseInOrder
    if current node has a left node
      recursively call fn with left node & data arr passed in
    push current node data to data arr
    if current node has a right node
      recursively call fn with right node & data arr passed in

  postOrder
    initialize data var assigned to an empty arr
    call traverse helper fn
      pass in root node & data arr
    return data
  traversePostOrder
    if current node has a left node
      recursively call fn with left node & data arr passed in
    if current node has a right node
      recursively call fn with right ndoe & data arr passed in
    push current node data to data arr
*/

// 1.) Root node, 2.) traverse left subtree, 3.) traverse right subtree.
function preOrder(node) {
  const data = [];
  traversePreOrder(node, data);
  return data;
}
function traversePreOrder(node, data) {
  data.push(node.data);
  if (node.left) traversePreOrder(node.left, data);
  if (node.right) traversePreOrder(node.right, data);
}

// 1.) Traverse left subtree, 2.) root node, 3.) traverse right subtree.
function inOrder(node) {
  const data = [];
  traverseInOrder(node, data);
  return data;
}
function traverseInOrder(node, data) {
  if (node.left) traverseInOrder(node.left, data);
  data.push(node.data);
  if (node.right) traverseInOrder(node.right, data);
}

// 1.) Traverse left subtree, 2.) traverse right subtree, 3.) root node.
function postOrder(node) {
  const data = [];
  traversePostOrder(node, data);
  return data;
}
function traversePostOrder(node, data) {
  if (node.left) traversePostOrder(node.left, data);
  if (node.right) traversePostOrder(node.right, data);
  data.push(node.data);
}