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
     * @return {number}
     */
    goodNodes(root) {
        let res = 0
        function dfs(node, maxVal){
            if(!node) return 0
            
            node.val >= maxVal ? res = 1 : res = 0
            maxVal = Math.max(node.val, maxVal)
            res += dfs(node.left, maxVal)
            res += dfs(node.right, maxVal)

            return res
        }

        return dfs(root, root.val)
    }
}
