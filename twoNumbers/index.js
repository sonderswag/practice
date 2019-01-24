/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let carry = 0;
  const dummy = new ListNode(0);
  let current = dummy;
  while ( l1 || l2 || carry) {
      let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
      carry = sum > 9 ? 1 : 0;
      current.next = new ListNode(sum % 10);
      current = current.next;
      l1 = l1 ? l1.next : null;
      l2 = l2 ? l2.next : null;
  }
  return dummy.next;
};

module.exports = addTwoNumbers;