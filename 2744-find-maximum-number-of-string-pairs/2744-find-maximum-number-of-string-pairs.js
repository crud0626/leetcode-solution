const maximumNumberOfStringPairs = (words) => {
    let pairs = 0;

    const wordsMap = new Map(words.map((word, idx) => [word, idx]));
    
    for (let i = 0; i < words.length - 1; i++) {
        const word = words[i];
        const reverseWord = word[1] + word[0];
        const targetIdx = wordsMap.get(reverseWord);

        if (typeof targetIdx === 'number' && targetIdx > i) {
            pairs++;
        }
    }

    return pairs;
};