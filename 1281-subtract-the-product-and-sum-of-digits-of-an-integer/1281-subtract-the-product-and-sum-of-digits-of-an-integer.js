const subtractProductAndSum = function(n) {
    const nums = n.toString().split('').map(num => +num);
    const product = nums.reduce((a, c) => a * c);
    const sum = nums.reduce((a, c) => a + c);

    return product - sum;
};