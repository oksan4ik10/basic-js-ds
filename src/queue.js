const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
ListNode.prototype.add = function (x) {
  if (this.next) { this.next.add(x); return }
  let newNode = new ListNode(x);
  this.next = newNode;
  return
}
class Queue {
  constructor() {
    this.queue = null;

  }

  getUnderlyingList() {
    return this.queue;
  }

  enqueue(x) {
    if (!this.queue) { this.queue = new ListNode(x); return; }
    console.log(this.queue);
    this.queue.add(x)


  }

  dequeue() {
    if (!this.queue) return;
    let res = this.queue.value;
    if (this.queue.next) { this.queue.value = this.queue.next.value; this.queue.next = this.queue.next.next; }
    else this.queue = null;
    return res;

  }
}

module.exports = {
  Queue
};
