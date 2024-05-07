const intersection = function(nums1, nums2) {
    const arr1 = Array.from(new Set(nums1));
    const arr2 = Array.from(new Set(nums2));

    const result = [];

    for(let i = 0; i < arr1.length; i++) {
        if(arr2.includes(arr1[i])) {
            result.push(arr1[i]);
        }
    }
    return result;
};