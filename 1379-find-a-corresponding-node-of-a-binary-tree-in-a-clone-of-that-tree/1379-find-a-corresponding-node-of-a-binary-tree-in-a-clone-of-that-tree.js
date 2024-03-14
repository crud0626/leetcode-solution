const getTargetCopy = function(original, cloned, target) {
    const queue = [cloned];

    while(queue.length) {
        const node = queue.shift();

        if (node.val === target.val) return node;

        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }
};