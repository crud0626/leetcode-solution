const isPrefixOfWord = (sentence, searchWord) => {
    const regex = new RegExp(`^${searchWord}`);
    const idx = sentence.split(' ').findIndex(word => regex.test(word));
    return idx === -1 ? idx : idx + 1;
};