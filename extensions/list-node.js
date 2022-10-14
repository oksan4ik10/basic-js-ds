class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
  add(x) {
    if (this.next) { this.next.add(x); return }
    let newNode = new ListNode(x);
    this.next = newNode;
    return
  }
}

module.exports = {
  ListNode
};
