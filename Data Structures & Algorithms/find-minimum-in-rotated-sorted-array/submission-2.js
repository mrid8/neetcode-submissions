class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        // let min = Math.min(...nums)
        // return min
        
        // loop through nums using 2 pointers l & r
        // the number prior to the lowest number is bigger than the lowest number
        // and all the numbers after the lowest number are increasing
        // we will calculate the midpoint
        // and determine if the number at midpoint is in the rotated portion or not
        // for it to be in the rotated portion, the number at the end will be less than mid
        // if it is, then change the r/l pointer accordingly to check that portion
        let l = 0;
        let r = nums.length-1;

        while(l < r){
            let mid = l + Math.floor((r-l)/2)

            if(nums[mid] < nums[r]){
                r = mid
            } else{
                l = mid + 1;
            }
        }
        return nums[l]
    }
}
