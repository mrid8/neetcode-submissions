class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numSet = new Set(nums);
        // [2,20,4,10,3,5]
        let maxCount = 0;
        for(let num of numSet){
            let count = 1;
            while(numSet.has(num+1)){
                count++
                num = num + 1 
            }
            maxCount = Math.max(maxCount, count);
        }

        return maxCount;
    }
}
