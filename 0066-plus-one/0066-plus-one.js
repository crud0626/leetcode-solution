const plusOne = (digits) => {
    const num = Number(digits.join("")) + 1;
    return num.toString().split('');
}