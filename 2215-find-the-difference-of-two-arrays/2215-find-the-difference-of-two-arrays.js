const findDifference = (nums1, nums2) => {
    const set1 = new Set(nums1), set2 = new Set(nums2);

    const result1 = Array.from(set1).filter(n => !set2.has(n));
    const result2 = Array.from(set2).filter(n => !set1.has(n));

    return [result1, result2];
};
