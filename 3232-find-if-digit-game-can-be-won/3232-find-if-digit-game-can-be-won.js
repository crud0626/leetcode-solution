const canAliceWin = (nums) => {
    let sumSingle = 0, sumDouble = 0;

    nums.forEach((num) => {
        if (num > 9) {
            sumDouble += num;
        } else {
            sumSingle += num;
        }
    });

    return sumDouble !== sumSingle;
};