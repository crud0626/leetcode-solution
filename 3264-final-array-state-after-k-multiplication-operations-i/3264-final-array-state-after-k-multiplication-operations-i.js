const getFinalState = (nums, k, multiplier) => {
    for (let i = 0; i < k; i++) {
        const minNum = Math.min(...nums);
        const minNumIdx = nums.indexOf(minNum);
        nums[minNumIdx] = minNum * multiplier;
    }

    return nums;
};