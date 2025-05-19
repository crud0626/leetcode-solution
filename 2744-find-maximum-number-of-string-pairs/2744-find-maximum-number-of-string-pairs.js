const maximumNumberOfStringPairs = (words) => {
    let pairs = 0;
    const set = new Set();
    
    for (let i = words.length-1; 0 <= i; i--) {
        const word = words[i];
        const reverseWord = word[1] + word[0];

        if (set.has(reverseWord)) {
            pairs++;
        }
        
        set.add(word);
    }

    return pairs;
};
