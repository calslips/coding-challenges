/*
this kata suggests implementing a queue using an array and
prepending and popping values. Since prepending values to an
array requires the entire array to be rewritten, this can be
very slow for large queues.

Task
Implement a queue which can enqueue and dequeue values in
constant (O(1)) time. That is, regardless of how many items
are currently in a queue, adding or removing a value takes the
same amount of time.

As long as the specifications are followed, any implementation
is acceptable.

Specifications
Queue represents a "First-in, first-out" data structure in which
  items can be added using the "enqueue" method, and removed using
  the "dequeue" method. For example, if 1, 2, and 3 are added in
  three successive calls to "enqueue," 1 will be returned on the
  next call to "dequeue."
Queue's constructor takes no arguments.
Queue contains no static methods, and 3 prototype methods:
  "enqueue", "dequeue", "size."
Queue.prototype.enqueue takes one argument of any type and adds it
  to the queue in O(1) time.
Queue.prototype.dequeue takes no arguments and removes and returns
  the first item in the Queue in O(1) time. If no items are in the
  queue, this method returns undefined.
Queue.prototype.size returns how many items are currently held in
  the queue in O(1) time.

Parameters:
  constructor, none
  enqueue method, any type
  dequeue, none
  size, none
Returns:
  enqueue, none but adds arg to queue
  dequeue, 1st item in queue or undefined if nothing
  size, number (how many items in queue)
Examples:
Pseudocode:
  initialize queue class
    initialize first prop assigned to 0
    initialize last prop assigned to 0
    initialize queue prop assigned to Map

    define enqueue method, takes an arg
      if first and last props both equal 0
        set both first and last props to 1
      otherwise
        increment last prop
      add arg to queue at last prop key within map

    define dequeue method, no arg
      if both first and last are 0
        return undefined
      otherwise
        get first value and assign to a var
        delete first value in queue
        incrememnt first prop
        if first prop is ever greater than last prop
          assign both the value of 0
        return var containing first value

    define size method, no arg
      return queue prop size
*/

class Queue {
  constructor() {
    this.first = 0;
    this.last = 0;
    this.queue = new Map();
  }
  enqueue(data) {
    if (!(this.first || this.last)) [this.first, this.last] = [1, 1];
    else this.last++;
    this.queue.set(this.last, data);
  }
  dequeue() {
    if (!(this.first || this.last)) return undefined;
    const firstValue = this.queue.get(this.first);
    this.queue.delete(this.first);
    this.first++;
    if (this.first > this.last) [this.first, this.last] = [0, 0];
    return firstValue;
  }
  size() {
    return this.queue.size;
  }
}