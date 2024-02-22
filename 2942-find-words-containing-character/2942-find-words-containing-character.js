const findWordsContaining = (words, x) => words.reduce((arr, word, i) => {
    if (word.includes(x)) arr.push(i);
    return arr;
}, []);