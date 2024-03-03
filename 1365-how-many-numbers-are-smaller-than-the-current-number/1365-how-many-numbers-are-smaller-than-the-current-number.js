const smallerNumbersThanCurrent = (nums) => nums.map((num, numIdx) => {
    let count = 0;

    nums.forEach((n, nIdx) => {
        if (numIdx !== nIdx && n < num) count++;
    });

    return count;
});