const removeDuplicates = (nums) => {
  const set = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (!set.has(nums[i])) {
      set.add(nums[i]);
      continue;
    }

    nums.splice(i, 1);
    i--;
  }
};