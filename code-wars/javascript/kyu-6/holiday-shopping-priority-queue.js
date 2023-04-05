/*
The holidays are just around the corner. You know what that
means...Holiday Shopping! I was planning on buying all you Code
Warriors a gift, but I don't know which order to buy them! I
have a small shopping list that I'm constantly adding to, and
all of the items have a certain priority. What if I use a
priority queue?

Holiday Shopping Priority Queue
Priority queues are similar to queues, but they add a priority
to each data entry, so items with higher priorities (lower
  integer values) are processed first.

While I'm running around buying the gifts, I need you to write a
few methods for the HolidayPriorityQueue class to help me out.
The class needs two methods: addGift and buyGift. For this Kata,
all priorities will be unique, so no need to worry about equal
priorities.

Method descriptions:
addGift (or enqueue) adds a gift to the priority queue. This
method should accept one object (or hash in ruby), which has two
properties: gift - the name of the gift, and priority - the
priority of the gift, and should return the new length of the
queue. All gifts will be in this form.

buyGift (or dequeue) removes the gift with the highest priority
from the priority queue, and returns the gifts name (value of
the gift property). If the queue is empty, return the empty
string ''

Examples:
const giftList = new HolidayPriorityQueue();
giftList.addGift( { gift: 'Water gun', priority: 1} );
  // => returns 1
giftList.addGift( { gift: 'Toy truck', priority: 4 } );
  // => returns 2
giftList.addGift( { gift: 'Roller Skates', priority: 3 } );
  // => returns 3

giftList.buyGift();// => returns 'Water gun'
giftList.buyGift();// => returns 'Roller Skates'
giftList.buyGift();// => returns 'Toy truck'

Parameters:
  addGift method takes in an obj
Returns:
  addGift returns new length of queue
  buyGift returns name of priority gift purchased
    or '' if queue is empty
Examples:
  const giftList = new HolidayPriorityQueue();
  giftList.buyGift(), ''
  giftList.addGift({name: 'Water Gun', priority: 1}), 1
  giftList.buyGift(), 'Water Gun'
Pseudocode:
  initialize HolidayPriorityQueue Class
    set up constructor (no args)
      initialize queue prop as an empty array
    define addGift method (takes in gift obj as arg)
      push new gift to queue
      sort queue descending (so highest priority is at the end)
      return new queue length
    define buyGift method (no args)
      returns the last item on queue if exists
      otherwise returns an empty str
*/

class HolidayPriorityQueue {
  constructor() {
    this.queue = [];
  }
  addGift(gift) {
    this.queue.push(gift);
    this.queue.sort((a, b) => b.priority - a.priority);
    return this.queue.length;
  }
  buyGift() {
    return this.queue.pop()?.gift || '';
  }
}

// Utilizing linked list O(n) vs. above O(n log n)
class HolidayPriorityQueue {
  constructor() {
    this.queue = new NodeList();
  }
  addGift(gift) {
    this.queue.addNode(new Node(gift));
    return this.queue.size;
  }
  buyGift() {
    return this.queue.removeHead()?.gift || '';
  }
}

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class NodeList {
  constructor(head = null, size = 0) {
    this.head = head;
    this.size = size;
  }
  addNode(node) {
    if (!this.head) this.head = node;
    else if (node.data.priority < this.head.data.priority) {
      const temp = this.head;
      this.head = node;
      this.head.next = temp;
    } else {
      let current = this.head;
      if (!current.next) current.next = node;
      else {
        while (current) {
          if (node.priority < current.next?.data.priority || Infinity) {
            const temp = current.next
            current.next = node;
            current.next.next = temp;
            break;
          }
          current = current.next;
        }
      }
    }
    this.size++;
  }
  removeHead() {
    const data = this.head?.data || null;
    this.head = this.head?.next || null;
    this.size && this.size--;
    return data;
  }
}