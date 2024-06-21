const arraySign = (nums) => {
    let isPositive = true;

    for(const n of nums) {
        if (n === 0) return 0;
        if (n < 0) isPositive = !isPositive;
    }

    return isPositive || -1;
};