const findMissingElements = (nums) => {
    const missingElements = [];
    const numSet = new Set(nums);
    const start = Math.min(...nums), end = Math.max(...nums);
    
    for(let i = start; i <= end; i++) {
        if (!numSet.has(i)) {
            missingElements.push(i);
        }
    }

    return missingElements;
};