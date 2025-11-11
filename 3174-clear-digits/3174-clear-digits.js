function findClosestNonDigitIdx(digitIdx, str) {
    for(let i = digitIdx - 1; i >= 0; i--) {
        if (/\D/.test(str[i])) {
            return i;
        }
    }

    return -1;
}

const clearDigits = (s) => {
    let result = s;

    while(/\d/.test(result)) {
        const firstDigitIdx = result.match(/\d/).index;
        const closestNonDigit = findClosestNonDigitIdx(firstDigitIdx, result);
        
        if (closestNonDigit === -1) break;

        result = result.slice(0, closestNonDigit) + result.slice(closestNonDigit + 1, firstDigitIdx) + result.slice(firstDigitIdx + 1);
    }

    return result;
};