class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0, r = nums.length
        
        while(l < r){
            let mid = l + Math.floor((r-l)/2);
            if(target < nums[mid]){
                r = mid
            }
            else{
                l = mid + 1
            }
        }
        return (nums[l-1] === target) ? l - 1 : -1
    }
}
