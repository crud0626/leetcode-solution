const numIdenticalPairs = function(nums) {
    const len = nums.length;
    let pairs = 0;

    for(let i = 0; i < len - 1; i++) {
        for(let j = i + 1; j < len; j++) {
            if (nums[i] === nums[j]) pairs++;
        }
    }

    return pairs;
};