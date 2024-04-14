const countPoints = (rings) => {
    const counter = Array.from({ length: 10 }, () => new Set());

    for(let i = 0; i < rings.length; i+=2) {
        const [ring, rod] = [rings[i], rings[i + 1]];
        counter[rod].add(ring);
    }

    return counter.filter(rod => rod.size === 3).length;
};