const minimumAverage = (nums) => {
    const targetNums = [...nums].sort((a, b) => a - b);
    let minAverage = Infinity;

    while(targetNums.length > 0) {
        const minNum = targetNums.pop();
        const maxNum = targetNums.shift();
        const average = (minNum + maxNum) / 2;
        minAverage = Math.min(minAverage, average);
    }
    
    return minAverage;
};