/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}

examples:
  Input: root = [3,9,20,null,null,15,7]
  Output: 3

  Input: root = [1,null,2]
  Output: 2
 */

// runtime beats 95.52%, memory beats 12.33%
var maxDepth = function(root) {
  // base case
      // if there is no root
          // return 0
  // recursive case
      // find max value from recursive fn call to left node & recursive call to right node
      // return max value incremented by 1

  return root ? Math.max(maxDepth(root.left), maxDepth(root.right)) + 1 : 0;
};