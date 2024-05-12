const dayOfYear = function(date) {
    const [year] = date.split('-');
    const dateMs = Date.parse(date);
    const date2Ms = Date.parse(`${year}-1-1`);

    return (dateMs - date2Ms) / 86400000 + 1;
};