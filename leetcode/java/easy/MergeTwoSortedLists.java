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
 * Parameters: 2 head nodes of lists (or null)
 * Returns: a single head node
 *  after merging the two lists
 * Examples:
 *  Input: list1 = [1,2,4], list2 = [1,3,4]
 *  Output: [1,1,2,3,4,4]
 *
 *  Input: list1 = [], list2 = []
 *  Output: []
 *
 *  Input: list1 = [], list2 = [0]
 *  Output: [0]
 * Pseudocode:
 *  iterative
 *    if one list is empty
 *      return the other list
 *    initialize a head var and a current var as null
 *    create a loop to run as long as both lists are NOT null
 *      if list1 val is less than list2 val
 *        if head is null
 *          set head and current to list1 node
 *        otherwise
 *          set current next to list1 node
 *          set current to current next
 *        set list1 to list1 next
 *      otherwise
 *        if head is null
 *          set head and current to list2 node
 *        otherwise
 *          set current next to list 2 node
 *          set current to current next
 *        set list2 to list2 next
 *    if list1 is NOT null
 *      set current next to list1
 *    otherwise
 *      set current next to list2
 *    return head
 *
 *  recursive
 *    base case
 *      if one of the lists are null
 *        return the non-null list
 *    recursive case
 *      if list1 val is less than list2 val
 *        reassign list1 next to equal recursive call to fn
 *          with list1 next and list2 as args
 *        return list1
 *      otherwise
 *        reassign list2 next to equal recursive call to fn
 *          with list1 and list2 next as args
 *        return list2
 */

// runtime 0 ms beats 100%, memory 41.6 mb beats 46.76%
class MergeTwoSortedListsIterativeSolution2 {
    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        if (list1 == null) return list2;
        if (list2 == null) return list1;
        ListNode head = null, current = null;
        while (list1 != null && list2 != null) {
            if (list1.val < list2.val) {
                if (head == null) head = current = list1;
                else current = current.next = list1;
                list1 = list1.next;
            } else {
                if (head == null) head = current = list2;
                else current = current.next = list2;
                list2 = list2.next;
            }
        }
        current.next = list1 != null ? list1 : list2;
        return head;
    }
}

// runtime 0 ms beats 100%, memory 41.5 mb beats 58.36%
class MergeTwoSortedListsIterativeSolution1 {
    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        if (list1 == null) return list2;
        if (list2 == null) return list1;
        ListNode head = null, current = null;
        while (list1 != null || list2 != null) {
            if (list1 == null) {
                current.next = list2;
                list2 = list2.next;
                current = current.next;
            } else if (list2 == null) {
                current.next = list1;
                list1 = list1.next;
                current = current.next;
            } else if (list1.val < list2.val) {
                if (head == null) head = current = list1;
                else {
                    current.next = list1;
                    current = current.next;
                }
                list1 = list1.next;
            } else {
                if (head == null) head = current = list2;
                else {
                    current.next = list2;
                    current = current.next;
                }
                list2 = list2.next;
            }
        }
        return head;
    }
}

// runtime 0 ms beats 100%, memory 41.8 mb beats 35.34%
class MergeTwoSortedListsRecursiveSolution {
    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        if (list1 == null) return list2;
        if (list2 == null) return list1;
        if (list1.val < list2.val) {
            list1.next = mergeTwoLists(list1.next, list2);
            return list1;
        }
        list2.next = mergeTwoLists(list1, list2.next);
        return list2;
    }
}