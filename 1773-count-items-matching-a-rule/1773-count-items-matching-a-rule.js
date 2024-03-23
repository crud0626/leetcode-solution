const indexes = ["type", "color", "name"];

const countMatches = function(items, ruleKey, ruleValue) {
    const keyIndex = indexes.indexOf(ruleKey);

    return items.reduce((count, item) => item[keyIndex] === ruleValue ? ++count : count, 0);
};