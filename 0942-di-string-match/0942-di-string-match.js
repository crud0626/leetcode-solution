const diStringMatch = function (s) {
  let start = 0,
    end = s.length;
  const result = [];

  for (const char of s) {
    result.push(char === 'I' ? start++ : end--);
  }

  result.push(end--);

  return result;
};