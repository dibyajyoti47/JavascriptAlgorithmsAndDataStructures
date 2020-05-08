class Node{
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null; //maintaining this property is really not required for stack.
    this.size = 0;
  }
  enqueue (val) {
    let newNode = new Node(val);
    if (this.size === 0) {
      this.first = this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode; 
    }
    return ++this.size;
  }
  dequeue () {
    if (this.size === 0) return undefined;
    let removedNode = this.first;
    if (this.size === 1) {
      this.first = this.last = null;
    } else {
      this.first = this.first.next;
    }
    removedNode.next = null; //just 
    this.size--;
    return removedNode.val;
  }
}

(() => {
  let queue = new Queue();
  queue.enqueue("val1");
  queue.enqueue("val2");
  queue.enqueue("val3");
  console.log(queue);
  console.log(queue.dequeue());
  console.log(queue);
})();