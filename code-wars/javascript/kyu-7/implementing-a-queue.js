/*
Queues are linear collections of objects that can be
inserted and removed in a FIFO (first in, first out) manner.
An example of a queue in real life and not strictly computing
would simply be the dreaded waiting line, i.e.the first person
in line is also the first one who gets out.

Waiting Lines

In this problem, we are going to be implementing our own
enqueue, dequeue, and size methods for the queue constructor we
are creating, so we should be able to create new instances of
the Queue.
The enqueue method takes in the item as a parameter, while the
dequeue method does not.
The size method simply returns the number of items in the queue.
Wait, what?
To enqueue an item into the queue means to insert an item into
the back, or tail, of the queue.
To dequeue an item means means to remove the item at the front,
or head, of the queue.
In a queue, we remove the item the least recently added.
JavaScript Methodology
Queues can be implemented in JavaScript using arrays.

You can use the built in push or unshift functions in order to add
items to the queue array as well as the shift or pop to remove them.

Parameters:
  enqueue takes in a value
Returns:
  constructor returns a new instance of a queue
  enqueue does not return a value but adds the passed
    in value to the back of the queue
  dequeue returns the value taken off the front of the queue
  size returns the number of values within the queue
Examples:
  const queue = new Queue();
  queue.size; // 0
  quque.enqueue('blah blah blah');
  queue.size; // 1
  queue.dequeue(); // 'blah blah blah'
  queue.size; // 0
Pseudocode:
  constructor to contain a queue property of 'this' obj,
    assigned to an empty array
  enqueue method to point to a function that takes in a value
    pushes this value to the queue prop of 'this' obj
    no return
  dequeue method removes the 1st value in the queue prop of 'this' obj
    returns the removed value
  size prop accesses the length of queue prop of 'this' obj
    returns the length
*/

const Queue = function() {
  this.queue = [];
};

Queue.prototype.enqueue = function(item) {
  this.queue.push(item);
};

Queue.prototype.dequeue = function() {
  return this.queue.shift();
};

Queue.prototype.size = function() {
  return this.queue.length;
};