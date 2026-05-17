/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        let arr = [];
        this.inOrder(root, arr);
        return arr[k-1];
    }

    inOrder(node, arr){
        if(!node) return;
        this.inOrder(node.left, arr);
        arr.push(node.val);
        this.inOrder(node.right, arr);
    }
}
