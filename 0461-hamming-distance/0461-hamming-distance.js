const hammingDistance = function(x, y) {
    let result = 0;
    const z = (x ^ y).toString(2);
    for(let i = 0; i < z.length; i++) {
        if(z[i] === "1") {
            result += 1;
        }
    }
    return result;
};