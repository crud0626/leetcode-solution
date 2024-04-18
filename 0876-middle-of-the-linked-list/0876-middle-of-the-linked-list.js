const middleNode = (head) => {
    let currIdx = 0;
    const depth = JSON.stringify(head).match(/}/g).length;
    const middleNodeIdx = Math.floor(depth / 2);


    while(true) {
        if (currIdx === middleNodeIdx) return head;

        head = head.next;
        currIdx++;
    }
};