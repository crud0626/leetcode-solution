const findIntersectionValues = (nums1, nums2) => {
    let answer1 = 0, answer2 = 0;

    const maxLength = Math.max(nums1.length, nums2.length);
    const setNums1 = new Set(nums1), setNums2 = new Set(nums2);

    for (let i = 0; i < maxLength; i++) {
        if (nums1[i] && setNums2.has(nums1[i])) {
            answer1++;
        }

        if (nums2[i] && setNums1.has(nums2[i])) {
            answer2++;
        }
    }
    
    return [answer1, answer2];
};