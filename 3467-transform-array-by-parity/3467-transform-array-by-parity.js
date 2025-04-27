const transformArray = (nums) => {
    const result = [];
    nums.forEach(num => {
        if (num % 2 === 0) {
            result.unshift(0);
        } else {
            result.push(1);
        }
    });

    return result;
};