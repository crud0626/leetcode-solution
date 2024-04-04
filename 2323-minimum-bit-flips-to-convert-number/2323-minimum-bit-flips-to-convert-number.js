const minBitFlips = function(start, goal) {
    const newBit = (start ^ goal).toString(2);
    const result = [...newBit].filter(e => e === "1");
    return result.length;
};