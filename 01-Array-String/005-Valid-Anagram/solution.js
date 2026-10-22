/**
 * Determines whether two strings are anagrams.
 *
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    // Anagrams must have the same length.
    if (s.length !== t.length) {
        return false;
    }

    // Store the frequency of each character in s.
    const map = new Map();

    for (let char of s) {
        map.set(char, (map.get(char) || 0) + 1);
    }

    // Decrease character frequencies using t.
    for (let char of t) {
        // Character does not exist in s, so it is not an anagram.
        if (!map.has(char)) {
            return false;
        }

        map.set(char, map.get(char) - 1);

        // Remove the character when its frequency reaches zero.
        if (map.get(char) === 0) {
            map.delete(char);
        }
    }

    // Both strings are anagrams if no characters remain.
    return map.size === 0;
};

// Run the program
function main() {
    const testCases = [
        { s: "anagram", t: "nagaram" },
        { s: "rat", t: "car" },
        { s: "a", t: "ab" }
    ];

    for (const { s, t } of testCases) {
        const result = isAnagram(s, t);

        console.log(`s = "${s}", t = "${t}"`);
        console.log("Is Anagram:", result);
        console.log("--------------------");
    }
}

main();
