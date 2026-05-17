class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:
        # create a maxHeap to store the values
        stones = [-s for s in stones]
        heapq.heapify(stones) # [-6,-4,-2,-2,-3]
        # [6,4,3,2,2]
        # print(stones)

        # compare x = maxHeap[0] and y = maxHeap[1]
        while len(stones) > 1:
            first = heapq.heappop(stones)
            second = heapq.heappop(stones)
            if second > first:
                heapq.heappush(stones, first-second)
        # if x == y, then pop the heap twice
        # if x < y, subtract y-x and push on heap
        
        # in case stones is empty, append 0
        stones.append(0)

        return abs(stones[0])

