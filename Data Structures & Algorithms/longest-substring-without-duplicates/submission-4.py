class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        # since we don't want repeating characters, we're going to use a set to store the char we come across
        charSet = set()
        l = 0 
        res = 0
        
        # zxyzxy
        #  ^
        # xxxx
        # abcd

        # iterate through the characters in s
        for r in range(len(s)):
            while s[r] in charSet:
                charSet.remove(s[l])
                l += 1
            
            res = max(res, r - l + 1)
            charSet.add(s[r])
        return res