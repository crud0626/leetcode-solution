const reduce = (nums, fn, init) => {
    let accumulate = init ?? 0;

    for(const num of nums) {
        accumulate = fn(accumulate, num);
    }

    return accumulate;
};