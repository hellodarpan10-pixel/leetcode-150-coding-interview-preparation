# Best Time to Buy and Sell Stock

**LeetCode Problem:** [121. Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)  
**Approach:** Greedy (Single Pass)  
**Language:** JavaScript

## Problem

You are given an array `prices` where `prices[i]` is the price of a stock on the `i`th day.

You want to maximize your profit by choosing one day to buy the stock and a different day in the future to sell it.

Return the maximum profit you can achieve. If you cannot make any profit, return `0`.

## Approach: Greedy — Track Minimum Price

We can solve this problem in one pass without checking every possible buy-and-sell pair.

1. Initialize `minPrice` to `Infinity` to track the lowest stock price seen so far.
2. Initialize `maxProfit` to `0` to store the maximum profit.
3. Iterate through the prices array:
   - Update `minPrice` whenever we find a lower price.
   - Calculate the potential profit using `currentPrice - minPrice`.
   - Update `maxProfit` if the current profit is greater.
4. Return `maxProfit`.

By tracking the minimum price while iterating, we always consider buying before selling.

## Example

**Input:**
```javascript
prices = [7, 1, 5, 3, 6, 4]
```

**Output:**
```javascript
5
```

**Explanation:**

Buy at price `1` and sell later at price `6`.

Maximum Profit = `6 - 1 = 5`.

## Complexity Analysis

- **Time Complexity:** `O(n)` — We traverse the prices array once.
- **Space Complexity:** `O(1)` — We use only a fixed number of variables.

---

Keep learning and keep building — **1% better every day.**