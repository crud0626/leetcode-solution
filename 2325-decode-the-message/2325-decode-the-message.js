const decodeMessage = function(key, message) {
    let result = "";
    const lowerCases = "abcdefghijklmnopqrstuvwxyz";

    const set = new Set(key.replaceAll(" ", ""));
    key = Array.from(set).join("");

    const decoded = {};
    for(let i = 0; i < key.length; i++) {
        decoded[key[i]] = lowerCases[i];
    }

    for(let i = 0 ; i < message.length; i++) {
        const char = message[i];
        result += char === " " ? " " : decoded[char];
    }

    return result;
};