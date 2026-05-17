import math
class Solution:
    def kClosest(self, points: List[List[int]], k: int) -> List[List[int]]:
        # store the tuples (dist, x, y)
        # create a min heap to store the distance value tuples
        minHeap = []
        for x, y in points:
            dist = x ** 2 + y ** 2
            minHeap.append([dist, x, y])
        
        heapq.heapify(minHeap)
        # res array will return values from min heap till k = 0
        res = []
        while k > 0:
            dist, x, y = heapq.heappop(minHeap)
            res.append([x, y])
            k -= 1
        # print(minHeap)
        
        return res
        