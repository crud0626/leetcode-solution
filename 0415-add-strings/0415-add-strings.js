const addStrings = (num1, num2) => {
    const len = Math.max(num1.length, num2.length);
    num1 = num1.padStart(len, '0'), num2 = num2.padStart(len, '0');

    let add = 0, result = "";

    for(let i = len - 1; i >= 0; i--) {
        const sum = Number(num1[i]) + Number(num2[i]) + add;
        add = Math.floor(sum / 10);
        result = String(sum % 10) + result;
    }

    if (result) result = String(add) + result;

    return result;
};