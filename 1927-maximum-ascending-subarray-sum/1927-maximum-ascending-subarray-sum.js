const maxAscendingSum = (nums) => {
    let maxSum = 0, sum = 0;

    for(let i = 0; i < nums.length; i++) {
        if(i !== 0 && nums[i] <= nums[i-1]) {
            sum = 0;
        }

        sum += nums[i];
        maxSum = Math.max(maxSum, sum);
    }

    return Math.max(maxSum, sum);
};