const balancedStringSplit = function(s) {
    let result = 0, balance = 0;

    for(let i = 0; i < s.length; i++) {
        s[i] === 'L' ? balance++ : balance--;

        if (balance === 0) result++;
    }

    return result;
};