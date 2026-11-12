
/**
 * LeetCode 88: Merge Sorted Array
 *
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void}
 */
var merge = function(nums1, m, nums2, n) {
    // Start pointers from the last valid elements
    let i = m - 1;
    let j = n - 1;

    // Position where the largest element should be placed
    let k = m + n - 1;

    // Merge elements from the end
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
