/*
You have to create a function named reverseIt.

Write your function so that in the case a string or a number is passed in
as the data , you will return the data in reverse order. If the data is any
other type, return it as it is.

Parameters: a value of any data type
Returns:
  if the arg's data type is "string" or "number"
    return the arg reversed
  if arg is any other type
    return arg as is
Examples:
  reverseIt('Hello') // "olleH"
  reverseIt(314159) // 951413
  reverseIt("314159") // "951413"
  reverseIt([1, 2, 3]) // [1, 2, 3]
  reverseIt([]) // []
Pseudocode:
  check if input is of type "string"
    spread string into array
    reverse array
    join reversed array into string
    return reversed string
  check if input is of type "number"
    convert to string
    spread string into array
    reverse array
    join reversed array into string
    convert reversed string into number
    return reversed number
  default (if type is NOT "string" or "number")
    return input unchanged
*/

function reverseIt(data) {
  return typeof data === 'string'
    ? [...data].reverse().join('')
    : typeof data === 'number'
      ? +[...`${data}`].reverse().join('')
      : data
}
