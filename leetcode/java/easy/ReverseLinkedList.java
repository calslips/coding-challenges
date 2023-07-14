package leetcode.java.easy;

/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 *
 * Parameters: list node
 * Returns: list node
 * Examples:
 *    Input: head = [1,2,3,4,5]
 *    Output: [5,4,3,2,1]
 *
 *    Input: head = [1,2]
 *    Output: [2,1]
 *
 *    Input: head = []
 *    Output: []
 * Pseudocode:
 *    iterative
 *      prev var initialized to null
 *      loop while head exists
 *        next var initialized to current head next
 *        reassign current head's next to prev
 *        reassign prev to current head
 *        reassign head to next
 *      return prev
 *
 *    recursive
 *      define method that takes in single ListNode param (head)
 *        return call to version of method that takes in 2 params
 *          passing in head as head and null as prev
 *      define method that takes in 2 ListNode params (head & prev)
 *        base case
 *          if head is null
 *            return prev
 *        recursive case
 *          initialize next var to store original head next
 *          reassign head next to prev
 *          return recursive call with next as head param and head as prev param
 */

class ListNode {
    int val;
    ListNode next;
    ListNode() {}
    ListNode(int val) { this.val = val; }
    ListNode(int val, ListNode next) { this.val = val; this.next = next; }
}

// iterative
// runtime 0 ms beats 100%, memory 41.3 mb beats 74.89%
class ReverseLinkedListIterativeSolution {
  public ListNode reverseList(ListNode head) {
      ListNode prev = null;
      while (head != null) {
          ListNode next = head.next;
          head.next = prev;
          prev = head;
          head = next;
      }
      return prev;
  }
}

// recursive
// runtime 0 ms beats 100%, memory 41.9 mb beats 21.86%
class ReverseLinkedListRecursiveSolution {
    public ListNode reverseList(ListNode head) {
        return reverseList(head, null);
    }
    public ListNode reverseList(ListNode head, ListNode prev) {
        if (head == null) return prev;
        ListNode next = head.next;
        head.next = prev;
        return reverseList(next, head);
    }
}