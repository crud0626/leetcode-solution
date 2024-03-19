const createTargetArray = (nums, index) => nums.reduce((arr, _, i) => {
    arr.splice(index[i], 0, nums[i]);
    return arr;
}, []);