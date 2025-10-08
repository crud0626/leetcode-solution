const alternatingSum = (nums) => nums.reduce((acc, num, numIdx) => {
    numIdx % 2 === 0 ? acc += num : acc -= num;
    return acc;
}, 0);