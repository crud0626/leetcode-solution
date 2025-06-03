const compose = (functions) => {
    return (x) => functions.reduceRight((acc, fn) => fn(acc), x);
}