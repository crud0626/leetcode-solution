const daysBetweenDates = function(date1, date2) {
    const dayMs = 1000 * 60 * 60 * 24;
    return Math.abs((new Date(date2) - new Date(date1)) / dayMs);
};