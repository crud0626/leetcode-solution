const plusOne = (digits) => {
    const sum = BigInt(digits.join('')) + BigInt(1);
    return sum.toString().split("");
}