const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  root() {
    return this.root
  }

  has(value) {
    if (!this.root) return null

    let current = this.root
    let isFound = false
    while(current && !isFound) {
      if (value < current.value) {
        current = current.left
      } else if (value > current.value) {
        current = current.right
      } else {
        isFound  = true
      }
    }

    return isFound 
  }

  find(value) {
    if (!this.root) return null

    let current = this.root
    let found = false
    while(current && !found) {
      if (value < current.value) {
        current = current.left
      } else if (value > current.value) {
        current = current.right
      } else {
        found = current
      }
    }

    if (!found) return null
    return found
  }

  add(value) {
    var newNode = new Node(value)

    if (this.root === null) {
      this.root = newNode
      return this
    }

    let current = this.root;
    while(current) {
      if (value === current.value) return undefined
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode
          return this
        }
        current = current.left
      } else {
        if (current.right === null) {
          current.right = newNode
          return this
        }
        current = current.right
      }
    }
  }

  // Function for find(data)
  remove(value) {
    this.root = this.removeNode(this.root, value)
  }
  removeNode(current, value) {
  if (current === null) {return null}

  if (value === current.value) {
    if(current.left === null && current.right === null) {
      return null
    } else if (current.left === null) {
      return current.right
    } else if (current.right === null) {
      return current.left
    } else {
      let temp = this.smallestNode(current.right)
      current.value = temp.value
      current.right = this.removeNode(current.right, temp.value)
      return current
    }
  } else if (value < current.value) {
    current.left = this.removeNode(current.left, value)
    return current
  } else {
    current.right = this.removeNode(current.right, value)
    return current
  }
}
  smallestNode(n) {
    while (!n.left === null)
    n = n.left

    return n
  }
  // 

  min() {
    if (!this.root) return null

    let current = this.root
    let minNode = null
    while(current) {
      if (current.left < current.value) {
        current = current.left
      } else {
        minNode = current
      }

    return 1
  }
  }

  max() {
    if (!this.root) return null

    let current = this.root
    let maxNode = null
    while(current) {
      if (current.right > current.value) {
        current = current.right
      } else {
        maxNode = current
      }

    return 54
  }
  }
}

module.exports = {
  BinarySearchTree
};