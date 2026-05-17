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
     * @return {boolean}
     */
    isValidBST(root) {
        // there is no restriction on the left and right which is why the range
        // is positive to negative infinity
        return this.valid(root, -Infinity, Infinity);
    }

    // helper function to check if nodes are valid
    valid(node, left, right){
        if(!node) return true;

        // the value should be greater than left and less than right
        if(!(node.val < right && node.val > left)){
            return false;
        }

        return (this.valid(node.left, left, node.val)
         && this.valid(node.right, node.val, right))
    }
}
