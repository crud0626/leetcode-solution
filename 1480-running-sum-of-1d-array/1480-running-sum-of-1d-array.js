const runningSum = (nums) => {
    nums.forEach((_, i) => nums[i] += nums[i-1] ?? 0);
    return nums;
};