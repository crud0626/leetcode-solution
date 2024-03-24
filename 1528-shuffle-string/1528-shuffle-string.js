const restoreString = function(s, indices) {
    const result = new Array(s.length).fill(0);
    indices.forEach((nextIdx, charIdx) => result[nextIdx] = s[charIdx]);

    return result.join('');
};