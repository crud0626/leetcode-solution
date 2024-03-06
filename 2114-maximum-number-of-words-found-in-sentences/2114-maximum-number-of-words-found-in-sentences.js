const mostWordsFound = (sentences) => {
    const wordsCount = sentences.map((sentence) => sentence.split(' ').length);
    return Math.max(...wordsCount);
}