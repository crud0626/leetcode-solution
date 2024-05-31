const average = (salary) => {
    let min = Math.min(), max = Math.max();

    const sum = salary.reduce((acc, s) => {
        min = Math.min(min, s);
        max = Math.max(max, s);
        return acc + s;
    }, 0);

    return (sum - min - max) / (salary.length - 2);
};