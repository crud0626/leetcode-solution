const getSneakyNumbers = (nums) => {
    const result = [];
    const count = Array.from({ length: nums.length }, () => 0);
    nums.forEach(num => count[num]++);
    count.filter((num, idx) => {
        if (num === 2) result.push(idx);
    });

    return result;
};