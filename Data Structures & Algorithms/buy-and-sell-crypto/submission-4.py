class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        # two pointers - buy price, sell price
        buy, sell, maxProfit = 0, 0, 0
        while sell < len(prices):
            # prices[i] > prices[i+1]:
            if prices[buy] < prices[sell]:
                profit = prices[sell] - prices[buy]
                maxProfit = max(maxProfit, profit)
            
            else:
                buy = sell
            
            sell += 1

        return maxProfit
