const minOperations = (nums) => {
    let result = 0;

    nums.forEach((num, i) => {
        if (i !== 0 && num <= nums[i-1]) {
            const addValue = nums[i-1] - num + 1;
            result += addValue;
            nums[i] += addValue;
        }
    });

    return result;
};