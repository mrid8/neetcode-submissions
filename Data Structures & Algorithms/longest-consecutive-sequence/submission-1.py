class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        if not nums:
            return 0

        count, maxVal = 1, 1
        nums.sort()
        for i in range(1, len(nums)):
            if nums[i] == nums[i - 1] + 1:
                count += 1
            elif nums[i] != nums[i - 1]:
                maxVal = max(maxVal, count)
                count = 1
        
        maxVal = max(maxVal, count)
        
        return maxVal
            
