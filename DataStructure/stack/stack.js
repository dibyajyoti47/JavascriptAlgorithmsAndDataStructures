class Node{
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null; //maintaining this property is really not required for stack.
    this.size = 0;
  }

  push (val) {
    let newNode = new Node(val);
    if(this.size === 0) {
      this.first = this.last = newNode;      
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }
  pop () {
    if (this.size === 0) return undefined;
    let removedNode = this.first;
    if (this.size === 1) {
      this.first = this.last = null;
    } else {
      this.first = this.first.next;
    }    
    removedNode.next = null;
    this.size--;
    return removedNode.val;
  }
}

(() => {
  let stack = new Stack();
  stack.push("val1");
  // stack.push("val2");
  console.log(stack);
  console.log(stack.pop());
  console.log(stack);
})();