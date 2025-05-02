const countDigits = function(num) {
    const digits = num.toString().split('').map(n => Number(n));
    return digits.filter(digit => num % digit === 0).length;
};