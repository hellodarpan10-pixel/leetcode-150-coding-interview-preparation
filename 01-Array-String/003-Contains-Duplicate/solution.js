/**
 * Determines whether an array contains duplicate values.
 *
 * @param {number[]} nums - The input array of integers.
 * @return {boolean} - Returns true if a duplicate exists, otherwise false.
 */
var containsDuplicate = function(nums) {
    // Store numbers that we have already visited.
    const seen = new Set();

    for (let num of nums) {
        // If the number is already in the Set, a duplicate exists.
        if (seen.has(num)) {
            return true;
        }

        // Add the number to the Set for future checks.
        seen.add(num);
    }

    // No duplicates were found.
    return false;
};

const nums = [1, 2, 3, 1];
const result = containsDuplicate(nums);

console.log("Input:", nums);
console.log("Contains Duplicate:", result);