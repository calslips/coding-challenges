/*
Imagine JavaScript didn't natively include the call function.
The apply function however still exists.

Using apply, write call.

Note: console.log internally uses the 'call' function, which
therefore means you can't debug using console.log as it will
either call an empty function or cause an infinite loop.

Parameters:
  thisArg, target obj
  args, individual & any amount
    (rest into an array for use in fn)
Returns:
  result of calling this fn with apply method,
    thisArg as 1st arg
    array of args as 2nd arg
Examples:
  function Product(name, price) {
		this.name = name;
		this.price = price;
	}
	function Food(name, price) {
		Product.call(this, name, price);
		this.category = 'food';
	}
	function Toy(name, price) {
		Product.call(this, name, price);
		this.category = 'toy';
	}

	const cheese = new Food('feta', 5);
	const fun = new Toy('robot', 40);

	cheese.price, 5
	fun.name, 'robot'
Pseudocode:
  return result of apply called on 'this' obj
    with thisArg and args array passed in
*/

Function.prototype.call = function(thisArg, ...args) {
  return this.apply(thisArg, args);
}