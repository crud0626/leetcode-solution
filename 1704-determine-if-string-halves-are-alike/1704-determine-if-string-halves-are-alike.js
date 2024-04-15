const VOWELS = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);

const halvesAreAlike = function(s) {
    const result = [0, 0], halfIdx = s.length / 2;

    for (let i = 0; i < s.length; i++) {
        const resultIdx = i < halfIdx ? 0 : 1;
        if (VOWELS.has(s[i])) {
            result[resultIdx]++;
        }
    }

    return result[0] === result[1];
};
