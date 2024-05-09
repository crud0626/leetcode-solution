const findMaxConsecutiveOnes = function(nums) {
    let result = 0, temp = 0;

    for(let i = 0; i <= nums.length; i++) {
        if (!nums[i]) {
            result = Math.max(result, temp);
            temp = 0;
            continue;
        }

        temp++;
    }

    return result;
};