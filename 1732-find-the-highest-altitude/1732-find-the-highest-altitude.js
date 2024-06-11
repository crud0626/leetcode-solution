const largestAltitude = function(gain) {
    let high = 0, curr = 0;

    gain.forEach(g => {
        curr += g;
        high = Math.max(high, curr);
    });

    return high;
};