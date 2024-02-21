const shuffle = (nums, n) => {
    const len = nums.length / 2, result = [];

    for(let i = 0; i < len; i++) {
        result.push(nums[i]);
        result.push(nums[i + n]);
    }

    return result;
};