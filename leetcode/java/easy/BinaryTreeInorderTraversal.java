package leetcode.java.easy;
import java.util.List;
import java.util.ArrayList;

/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 *
 * Parameters:
 *  og method
 *    root node
 *  traversal method
 *    node
 *    list of data
 * Returns:
 *  og method
 *    list of data
 *  traversal method
 *    void
 * Examples:
 *  Input: root = [1,null,2,3]
 *  Output: [1,3,2]
 *
 *  Input: root = []
 *  Output: []
 *
 *  Input: root = [1]
 *  Output: [1]
 * Pseudocode:
 *  og method
 *    initialize a list of integers to store node values
 *    call traverse method on root node & list of values
 *    return values list
 *  traversal method
 *    if node is NOT null
 *      traverse the left sub tree, passing in list
 *      add current node val to list
 *      traverse the right sub tree, passing in list
 */

// runtime 0 ms beats 100%, memory 40.79 mb beats 75.13%
class BinaryTreeInorderSolution {
  public List<Integer> inorderTraversal(TreeNode root) {
      List<Integer> values = new ArrayList<>();
      traverse(root, values);
      return values;
  }
  private void traverse(TreeNode node, List<Integer> data) {
      if (node != null) {
          traverse(node.left, data);
          data.add(node.val);
          traverse(node.right, data);
      }
  }
}

class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode() {}
    TreeNode(int val) { this.val = val; }
    TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}