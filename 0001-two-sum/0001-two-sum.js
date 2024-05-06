const twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++) {
        const targetIndex = nums.lastIndexOf(target - nums[i]);
        if(targetIndex !== -1 && i !== targetIndex) {
            return [i, targetIndex];
        }
    }
};