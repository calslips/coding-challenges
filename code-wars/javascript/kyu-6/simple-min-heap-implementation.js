/*
Heap is a data structure, that takes elements in arbitrary order,
and returns them in a sorted order one by one.

Implementing a min heap
In this kata, we will implement a min heap,
it is going to have 2 methods:

push
Takes a value and adds it to a heap

pop
Finds the smallest value in the heap, removes it from the heap,
and returns it

Please note that for this kata we do not assess the effiency of
your implementation, so anything that acts like a heap will pass
the tests.

Parameters:
  push method takes in a num
Returns:
  pop returns a num,
    or undefined if heap is empty
Examples:
  const minHeap = new MinHeap;
  minHeap.push(4);
  minHeap.push(1);
  minHeap.push(7);
  minHeap.push(9);
  minHeap.push(2);
  minHeap.pop(), 1
  minHeap.pop(), 2
  minHeap.pop(), 4
  minHeap.pop(), 7
  minHeap.pop(), 9
  minHeap.pop(), undefined
Pseudocode:
  initialize class
    define constructor
      heap prop to equal an empty array
    define push method, takes in a num
      add num to heap
      sort heap descending (min vals at end)
    define pop method
      remove and return num from end of heap
*/

class MinHeap {
  constructor() {
    this.heap = [];
  }
  push(num) {
    this.heap.push(num);
    this.heap.sort((a, b) => b - a);
  }
  pop() {
    return this.heap.pop();
  }
}

// o(n) below vs o(n log n) above
class MinHeap {
  constructor() {
    this.heap = new NodeList();
  }
  push(num) {
    this.heap.addNode(new Node(num));
  }
  pop() {
    return this.heap.removeHead()?.data;
  }
}

class Node {
  constructor(data = null) {
    this.data = data;
    this.next = null;
  }
}

class NodeList {
  constructor() {
    this.head = this.tail = null;
  }
  addNode(node) {
    if (!this.head) {
      this.head = this.tail = node;
    } else if (node.data < this.head.data) {
      const temp = this.head;
      this.head = node;
      node.next = temp;
    } else if (node.data > this.tail.data) {
      this.tail = this.tail.next = node;
    } else {
      let current = this.head;
      while (current) {
        if (node.data < current.next.data) {
          const temp = current.next;
          current.next = node;
          node.next = temp;
          break;
        } else {
          current = current.next;
        }
      }
    }
    return;
  }
  removeHead() {
    const node = this.head;
    this.head = this.head?.next || null;
    return node;
  }
}