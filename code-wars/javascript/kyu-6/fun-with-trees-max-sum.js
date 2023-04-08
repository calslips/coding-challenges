/*
You are given a binary tree. Implement the method maxSum which
returns the maximal sum of a route from root to leaf.
For example, given the following tree:
    17
   /  \
  3   -10
 /    /  \
2    16   1
         /
        13
The method should return 23, since [17,-10,16] is the route from
root to leaf with the maximal sum.

The class TreeNode is available for you:

var TreeNode = function(value, left, right) {
  this.value = value;
  this.left = left;
  this.right = right;
};

Parameters: root node of a tree
Returns: a num
  (max sum of route within input tree)
Examples:
  let root = null;
  maxSum(root), 0

  root = new TreeNode(5, new TreeNode(-22, new TreeNode(9), new TreeNode(50)), new TreeNode(11, new TreeNode(9), new TreeNode(2)));
  maxSum(root), 33
Pseudocode:
  initialize sum param to root value or 0 as default
  return the greater value after comparing
    (recursive call to fn on left node & sum + left node val as 2nd arg)
      OR (sum value if there is no left node)
    (recursive call to fn on right node & sum + right node val as 2nd arg)
      OR (sum value if there is no right node)
*/

function maxSum(root, sum = root?.value || 0) {
  return Math.max(root?.left ? maxSum(root.left, sum + root.left.value) : sum, root?.right ? maxSum(root.right, sum + root.right.value) : sum);
}