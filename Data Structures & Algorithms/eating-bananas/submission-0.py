class Solution:
    def minEatingSpeed(self, piles: List[int], h: int) -> int:
        l, r = 1, max(piles)
        res = r #result will be max if there is none that works

        while l <= r:
            k = (l + r) // 2
            hours = 0; #total hours
            for p in piles:
                hours += math.ceil(p/k)
            
            # if total hours is less than h
            if hours <= h:
                # result is the minimum of right and k 
                res = min(res, k)
                # right pointer changes
                r = k - 1
            else:
                # left pointer changes if hours is bigger than h
                l = k + 1
        return res