class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        # zxyzxyz
        # 2 pointers, l & r
        # when r encounters a duplicate, left = right, r += 1
        # check for duplicates using a set
        # calculate max substring length that we see
        mySet = set()
        l = 0
        r, maxLen = 0, 0
        
        for i in range(len(s)):
            while s[r] in mySet:
                mySet.remove(s[l])
                l += 1
            
            maxLen = max(maxLen, r-l + 1)
            mySet.add(s[r]) 
            r += 1

        return maxLen