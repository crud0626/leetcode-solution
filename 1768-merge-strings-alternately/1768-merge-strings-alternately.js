/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
const mergeAlternately = (word1, word2) => {
    const maxLen = Math.max(word1.length, word2.length);
    let result = "";

    for(let i = 0; i < maxLen; i++) {
        result += (word1[i] ?? '') + (word2[i] ?? '');
    }

    return result;
};