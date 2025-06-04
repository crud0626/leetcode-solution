const sortPeople = (names, heights) => {
    const nameAndHeights = names.map((name, idx) => [name, heights[idx]]);
    nameAndHeights.sort((a, b) => b[1] - a[1]);
    
    return nameAndHeights.map(([name]) => name);
};