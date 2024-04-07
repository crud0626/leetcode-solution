const flipAndInvertImage = function(image) {
    const result = [];

    for(let i = 0; i < image.length; i++) {
        const arr = image[i].reverse().map(a => a === 1 ? 0 : 1);
        result.push(arr);
    }

    return result;
};