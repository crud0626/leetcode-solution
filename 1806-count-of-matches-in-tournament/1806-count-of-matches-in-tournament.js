const numberOfMatches = function (n) {
  let result = 0;

  while (n !== 1) {
    result += Math.floor(n / 2);
    n = Math.ceil(n / 2);
  }

  return result;
};