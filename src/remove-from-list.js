const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {

  if (!l) return null;
  if ((l.value === k) && (!l.next)) return null;
  else if (l.value === k) {
    let t = removeKFromList(l.next, k);
    if (!t) return null;
    l.value = t.value; l.next = t.next;
    return l;

  }
  if (!l.next) return l;
  l.next = removeKFromList(l.next, k);
  return l;




}

module.exports = {
  removeKFromList
};
