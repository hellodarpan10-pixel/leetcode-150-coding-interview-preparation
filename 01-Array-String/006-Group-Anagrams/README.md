
# LeetCode 49: Group Anagrams

## Problem Statement

Given an array of strings `strs`, group the anagrams together. You can return the answer in any order.

Two strings are anagrams if they contain the same characters with the same frequencies, but possibly in a different order.

## Approach: HashMap

We use a JavaScript `Map` to group strings that are anagrams.

1. Create an empty `Map`.
2. Iterate through each string in the input array.
3. Sort the characters of the string to create a unique key.
   - Example: `"eat"` → `["e", "a", "t"]` → `["a", "e", "t"]` → `"aet"`
4. If the key does not exist in the map, initialize it with an empty array.
5. Push the original string into the array associated with that key.
6. Return all grouped values using `Array.from(map.values())`.

Strings with the same sorted-character key are anagrams, so they are stored in the same group.

## Example

**Input:**

```javascript
strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
```

**Output:**

```javascript
[["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]
```

## Complexity Analysis

Let `n` be the number of strings and `k` be the maximum length of a string.

- **Time Complexity:** `O(n * k log k)` — sorting each string takes `O(k log k)`.
- **Space Complexity:** `O(n * k)` — storing the strings and their grouping keys.

## LeetCode Link

[Group Anagrams — LeetCode 49](https://leetcode.com/problems/group-anagrams/)
