const subarraySum = (nums) => {
    let sum = 0;

    for(let i = 0; i < nums.length; i++) {
        let idx = Math.max(0, i - nums[i]);
        
        for(idx; idx <= i; idx++) {
            sum += nums[idx];
        }
    }

    return sum;
}