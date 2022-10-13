const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

// npm run test test/название_таска.test
class BinarySearchTree {
  constructor() {
    this.data = null;
    this.right = null;
    this.left = null;
    this.parrent = null;


  }

  root() {
    if (!this.data) return null
    return this;

  }

  add(node) {
    if (!this.data) { this.data = node }
    else {

      if (node > this.data) {
        if (!this.right) {
          this.right = new BinarySearchTree()
          this.right.data = node;
          this.right.parrent = this;
          return
        } else {
          this.right.add(node)
        }

      }
      else {
        if (!this.left) {
          this.left = new BinarySearchTree()
          this.left.data = node;
          this.left.parrent = this;
          return
        } else this.left.add(node);
      }
    }

  }

  has(node) {
    if (!this.root()) return null;
    if (node === this.data) return true;
    if ((!this.right) && (!this.left)) return false;
    if ((node > this.data) && (this.right)) return this.right.has(node)
    else if ((node < this.data) && (this.left)) return this.left.has(node)
    return false;
  }

  find(node) {
    if (!this.has(node)) return null;
    if (node === this.data) return this;

    if (node > this.data) return this.right.find(node);
    return this.left.find(node);
  }

  remove(data) {
    if (!this.has(data)) return null;
    this.removeNode(this, data)


  }

  removeNode(tree, node) {
    console.log(tree, node);

    if ((tree.data !== node) && (tree.data < node)) { tree.right = tree.removeNode(tree.right, node); return tree }
    if ((tree.data !== node) && (tree.data >= node)) { tree.left = tree.removeNode(tree.left, node); return tree }
    if ((!tree.left) && (!tree.right)) {
      return null;
    }
    if ((tree.left) && (!tree.right)) {
      tree = tree.left;
      return tree;
    }
    if ((tree.right) && (!tree.left)) {
      tree = tree.right;
      return tree;
    }
    tree.data = tree.right.min();
    tree.right = tree.removeNode(tree.right, tree.right.min())
    return tree
  }

  min() {
    if (!this.left) return this.data;
    return this.left.min()
  }

  max() {
    if (!this.right) return this.data;
    return this.right.max()
  }
}

module.exports = {
  BinarySearchTree
};