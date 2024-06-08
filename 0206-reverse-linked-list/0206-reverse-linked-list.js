class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function reverseList(head) {
  if (!head) return head;

  let newHead = null;

  while (head) {
    const newNode = new ListNode(head.val, newHead);
    newHead = newNode;
    head = head.next;
  }

  return newHead;
}