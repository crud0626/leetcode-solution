const sumOfUnique = (nums) => {
    let sum = 0;
    const map = new Map();

    for(const num of nums) {
        const freq = map.get(num);
        if (freq === undefined) {
            map.set(num, 1);
            sum += num;
            continue;
        }

        if (freq === 1) {
            sum -= num;
            map.set(num, 2);
        }
    }

    return sum;
};