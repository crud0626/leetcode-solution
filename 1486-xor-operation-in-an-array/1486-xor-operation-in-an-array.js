const xorOperation = (n, start) => Array.from({ length: n }, (_, i) => start + 2 * i).reduce((a, c) => a ^ c);