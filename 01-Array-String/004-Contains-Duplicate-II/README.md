# 219. Contains Duplicate II

**LeetCode Problem:** [Contains Duplicate II](https://leetcode.com/problems/contains-duplicate-ii/)

**Difficulty:** Easy  
**Topic:** Array, Hash Table, Sliding Window  
**Language:** JavaScript  
**Approach:** HashMap

## Problem Description

Given an integer array `nums` and an integer `k`, return `true` if there are two distinct indices `i` and `j` such that:

- `nums[i] === nums[j]`
- `|i - j| <= k`

Otherwise, return `false`.

## Approach: HashMap

We use a JavaScript `Map` to store each number's most recently seen index.

1. Create an empty `Map`.
2. Iterate through the array using index `i`.
3. Check whether the current number already exists in the map.
4. If it exists, calculate the difference between the current index and its previously stored index.
5. If the difference is less than or equal to `k`, return `true`.
6. Update the number's index in the map.
7. If no valid duplicate is found, return `false`.

## JavaScript Solution

Check [`solution.js`](./solution.js) for the implementation.

## Complexity Analysis

- **Time Complexity:** O(n), where `n` is the length of the array.
- **Space Complexity:** O(n), where `n` is the length of the array.

## Key Takeaway

A HashMap allows us to track the most recent index of each number and efficiently check whether a duplicate exists within the allowed index distance `k`.

---

Part of the **LeetCode 150 – Coding Interview Preparation** series.