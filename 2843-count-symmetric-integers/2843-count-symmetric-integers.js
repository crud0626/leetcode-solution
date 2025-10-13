const countSymmetricIntegers = (low, high) => {
    let count = 0;

    for (let i = low; i <= high; i++) {
        const numString = i.toString();

        if (numString.length % 2 !== 0) {
            i = 10 ** numString.length;
            continue;
        }

        let firstSum = 0, lastSum = 0;
        const halfLength = numString.length / 2;
        const first = numString.slice(0, halfLength);
        const last = numString.slice(halfLength);

        for(let i = 0; i < halfLength; i++) {
            firstSum += Number(first[i]);
            lastSum += Number(last[i]);
        }

        if (firstSum === lastSum) {
            count++;
        }
    }

    return count;
};