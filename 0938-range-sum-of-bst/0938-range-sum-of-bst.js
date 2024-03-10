const rangeSumBST = function(root, low, high) {
    const stack = [root];
    let result = 0;

    while(stack.length > 0) {
        const target = stack.shift();

        if (target.val >= low && target.val <= high) result += target.val;

        if (target.left) stack.push(target.left);
        if (target.right) stack.push(target.right);
    }

    return result;
};