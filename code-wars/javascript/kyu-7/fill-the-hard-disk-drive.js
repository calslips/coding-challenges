/*
Your task is to determine how many files of the copy queue you will be
able to save into your Hard Disk Drive. The files must be saved in the
order they appear in the queue.

Do not expect any negative or invalid inputs.

Input:
Array of file sizes (0 <= s <= 100)
Capacity of the HD (0 <= c <= 500)
Output:
Number of files that can be fully saved in the HD.

Parameters:
  an array of numbers (file sizes)
  a singe number (capacity of storage)
Returns: the number of files that fit within the storage
Examples:
  save([4, 4, 4, 3, 3], 12) // 3
  save([4, 4, 4, 3, 3], 11) // 2
  save([4, 8, 15, 16, 23, 42], 108) // 6
  save([13], 13) // 1
  save([1, 2, 3, 4], 250) // 4
  save([11, 13, 15, 17, 19], 8) // 0
Pseudocode:
  initialize count variable to 0
  iterate over input array
    check if current element fits within remaining capacity
      if so,
        add 1 to count, subtract current element from capacity
      if not
        exit loop
  return count
*/

function save(sizes, hd) {
  let count = 0;
  for (; sizes[count] <= hd; count++) {
    hd -= sizes[count];
  }
  return count;
}