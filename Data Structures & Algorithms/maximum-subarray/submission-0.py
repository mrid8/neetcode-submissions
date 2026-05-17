class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        maxVal, total = nums[0], 0
        
        for i in nums:
            if total < 0: 
                total = 0
            total += i
            maxVal = max(maxVal, total)

        return maxVal