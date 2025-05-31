const minOperations = (nums, k) => {
    const sum = nums.reduce((acc, cur) => acc + cur);
    return sum % k;
};