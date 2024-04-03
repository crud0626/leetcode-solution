const arithmeticTriplets = function(nums, diff) {
    let result = 0;
    const set = new Set(nums);

    for(let i=0; i < nums.length; i++) {
        const n = nums[i];

        if(set.has(n + diff) && set.has(n + diff * 2)) {
            result ++;
        }
    }

    return result;
};