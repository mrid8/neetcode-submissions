class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        // using left and right pointers, we will figure out if we're in the rotated portion
        // if the mid value is bigger than the end value, we are in the rotated portion
        // once we figure out if we're in the rotated portion, we need to check if the target
        let l = 0;
        let r = nums.length-1;

        while(l <= r){
            let mid = l + Math.floor((r-l)/2);
            if(target === nums[mid]) return mid;

            if(nums[l] <= nums[mid]){
                if(target > nums[mid] || target < nums[l]){
                    l = mid + 1;
                } else{
                    r = mid - 1
                }
            } else{
                if(target < nums[mid] || target > nums[r]){
                    r = mid - 1
                } else{
                    l = mid + 1
                }
            }
        }
        return -1
    }
}
