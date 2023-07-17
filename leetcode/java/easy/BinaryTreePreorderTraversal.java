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
 * Parameters: root node
 * Returns: list of ints
 * Examples:
 *  Input: root = [1,null,2,3]
 *  Output: [1,2,3]
 *
 *  Input: root = []
 *  Output: []
 *
 *  Input: root = [1]
 *  Output: [1]
 * Pseudocode:
 *  initialize a list to contain node values
 *  if root input is NOT null
 *    add root value to list
 *    perform recursive call to fn with left node passed in
 *      add all of results from recursive call to list
 *    perform recursive call to fn with right node passed in
 *      add all of results from recursive call to list
 *  return list
 */

// runtime 0 ms beats 100%, memory 40.78 mb beats 75.15%
class BinaryTreePreorderTraversalSolution1 {
  public List<Integer> preorderTraversal(TreeNode root) {
      List<Integer> values = new ArrayList<>();
      if (root != null) {
          values.add(root.val);
          values.addAll(preorderTraversal(root.left));
          values.addAll(preorderTraversal(root.right));
      }
      return values;
  }
}

// runtime 0 ms beats 100%, memory 40.72 mb beats 75.15%
class BinaryTreePreorderTraversalSolution2 {
    public List<Integer> preorderTraversal(TreeNode root) {
        List<Integer> values = new ArrayList<>();
        traverse(root, values);
        return values;
    }
    private void traverse(TreeNode node, List<Integer> data) {
        if (node != null) {
            data.add(node.val);
            traverse(node.left, data);
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