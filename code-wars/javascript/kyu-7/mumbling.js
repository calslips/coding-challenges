/*
This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

function accum(s) {
  return s
    .split('')
    .reduce((arr, letter, i) => {
      let letterRepeat = letter.toUpperCase();
      for (let j = 1; j <= i; j++) {
        letterRepeat += letter.toLowerCase();
      }
      arr.push(letterRepeat);
      return arr;
    }, [])
    .join('-');
}

// very roundabout solution = refactor