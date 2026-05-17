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
        const oldToCopy = new Map();
        oldToCopy.set(null, null);

        let curr = head;
        while (curr){
            oldToCopy.set(curr, new Node(curr.val));
            curr = curr.next
        }

        curr = head
        while(curr){
            const dummy = oldToCopy.get(curr)
            dummy.next = oldToCopy.get(curr.next)
            dummy.random = oldToCopy.get(curr.random)
            curr = curr.next
        }

        return oldToCopy.get(head);
    }
}
