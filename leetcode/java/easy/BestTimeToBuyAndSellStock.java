package leetcode.java.easy;

/*
Parameters: an array of ints
Returns: an int
Examples:
  Input: prices = [7,1,5,3,6,4]
  Output: 5
  Explanation: Buy on day 2 (price = 1) and sell on day 5
    (price = 6), profit = 6-1 = 5.
  Note that buying on day 2 and selling on day 1 is not
    allowed because you must buy before you sell.

  Input: prices = [7,6,4,3,1]
  Output: 0
  Explanation: In this case, no transactions are done and
    the max profit = 0.
Pseudocode:
    initialize low var to 1st val of prices
    initialize high var to 1st val of prices
    initialize max to difference between high and low
    iterate over the prices array (starting at 2nd val)
        if current is less than low
            reassign both low and high to equal current
        otherwise if current is greater than high
            reassign high to equal current
        if difference between high and low is greater than max
            reassign max to new difference
    return max
*/

// runtime 1 ms beats 99.90%, memory 61.4 mb beats 22.77%
class BestTimeToBuyAndSellStockSolution {
    public int maxProfit(int[] prices) {
        int max = 0;
        for (int low = 0, high = 1; high < prices.length; high++) {
            if (prices[low] < prices[high]) {
                if (prices[high] - prices[low] > max) max = prices[high] - prices[low];
            } else low = high;
        }
        return max;
    }
}

// runtime 2 ms beats 93.70%, memory 61.4 mb beats 31.24%
// class Solution {
//     public int maxProfit(int[] prices) {
//         int max = 0;
//         for (int low = 0, high = 1; high < prices.length; high++) {
//             if (prices[low] < prices[high]) max = Math.max(max, prices[high] - prices[low]);
//             else low = high;
//         }
//         return max;
//     }
// }

// runtime 3 ms beats 18.35%, memory 61.1 mb beats 54.66%
// class Solution {
//     public int maxProfit(int[] prices) {
//         int max = 0;
//         for (int i = 1, low = prices[0], high = low; i < prices.length; i++) {
//             if (prices[i] < low) low = high = prices[i];
//             else if (prices[i] > high) high = prices[i];
//             if (high - low > max) max = high - low;
//         }
//         return max;
//     }
// }