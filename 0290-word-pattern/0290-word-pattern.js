const wordPattern = function(pattern, s) {
    const obj = {};

    const arr1 = Array.from(new Set(pattern.split("")));
    const arr2 = Array.from(new Set(s.split(" ")));

    if(arr1.length !== arr2.length) return false;

    for(let i = 0; i < arr1.length; i++) {
        obj[arr1[i]] = arr2[i];
    }

    s = s.split(" ");
    
    for(let i = 0; i < s.length; i++) {
        if (obj[pattern[i]] !== s[i]) return false;
    }
    return true;
};