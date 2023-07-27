/*
Your task is to write a getCellAddresses(range) function that
takes a range of Google Sheets cells as a parameter, and returns
an array of addresses of all cells in the specified range.

Notes
Letters in addresses: from A-Z (Google Sheets should not be
confused with Excel spreadsheets. In Excel, the "Z" column is
followed by "AA", etc. In Google Sheets, the last column is "Z")

The final array must be sorted by the number in each address
(ascending)

The letters in the addresses must go in alphabetical order
(A to Z).

For example, if the range is "A1:C3", the function should return
[ 'A1', 'B1', 'C1', 'A2', 'B2', 'C2', 'A3', 'B3', 'C3' ],
not [ 'B1', 'A1', 'C1', 'C2', 'B2', 'A2', 'A3', 'C3', 'B3' ] or
something else.

If an invalid range is passed to the function,
the function should return [].

The ranges that are considered to be invalid:
Those in which the first cell is further away than the second.
  Example: H7:F3
Those in which two identical cells are specified.
  Example: C2:C2
In Google Sheets you cannot find such a range, because it is
considered as one cell. For this reason, such a range is invalid
in this kata.

Parameters: a str
Returns: an array of strs
Examples:
  getCellAddresses("A1:A10"),
    ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9', 'A10']
  getCellAddresses("B3:D5"),
    ['B3', 'C3', 'D3', 'B4', 'C4', 'D4', 'B5', 'C5', 'D5']
  getCellAddresses("A1:B2"),
    ['A1', 'B1', 'A2', 'B2']
  getCellAddresses("H7:F3"),
    []
  getCellAddresses("C2:C2"),
    []
Pseudocode:
  initialize an addresses var assigned to an empty arr
  split str on colon
  if resulting elements are the same
    return addresses
  isolate cols (letter) from rows (nums)
  if the left col comes after the right col
    return addresses
  create a loop to run from 1st row to last row
    create a loop to run from first col to last col
      concat current col char with current row num
      push cell address to addresses arr
  return addresses
*/

function getCellAddresses(range) {
  const addrs = [], [first, last] = range.split(':');
  if (first === last) return addrs;
  const col1 = first.charCodeAt(0), row1 = +first.slice(1), colN = last.charCodeAt(0), rowN = +last.slice(1);
  if (col1 > colN) return addrs;
  for (let r = row1; r <= rowN; r++) for (let c = col1; c <= colN; c++) addrs.push(String.fromCharCode(c) + r);
  return addrs;
}