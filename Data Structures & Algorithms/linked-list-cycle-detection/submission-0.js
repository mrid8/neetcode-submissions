/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
          let slowptr = head;
          let fastptr = head;

          while(fastptr !== null && fastptr.next !== null){
            fastptr = fastptr.next.next;
            slowptr = slowptr.next;

            if(fastptr === slowptr){
                return true;
            }
          }

          return false;
    }
}
