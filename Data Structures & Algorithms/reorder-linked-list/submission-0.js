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
     * @return {void}
     */
    reorderList(head) {
        let slowPtr = head;
        let fastPtr = head.next;
        while(fastPtr !== null && fastPtr.next !== null){
            slowPtr = slowPtr.next;
            fastPtr = fastPtr.next.next;
        }

        let second = slowPtr.next;
        let prev = (slowPtr.next = null);
        while(second){
            let temp = second.next;
            second.next = prev;
            prev = second
            second = temp
        }

        let first = head;
        second = prev;
        while(second){
            const temp1 = first.next;
            const temp2 = second.next;
            first.next = second
            second.next = temp1;
            first = temp1
            second = temp2
        }

    }
}
