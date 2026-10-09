# 003 - Contains Duplicate

## Problem Description

Given an integer array `nums`, return `true` if any value appears at least twice in the array. Return `false` if every element is distinct.

## Examples

### Example 1

**Input:**
```text
nums = [1, 2, 3, 1]
```

**Output:**
```text
true
```

**Explanation:** The number `1` appears more than once.

### Example 2

**Input:**
```text
nums = [1, 2, 3, 4]
```

**Output:**
```text
false
```

**Explanation:** Every element in the array is distinct.

### Example 3

**Input:**
```text
nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]
```

**Output:**
```text
true
```

**Explanation:** Multiple values appear more than once.

## Approach

We use a JavaScript `Set` to keep track of the numbers we have already visited.

1. Create an empty Set named `seen`.
2. Iterate through each number in the array.
3. Check whether the number already exists in `seen`.
   - If it exists, return `true` because a duplicate has been found.
   - Otherwise, add the number to `seen`.
4. If the loop finishes without finding a duplicate, return `false`.

## JavaScript Solution

See [`solution.js`](./solution.js) for the implementation.

```javascript
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const seen = new Set();

    for (let num of nums) {
        // Check if the number has already been seen.
        if (seen.has(num)) {
            return true;
        }

        // Store the number for future checks.
        seen.add(num);
    }

    // No duplicates were found.
    return false;
};
```

## Complexity Analysis

- **Time Complexity:** `O(n)` average, where `n` is the length of the array. We traverse the array once, with average `O(1)` Set operations.
- **Space Complexity:** `O(n)` in the worst case, when all elements are distinct and are stored in the Set.

## Key Takeaway

A JavaScript `Set` stores unique values and allows efficient membership checks. By checking whether each number has already been seen, we can detect duplicates in a single traversal without comparing every pair of elements.
