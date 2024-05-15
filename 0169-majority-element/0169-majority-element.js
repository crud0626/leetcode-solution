const majorityElement = (nums) => {
    let count = 0, major = 0;

    for(let i = 0; i < nums.length; i++) {
        if (count === 0) major = nums[i];
        
        major === nums[i] ? count++ : count--;
    }

    return major;
};