const findClosest = (x, y, z) => {
    const diffX = Math.abs(z - x), diffY = Math.abs(z - y);
    return diffX < diffY ? 1 : diffX > diffY ? 2 : 0;
};