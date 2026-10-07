/**
 * LeetCode 150 – Coding Interview Preparation
 *
 * Problem: Two Sum
 * LeetCode: https://leetcode.com/problems/two-sum/
 * Difficulty: Easy
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // Map to store each number and its index
    const map = new Map();

    // Traverse through the array
    for (let i = 0; i < nums.length; i++) {

        // Calculate the number needed to reach the target
        const neededNumber = target - nums[i];

        // Check if the needed number already exists in the map
        if (map.has(neededNumber)) {
            // Return the index of the needed number and current index
            return [map.get(neededNumber), i];
        }

        // Store the current number and its index
        map.set(nums[i], i);
    }

    // Return an empty array if no valid pair is found
    return [];
};