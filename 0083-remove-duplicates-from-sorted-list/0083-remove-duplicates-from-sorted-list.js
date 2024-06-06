const deleteDuplicates = function(head) {
    let currNode = head;

    while(currNode) {
        if (currNode.val === currNode.next?.val) {
            currNode.next = currNode.next.next;
            continue;
        }

        currNode = currNode.next;
    }

    return head;
};