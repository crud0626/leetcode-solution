const finalValueAfterOperations = (operations) => operations.reduce((acc, op) => /--/.test(op) ? acc -= 1 : acc += 1, 0);