const arrayPairSum = function(nums) {
    let sum = 0;
    nums.sort((a, b) => a - b);

    for(let i = 0; i < nums.length; i+=2) {
        sum += nums[i];
    }
    
    return sum;
};

// 오름차순으로 정렬
// nums.length / 2만큼을 sum하면 될 듯?