const replaceDigits = function(s) {
    let result = "";

    for(let i = 0; i < s.length; i+=2) {
        const char = s[i], charCode = char.charCodeAt();
        const x = parseInt(s[i+1]) - 1;

        if (isNaN(x)) {
            result += char;
            continue;
        }
        
        const nextCharCode = charCode < 123 ? charCode + x : (charCode + x - 122) % 26 + 97;
        result += char + String.fromCharCode(nextCharCode);
    }

    return result;
};