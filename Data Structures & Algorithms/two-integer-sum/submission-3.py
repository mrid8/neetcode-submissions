class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        # iterate through all the elements,
        # for each element, find the compliment number and store in map
        # if the value exists in map,
        # return indices of the key and value
        mp = {}

        for index, value in enumerate(nums):
            complement = target - value

            if complement in mp:
                return [mp[complement], index]
            
            mp[value] = index
        
        