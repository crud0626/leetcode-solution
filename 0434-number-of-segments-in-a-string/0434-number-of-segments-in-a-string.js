const countSegments = function(s) {
    s = s.split(" ");
    const result = s.filter(word => word !== "");
    return result.length;
};
