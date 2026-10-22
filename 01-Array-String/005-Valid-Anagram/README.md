# 005 - Valid Anagram

## Problem Description

Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`, and `false` otherwise.

An **anagram** is a word or phrase formed by rearranging the letters of another, using every letter the same number of times.

For this problem, assume the strings contain lowercase English letters.

## Examples

### Example 1

**Input:**
```text
s = "anagram"
t = "nagaram"
```

**Output:**
```text
true
```

**Explanation:** Both strings contain the same characters with the same frequencies.

### Example 2

**Input:**
```text
s = "rat"
t = "car"
```

**Output:**
```text
false
```

**Explanation:** The strings contain different characters.

### Example 3

**Input:**
```text
s = "a"
t = "ab"
```

**Output:**
```text
false
```

**Explanation:** The strings have different lengths, so they cannot be anagrams.

## Approach: Using a HashMap

We use JavaScript's `Map` to count the frequency of each character in the first string and then verify those frequencies against the second string.

1. **Check string lengths:** If `s.length !== t.length`, return `false`.
2. **Count characters:** Iterate through `s` and store each character's frequency in a `Map`.
3. **Verify characters:** Iterate through `t`. If a character does not exist in the map, return `false`.
4. **Update frequencies:** Decrease the frequency of each character found in `t`.
5. **Remove zero counts:** When a character's frequency reaches zero, delete it from the map.
6. **Return the result:** If the map is empty after processing `t`, return `true`.

## JavaScript Solution

See [`solution.js`](./solution.js) for the complete implementation, including a local test runner.

## Complexity Analysis

Let `n` be the length of the strings.

- **Time Complexity:** `O(n)` average — We traverse both strings once, and `Map` operations take `O(1)` average time.
- **Space Complexity:** `O(k)` — The map stores distinct characters, where `k` is the number of distinct characters in `s`. For lowercase English letters, this is bounded by 26.

## Key Takeaway

A HashMap helps solve the Valid Anagram problem efficiently by tracking character frequencies. Instead of sorting both strings, we count and compare character occurrences in a single pass through each string.

This approach achieves linear average time complexity: `O(n)`.
