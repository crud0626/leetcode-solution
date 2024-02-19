const maximumWealth = function(accounts) {
    let max = 0;

    accounts.forEach(account => {
        const sum = account.reduce((a, b) => a + b);
        max = Math.max(max, sum);
    });

    return max;
};