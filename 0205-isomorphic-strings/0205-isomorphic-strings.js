const isIsomorphic = (s, t) => {
    const mapS = new Map(), mapT = new Map();
    const len = s.length;

    for(let i = 0; i < len; i++) {
        if (!mapS.has(s[i])) {
            mapS.set(s[i], t[i]);
        }

        if (!mapT.has(t[i])) {
            mapT.set(t[i], s[i]);
        }

        if (mapS.get(s[i]) !== t[i] || mapT.get(t[i]) !== s[i]) return false;
    }

    return true;
};