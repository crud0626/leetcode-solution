const numJewelsInStones = (jewels, stones) => {
    const set = new Set(jewels.split(''));

    return stones.split('').reduce((sum, stone) => set.has(stone) ? sum += 1 : sum, 0);
};