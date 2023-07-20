import java.util.Queue;
import java.util.LinkedList;

/*
You are given a binary tree. Implement the method findMax which
returns the maximal node valuein the tree.

For example, maximum in the following Tree is 11.

              7
            /   \
           /     \
          5       2
           \       \
           6        11
           /\      /
          1  9   4

Note:
Tree node values range is Integer MIN VALUE - Integer MAX VALUE
constants.
Tree can unbalanced and unsorted.
Root node is always not null.

You are given a tree node class as follows:

class TreeNode {
  TreeNode  left;
  TreeNode  right;
  int value;
}

Parameters: root tree node
Returns: an int
Examples:
  TreeNode root = TreeNode.leaf(-1);
  FindMaxValueInTree.findMax(root), -1

  TreeNode root = TreeNode.leaf(1).withLeftLeaf(2);
  FindMaxValueInTree.findMax(root), 2

  TreeNode left = TreeNode.leaf(-22).withLeaves(9, 50);
  TreeNode right = TreeNode.leaf(11).withLeaves(9, 2);
  TreeNode root = TreeNode.join(5, left, right);
  FindMaxValueInTree.findMax(root), 50

  TreeNode left = TreeNode.leaf(50).withLeaves(-100, -10);
  TreeNode right = TreeNode.leaf(40);
  TreeNode root = TreeNode.join(6, left, right);
  FindMaxValueInTree.findMax(root), 50

  TreeNode left = TreeNode.leaf(-50).withLeaves(-100, -10);
  TreeNode right = TreeNode.leaf(-40);
  TreeNode root = TreeNode.join(-600, left, right);
  FindMaxValueInTree.findMax(root), -10
Pseudocode:
  initialize a queue to hold child nodes of current node to traverse
    input node will be 1st element on queue
  initialize a max var to contain highest val in tree
    assigned to MIN_VALUE
  create a loop to run as long as queue is NOT empty
    if current node val is greater than max
      reassign max to equal current node val
    if there is a left node
      add left node to queue
    if there is a right node
      add right node to queue
    remove current node from queue
  return max
*/

class FindMaxValueInTree {
  static int findMax(TreeNode root) {
    Queue<TreeNode> nodes = new LinkedList<>();
    nodes.offer(root);
    int max = Integer.MIN_VALUE;
    while (!nodes.isEmpty()) {
      TreeNode current = nodes.poll();
      if (current.value > max) max = current.value;
      if (current.left != null) nodes.offer(current.left);
      if (current.right != null) nodes.offer(current.right);
    }
    return max;
  }
}

class TreeNode {
  TreeNode  left;
  TreeNode  right;
  int value;
}