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
 *  original method
 *    root node
 *  traversal method
 *    tree node and data list
 * Returns:
 *  original method
 *    list of integers
 *  traversal method
 *    void
 * Examples:
 *  Input: root = [1,null,2,3]
 *  Output: [3,2,1]
 *
 *  Input: root = []
 *  Output: []
 *
 *  Input: root = [1]
 *  Output: [1]
 * Pseudocode:
 *  og method
 *    initialize list of integers
 *    if input root node is NOT null
 *      call traversal method, pass in root & list
 *    return list
 *
 *  traversal method
 *    if left node exists
 *      recursively call fn with left node & list
 *    if right node exists
 *      recursively call fn with right node & list
 *    add current node value to list
 */

// runtime 0 ms beats 100%, memory 41.07 mb beats 27.40%
class BinaryTreePostorderTraversalSolution {
    public List<Integer> postorderTraversal(TreeNode root) {
        List<Integer> values = new ArrayList<>();
        if (root != null) traverse(root, values);
        return values;
    }
    private void traverse(TreeNode node, List<Integer> data) {
        if (node.left != null) traverse(node.left, data);
        if (node.right != null) traverse(node.right, data);
        data.add(node.val);
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