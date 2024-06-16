const areAlmostEqual = function(s1, s2) {
    if (s1 === s2) return true;

    const diffIdx = [];

    for(let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) diffIdx.push(i);
    }

    return diffIdx.length === 2 
        && s1[diffIdx[0]] === s2[diffIdx[1]] 
        && s1[diffIdx[1]] === s2[diffIdx[0]];
};