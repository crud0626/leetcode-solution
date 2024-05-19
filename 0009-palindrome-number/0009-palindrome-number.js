const isPalindrome = x => {
  if (x < 0) return false;

  let tempX = x,
    reversedX = 0;

  while (tempX >= 1) {
    const digit = tempX % 10;
    tempX = Math.floor(tempX / 10);

    reversedX = reversedX * 10 + digit;
  }


  return reversedX === x;
};