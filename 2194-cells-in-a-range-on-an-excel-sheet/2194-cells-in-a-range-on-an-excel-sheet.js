const cellsInRange = function(s) {
    const result = [];
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const [rowStart, colStart, _, rowEnd, colEnd] = s;

    for(let r = alphabet.indexOf(rowStart); r <= alphabet.indexOf(rowEnd); r++) {
        for(let c = colStart; c <= colEnd; c++) {
            result.push(`${alphabet[r]}${c}`);
        }
    }

    return result;
}