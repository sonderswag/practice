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
  const seen = {null: null}
  seen[head.label] = new RandomListNode(head.label)
  let cur = head;
  console.log(head)
  console.log(seen)

  
  while(cur !== null) {
      
      if (cur.next === null) {
          seen[cur.label].next = null
      } else if (!seen[cur.next.label]) {
          console.log('add')
          seen[cur.next.label] = new RandomListNode(cur.next.label);
          seen[cur.label].next = seen[cur.next.label];
      } else {
          seen[cur.label].next = seen[cur.next.label];
      }
      
      if (cur.random === null) {
          seen[cur.label].random = null
      } else if (!seen[cur.random.label]) {
          seen[cur.random.label] = new RandomListNode(cur.random.label);
          seen[cur.label].random = seen[cur.random.label];
      } else {
          seen[cur.label].random = seen[cur.random.label];
      }
      
   
      cur = cur.next;
  }
  console.log(seen[head.label])
  return seen[head.label];
};
