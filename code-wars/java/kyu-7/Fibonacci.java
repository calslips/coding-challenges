/*
 * Create function fib that returns n'th element of Fibonacci
 * sequence (classic programming task).
 *
 * Parameters: an int
 * Returns: long int
 * Examples:
 *   Fibonacci.fib(1), 1
 *   Fibonacci.fib(2), 1
 *   Fibonacci.fib(3), 2
 *   Fibonacci.fib(4), 3
 *   Fibonacci.fib(5), 5
 * Pseudocode:
 *   if input ie either 1 or 2
 *     return 1
 *   otherwise
 *     return recursive call to fib with 1 subtracted from arg
 *     plus recursive call to fib with 2 subtracted from arg
 */

public class Fibonacci {
	public static long fib(int n) {
		if (n == 1 || n == 2) return 1;
		return fib(n - 1) + fib(n - 2);
  }
}