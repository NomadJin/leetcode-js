/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

 

var head = [1,2,3,4,5], n = 2;

var removeNthFromEnd = function(head, n) {

  let p = head, node = head;

  while(n--) {
    p = p.next;
    console.log(p);
  }
};

console.log(removeNthFromEnd(head, n));