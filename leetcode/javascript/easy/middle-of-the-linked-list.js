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

// runtime beats 92.95%, memory beats 44.84%
var middleNode = function(head) {
  // initialize a length var assigned to 0
  // initialize a current var to keep track of current node of list
  // loop over the nodes of the list
      // for each node increment length by 1
  // initialize mid as half of length floored
  // initialize index as 0
  // loop over the nodes of the list
      // if index equals mid
          // return current node
      // otherwise
          // increment index & continue to next node
  let length = 0, current = head;
  while (current) length++, current = current.next;
  for (let i = 0, mid = Math.floor(length / 2); head; i++, head = head.next) if (i === mid) return head;
};

console.log(middleNode([1,2,3,4,5]), [3,4,5]);
console.log(middleNode([1,2,3,4,5,6]), [4,5,6]);