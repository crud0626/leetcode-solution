const differenceOfSums = (n, m) => {
    let divisibleNums = 0, nonDivisibleNums = 0;

    for(let i = 1; i <= n; i++) {
        if (i % m === 0) {
            divisibleNums += i;
        } else {
            nonDivisibleNums += i;
        }
    }

    return nonDivisibleNums - divisibleNums;
};