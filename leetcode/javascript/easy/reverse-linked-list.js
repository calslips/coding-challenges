/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// iterative, runtime beats 93.87%, memory beats 26.17%
var reverseList = function(head) {
  // initialize reversed as null
  // loop over the input list
    // reassign reversed to be a new node with current head val and reversed as next
    // reassign head as head next
  // return reversed
  let reversed = null;
  while (head) {
    reversed = new ListNode(head.val, reversed);
    head = head.next;
  }
  return reversed;
};

// iterative, runtime beats 74.20%, memory beats 86.73%
var reverseList = function(head) {
  // initialize a prev var as null
  // create a loop to run as long as head is defined
      // initialize a temp var to hold head next
      // reassign head next to prev value
      // reassign prev to head
      // reassign head to temp
  // return prev
  let prev = null;
  while (head) {
      const temp = head.next;
      [head.next, prev, head] = [prev, head, temp];
  }
  return prev;
};

// recursive, runtime beats 96.53%, memory beats 5.28%
var reverseList = function(head, prev = null) {
  // base case
    // if head is null
      // return prev
  // recursive case
    // establish new current node to be head next
    // set head next to prev
    // return recursive call to reverseList
      // where 1st arg is new current node (old head next)
      // and 2nd arg is original head
  if (!head) return prev;
  return reverseList(head.next, (head.next = prev, head));
};

console.log(reverseList([1,2,3,4,5]), [5,4,3,2,1]);
console.log(reverseList([1,2]), [2,1]);
console.log(reverseList([]), []);