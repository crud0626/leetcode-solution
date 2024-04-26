const commonFactors = (a, b) => {
    let result = 0;
    const num = Math.min(a, b);

    for (let i = 0; i <= num; i++) {
        if (a % i === 0 && b % i === 0) result++;
    }

    return result;
};