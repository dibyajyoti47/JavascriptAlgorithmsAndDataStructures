class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.previous = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.previous = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return undefined;
    let poppedNode = this.tail;
    if (this.length === 1) {
      this.head = this.tail = null;
    } else {
      this.tail = this.tail.previous;
      this.tail.next = null;
      poppedNode.previous = null;
    }
    this.length--;
    return poppedNode;
  }

  unshift(val) {
    let newHead = new Node(val);
    if (this.length === 0) {
      this.head = this.tail = newHead;
    } else {
      newHead.next = this.head;
      this.head.previous = newHead;
      this.head = newHead;
    }

    this.length++;
    return this;
  }

  shift() {
    if (this.length === 0) return undefined;
    let oldHead = this.head;
    if (this.length === 1) {
      this.head = this.tail = null;
      this.length--;
      return oldHead;
    }
    this.head = this.head.next;
    this.head.previous = null;
    oldHead.next = null;
    this.length--;
    return oldHead;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let count, current;
    if (index <= this.length / 2) {
      count = 0;
      current = this.head;
      while (count !== index) {
        current = current.next;
        count++;
      }
    } else {
      count = this.length - 1;
      current = this.tail;
      while (count !== index) {
        current = current.prev;
        count--;
      }
    }
    return current;
  }

  set(index, val) {
    var foundNode = this.get(index);
    if (foundNode != null) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(index, val){
    if(index < 0 || index > this.length) return false;
    if(index === 0) return !!this.unshift(val);
    if(index === this.length) return !!this.push(val);

    let newNode = new Node(val);
    let beforeNode = this.get(index-1);
    let afterNode = beforeNode.next;
    
    beforeNode.next = newNode, newNode.prev = beforeNode;
    newNode.next = afterNode, afterNode.prev = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if(index < 0 || index >= this.length) return undefined;
    if(index === 0) return this.shift();
    if(index === this.length-1) return this.pop();
    let removedNode = this.get(index);
    removedNode.previous.next = removedNode.next;
    removedNode.next.previous = removedNode.previous; 
    removedNode.previous = null;
    removedNode.next = null;
    this.length--;
    return removedNode;

  }

  print() {
    let arr = [];
    let node = this.head;
    while (node) {
      arr.push(node.val);
      node = node.next;
    }
    console.log(arr);
  }

}
(() => {
  let list = new DoublyLinkedList();
  list.push("val1");
  list.push("val2");
  list.push("val3");
  console.log(list);
})();