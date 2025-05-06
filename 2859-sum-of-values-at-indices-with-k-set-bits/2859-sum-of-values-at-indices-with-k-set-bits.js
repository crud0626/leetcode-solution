const sumIndicesWithKSetBits = (nums, k) => {
    return nums.reduce((sum, num, idx) => {
        const binary = idx.toString(2);
        
        if ((binary.match(/1/g)?.length ?? 0) === k) {
            return sum += num;
        } else {
            return sum;
        }
    }, 0);
};