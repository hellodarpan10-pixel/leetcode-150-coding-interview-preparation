# Two Sum

**LeetCode 150 – Coding Interview Preparation**

**Difficulty:** Easy  
**Language:** JavaScript

## 🔗 Problem

[Two Sum – LeetCode](https://leetcode.com/problems/two-sum/)

---

## 📝 Problem Description

Given an array of integers `nums` and an integer `target`, return the indices of the two numbers such that they add up to `target`.

You may assume that each input has **exactly one solution**, and you may not use the same element twice.

### Example

```text
Input:
nums = [2, 7, 11, 15]
target = 9

Output:
[0, 1]
```

### Explanation

```text
nums[0] + nums[1]
2 + 7 = 9
```

Therefore, the answer is:

```text
[0, 1]
```

---

## 💡 Approach

We use a **Hash Map (`Map`)** to solve the problem efficiently.

For every number in the array:

1. Calculate the **needed number** to reach the target.
2. Check if the needed number already exists in the map.
3. If it exists, return the index of the needed number and the current index.
4. If it doesn't exist, store the current number and its index in the map.
5. If no valid pair is found, return an empty array `[]`.

### Formula

```text
neededNumber = target - currentNumber
```

### Example

```text
nums = [2, 7, 11, 15]
target = 9
```

For `2`:

```text
neededNumber = 9 - 2
neededNumber = 7
```

`7` is not in the map, so we store:

```text
2 → 0
```

For `7`:

```text
neededNumber = 9 - 7
neededNumber = 2
```

`2` is already in the map at index `0`.

So we return:

```text
[0, 1]
```

---

## 💻 JavaScript Solution

```javascript
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
```

---

## ⏱️ Complexity

**Time Complexity:** `O(n)`

We traverse the array only once.

**Space Complexity:** `O(n)`

The map can store up to `n` elements.

---

## 🎥 YouTube

**LeetCode 150 – Coding Interview Preparation**

🎬 **Problem:** Two Sum

YouTube video link will be added here.

---

## ✅ Status

- [x] Problem solved
- [x] JavaScript solution added
- [x] Explanation added
- [ ] YouTube video added

---

### 🚀 Keep Learning. Keep Solving. Keep Improving.