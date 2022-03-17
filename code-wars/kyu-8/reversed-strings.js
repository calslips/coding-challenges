/*
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'
*/

function solution(str){
  let reversedArray = [];
  let stringArray = str.split('');
  for (var i = 0; i < str.length; i++) {
    let lastLetter = stringArray.pop();
    reversedArray.push(lastLetter);
  }
  return reversedArray.join('');
}
