// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        const mp = new Map();
        mp.set(null, null);
        let curr = head;

        while(curr){
            mp.set(curr, new Node(curr.val));
            curr = curr.next;
        }

        curr = head;
        while(curr){
            const dummy = mp.get(curr);
            dummy.next = mp.get(curr.next);
            dummy.random = mp.get(curr.random);
            curr = curr.next;
        }

        return mp.get(head);
    }
}
