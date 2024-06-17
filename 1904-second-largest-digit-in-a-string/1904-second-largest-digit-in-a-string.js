const secondHighest = (s) => {
    const nums = new Set(s.match(/\d/g));

    if (nums.size < 2) return -1;
    
    return Array.from(nums).map(n => +n).sort((a, b) => b - a)[1];
};