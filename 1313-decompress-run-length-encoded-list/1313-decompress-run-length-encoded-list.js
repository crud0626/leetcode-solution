const decompressRLElist = function (nums) {
  const result = [], n = nums.length;

  for (let i = 0; i < n; i += 2) {
    result.push(...new Array(nums[i]).fill(nums[i + 1]));
  }

  return result;
};