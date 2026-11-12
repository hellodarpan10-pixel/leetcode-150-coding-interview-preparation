
# LeetCode 88: Merge Sorted Array

## Problem

You are given two integer arrays `nums1` and `nums2`, sorted in non-decreasing order, and two integers `m` and `n`, representing the number of valid elements in each array.

Merge `nums2` into `nums1` as one sorted array.

The final sorted array should be stored inside `nums1`.

**Note:** `nums1` has a size of `m + n`, where the first `m` elements are valid and the remaining elements are set to `0`.

## Examples

### Example 1

**Input:**
```javascript
nums1 = [1, 2, 3, 0, 0, 0]
m = 3
nums2 = [2, 5, 6]
n = 3
```

**Output:**
```javascript
[1, 2, 2, 3, 5, 6]
```

### Example 2

**Input:**
```javascript
nums1 = [1]
m = 1
nums2 = []
n = 0
```

**Output:**
```javascript
[1]
```

### Example 3

**Input:**
```javascript
nums1 = [0]
m = 0
nums2 = [1]
n = 1
```

**Output:**
```javascript
[1]
```

## Approach: Two Pointers (Starting from the End)

We use three pointers:

- `i`: Points to the last valid element in `nums1`.
- `j`: Points to the last element in `nums2`.
- `k`: Points to the last available position in `nums1`.

### Algorithm

1. Initialize `i = m - 1`.
2. Initialize `j = n - 1`.
3. Initialize `k = m + n - 1`.
4. Compare the elements at `nums1[i]` and `nums2[j]`.
5. Place the larger element at `nums1[k]`.
6. Move the corresponding pointer backward.
7. Continue until all elements from `nums2` are merged.

If elements remain in `nums1`, they are already in their correct positions.

## JavaScript Solution

```javascript
var merge = function(nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;

    while (j >= 0) {
        if (i >= 0 && nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }

        k--;
    }
};
```

## Complexity Analysis

### Time Complexity: O(m + n)

We traverse the elements of both arrays at most once.

### Space Complexity: O(1)

We modify `nums1` in place without using any additional array or data structure.

## Key Takeaways

- Two Pointer Technique
- In-place Array Modification
- Working with Sorted Arrays
- Avoiding Extra Space

## LeetCode

[LeetCode 88 - Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array/)

## Repository

[LeetCode 150 - Coding Interview Preparation](https://github.com/hellodarpan10-pixel/leetcode-150-coding-interview-preparation)
