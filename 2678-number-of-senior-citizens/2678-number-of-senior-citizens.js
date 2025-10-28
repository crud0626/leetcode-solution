const countSeniors = (details) => {
    return details.reduce((seniorCount, datail) => {
        const age = Number(datail.slice(11, 13));

        return age > 60 ? seniorCount += 1 : seniorCount;
    }, 0);
};