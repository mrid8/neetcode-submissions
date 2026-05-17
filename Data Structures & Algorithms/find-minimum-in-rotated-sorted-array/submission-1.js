class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let min = Math.min(...nums)
        // console.log(min)
        // loop through nums using 2 pointers l & r
        // the number prior to the lowest number is bigger than the lowest number
        // and all the numbers after the lowest number are increasing
        // we will calculate the midpoint
        // and determine if the number at midpoint is in the 
        // let l = 0;
        // let r = nums.length;
        return min
    }
}
