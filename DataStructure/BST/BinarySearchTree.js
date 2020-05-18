class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor () {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if(value === current.value) return undefined;
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    } 
  }

  remove(value) { 
    this.root =  this.removeNode(this.root, value);
  }

  removeNode (node, val) {
    if (node === null) return node; /* Base Case: If the tree is empty */
    if (val < node.value) {
      node.left = this.removeNode(node.left, val);
    } else if (val > node.value) {
      node.right = this.removeNode(node.right, val);
    } else { //if key is same as root's key, then This is the node to be deleted 
      //node with one child or no child 
      if (node.left === null) return node.right;
      if (node.right === null) return node.left;

      // node with two children: Get the inorder successor (smallest in the right subtree)
      node.value = this.findMin(node.right);
      node.right = this.removeNode(node.right, node.value);
    }
    return node;
  }

  findMin(rootNode = this.root) {
    let minValue = rootNode.value;
    while ( rootNode !== null ) {
      minValue = rootNode.value;
      rootNode = rootNode.left;
    }
    return minValue;
  }

  find (value) {
    if(!this.root) return undefined;
    let currentNode = this.root;
    while (currentNode !== null) {
      if (currentNode.value === value) {
        return currentNode;
      }
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.left;
      }
    }
    return undefined;
  }

  bfs () { //it preserves the insertion order
    let data = [];
    let queue = [];
    let node = this.root;
    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }

  dfsPreOrder() { //from left to right
    let data = [];
    let current = this.root;
    function traverse(node) {
      data.push(node.value);
      if( node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(current);
    return data;
  }

  dfsPostOrder() {  // from right to left
    let data = [];
    let current = this.root;
    function traverse(node) {
      data.push(node.value);
      if (node.right) traverse(node.right);
      if( node.left) traverse(node.left);
    }
    traverse(current);
    return data;
  }

  dfsInOrder() { //this will return sorted
    let data = [];
    let current = this.root;
    function traverse(node) {
      if( node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(current);
    return data;
  }
}

(() => {
  let bst = new BinarySearchTree()
  bst.insert(15)
  bst.insert(13)
  bst.insert(17)
  bst.insert(14)
  bst.insert(16)
  console.log(bst.dfsInOrder());
  bst.remove(15);
  console.log(bst.dfsInOrder());
})()