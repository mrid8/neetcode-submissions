class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        # two pointers - buy price, sell price
        buy, profit, maxProfit = 0, 0, 0
        sell = 0
        while sell < len(prices)-1:
            # prices[i] > prices[i+1]:
            if prices[buy] > prices[sell]:
                buy = sell
            
            sell += 1
            profit = prices[sell] - prices[buy]
            maxProfit = max(maxProfit, profit)

        return maxProfit
