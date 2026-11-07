# LeetCode 122: Best Time to Buy and Sell Stock II

## Problem Statement

You are given an array `prices` where `prices[i]` represents the price of a stock on the `i`th day.

You can buy and sell the stock multiple times. However, you must sell the stock before buying again.

Return the maximum profit you can achieve.

**LeetCode:** [Best Time to Buy and Sell Stock II](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/)

## Approach: Greedy

We use a Greedy approach to calculate the maximum profit by collecting every profitable price increase.

### Key Idea

- Start iterating from index `1`.
- Compare the current price with the previous day's price.
- If the current price is greater, calculate the difference.
- Add that difference to the total profit.
- Continue until the end of the array.

### Example

**Input:**
```javascript
prices = [7, 1, 5, 3, 6, 4]
```

**Output:**
```javascript
7
```

**Explanation:**

- Buy at price `1` and sell at price `5`. Profit = `4`.
- Buy at price `3` and sell at price `6`. Profit = `3`.
- Total Profit = `4 + 3 = 7`.

## JavaScript Solution

See [solution.js](./solution.js).

## Complexity Analysis

**Time Complexity: O(n)**

We traverse the array only once.

**Space Complexity: O(1)**

We use only one variable to maintain the total profit.

## Key Takeaway

The Greedy approach helps us maximize profit by adding every positive difference between consecutive stock prices.

Keep learning and keep getting 1% better every day! 🚀