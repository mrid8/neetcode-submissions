class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let left = 0, right = 1;
        let bestPrice = 0

        while(right < prices.length){
            if(prices[left] < prices[right]){
                let profit = prices[right] - prices[left]
                bestPrice = Math.max(bestPrice, profit)
            }
            else{
                left = right;
            }
            right++
        }
        return bestPrice;
    }
}
