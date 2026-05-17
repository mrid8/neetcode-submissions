class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        // for every num, we store the product up to that point in that position
        const prefix = [];
        const suffix = [];
        const res = [];
        const n = nums.length;

        prefix[0] = 1;
        suffix[n-1] = 1;

        // [1,2,4,6] -> [1,2,8,48]
        for(let i = 1; i <= n; i++){ 
            prefix[i] = prefix[i - 1] * nums[i - 1];
            // prefix -> [1,1,2,8]
        }

        // [1,2,4,6] - > [48,48,24,6]
        for(let i = n-2; i >= 0; i--){
            suffix[i] = suffix[i+1] * nums[i+1]
            // suffix = [48, 24, 6, 1]
        }

        for(let i = 0; i < n; i++){
            res[i] = prefix[i] * suffix[i] 
        }
        
        return res;
    }
}
