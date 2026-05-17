class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        # buy at a price that's lower than the price it's going to sell, not going to work for decreasing array
        # calculate the profit and obtain the maxProfit.
        # 

        # for i in range(len(prices)):
        buy, sell = 0, 1
        maxProfit = 0

        # 7,1,5,3,6,4
        while sell < len(prices):
            if prices[sell] > prices[buy]:
                profit = prices[sell] - prices[buy]
                maxProfit = max(maxProfit, profit)
            else:
                buy = sell
            sell += 1

        return maxProfit

            