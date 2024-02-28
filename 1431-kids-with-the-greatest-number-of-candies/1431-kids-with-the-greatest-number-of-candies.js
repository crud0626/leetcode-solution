const kidsWithCandies = function(candies, extraCandies) {
    const maxNum = Math.max(...candies) - extraCandies;
    return candies.map(num => num >= maxNum);
};