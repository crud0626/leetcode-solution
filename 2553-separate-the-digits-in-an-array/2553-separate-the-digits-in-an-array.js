const separateDigits = (nums) => {
    const result = [];

    nums.forEach(num => {
        const digits = num.toString().split('').map(digit => +digit); // [1, 3]
        result.push(...digits);
    });

    return result;
};