/*
Parameters: array method
Returns: a str
  str version of 'this'
Examples:
  [].toString(), "[]"
  [[[[[[]]],[]]]].toString(), "[[[[[[]]],[]]]]"
  [1.545,[2,4,[23532],55,2.3,[15.22,0.3,[],[[72,3],5]]]].toString(), "[1.545,[2,4,[23532],55,2.3,[15.22,0.3,[],[[72,3],5]]]]"
  ["foobar",[["hello"]]].toString(), "['foobar',[['hello']]]"
Pseudocode:
  initialize body var assigned to empty array
  iterate over els of 'this'
    if current el is an array
      push result of recursive call to fn with current el as arg to body
    otherwise if current el is a str
      push current str wrapped in single quotes to body
    otherwise
      push current el converted to str to body
  return open sq bracket str concatted with
    body joined on comma concatted with
    close sq bracket str
*/

Array.prototype.toString = function() {
  return `[${this.reduce((a, e) => a.concat(Array.isArray(e) ? e.toString() : e === `${e}` ? `'${e}'` : `${e}`), []).join()}]`;
}

Array.prototype.toString = function() {
  const body = [];
  for (const e of this) body.push(Array.isArray(e) ? e.toString() : typeof e === 'string' ? `'${e}'` : `${e}`);
  return '[' + body.join(',') + ']';
}

Array.prototype.toString = function() {
  const body = [];
  for (const e of this) {
    if (Array.isArray(e)) body.push(e.toString());
    else if (typeof e === 'string') body.push(`'${e}'`);
    else body.push(`${e}`);
  }
  return '[' + body.join(',') + ']';
}