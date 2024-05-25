const BRACKETS = {
    ')': '(',
    '}': '{',
    ']': '['
};

const isValid = function(s) {
    const stack = [];

    for(const bracket of s) {
        if (!BRACKETS[bracket]) {
            stack.push(bracket);
            continue;
        }

        if (stack.pop() !== BRACKETS[bracket]) return false;
    }
    
    return stack.length === 0;
};