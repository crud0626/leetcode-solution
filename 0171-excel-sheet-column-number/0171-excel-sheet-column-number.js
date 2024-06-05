const titleToNumber = function(columnTitle) {
    const arr = columnTitle.split("");
    let result = 0, multiple = 1;

    while(arr.length > 0) {
        const target = arr.pop();
        result += (target.charCodeAt() - 64) * multiple;
        multiple *= 26;
    }

    return result;
};
