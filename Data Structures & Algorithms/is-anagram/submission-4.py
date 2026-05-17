class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        # s = "racecar", t = "carrace" 
        # s = "aaccerr", t = "aaccerr"
        # if s == t -> true

        return (sorted(s) == sorted(t))