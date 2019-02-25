/**
 * Definition for singly-linked list with a random pointer.
 * function RandomListNode(label) {
 *     this.label = label;
 *     this.next = this.random = null;
 * }
 */

/**
 * @param {RandomListNode} head
 * @return {RandomListNode}
 */
var copyRandomList = function(head) {
  if (!head) {
      return head;
  }
  const seen = {};
  
  function clone(node) {
      if (node === null) {
          return null;
      }
      
      if (!seen[node.label]) {
          seen[node.label] = new RandomListNode(node.label);
          seen[node.label].next = clone(node.next);
          seen[node.label].random = clone(node.random);
      } 
      return seen[node.label]
  }
  clone(head);
  return seen[head.label];
};
