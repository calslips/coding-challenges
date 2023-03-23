/*
You are given a string of n lines, each substring being n characters long: For example:

s = "abcd\nefgh\nijkl\nmnop"

We will study some transformations of this square of strings.

Clock rotation 180 degrees: rot
rot(s) => "ponm\nlkji\nhgfe\ndcba"
selfie_and_rot(s) (or selfieAndRot or selfie-and-rot) It is
initial string + string obtained by clock rotation 180 degrees
with dots interspersed in order (hopefully) to better show the
rotation when printed.

s = "abcd\nefgh\nijkl\nmnop" -->
"abcd....\nefgh....\nijkl....\nmnop....\n....ponm\n....lkji\n....hgfe\n....dcba"
or printed:
|rotation        |selfie_and_rot
|abcd --> ponm   |abcd --> abcd....
|efgh     lkji   |efgh     efgh....
|ijkl     hgfe   |ijkl     ijkl....
|mnop     dcba   |mnop     mnop....
                           ....ponm
                           ....lkji
                           ....hgfe
                           ....dcba
Notice that the number of dots is the common length of
  "abcd", "efgh", "ijkl", "mnop".

Task:
Write these two functions rotand selfie_and_rot and high-order
function oper(fct, s) where fct is the function of one variable
f to apply to the string s (fct will be one of rot, selfie_and_rot)

Examples:
s = "abcd\nefgh\nijkl\nmnop"
oper(rot, s) =>
  "ponm\nlkji\nhgfe\ndcba"
oper(selfie_and_rot, s) =>
  "abcd....\nefgh....\nijkl....\nmnop....\n....ponm\n....lkji\n....hgfe\n....dcba"

Notes:
The form of the parameter fct in oper changes according to the language.
You can see each form according to the language in "Your test cases".
It could be easier to take these katas from number (I) to number (IV)
Forthcoming katas will study other tranformations.

Parameters: a str
Returns: a str
  input str with sections reversed AND
  chars in sections reversed
Examples:
  rot("fijuoo\nCqYVct\nDrPmMJ\nerfpBA\nkWjFUG\nCVUfyL"), "LyfUVC\nGUFjWk\nABpfre\nJMmPrD\ntcVYqC\nooujif"
  rot("rkKv\ncofM\nzXkh\nflCB"), "BClf\nhkXz\nMfoc\nvKkr"
Pseudocode:
  split input str on new line chars
  map over the array of sections
    reverse the order of sections
  map over each section
    reverse the order of chars in the section
  join the array of sections on new line chars
  return rotated str
*/

function rot(strng) {
  return strng.split('\n').reverse().map(s => [...s].reverse().join('')).join('\n');
}

/*
Parameters: a str
Returns: a str
  '.'s added to input str sections,
  amount equal to avg section length
  input str with sections reversed AND
  chars in sections reversed (including '.'s)
Examples:
  selfieAndRot("xZBV\njsbS\nJcpN\nfVnP"), "xZBV....\njsbS....\nJcpN....\nfVnP....\n....PnVf\n....NpcJ\n....Sbsj\n....VBZx"
  selfieAndRot("uLcq\nJkuL\nYirX\nnwMB"), "uLcq....\nJkuL....\nYirX....\nnwMB....\n....BMwn\n....XriY\n....LukJ\n....qcLu"
Pseudocode:
  obtain the average length of each section
  add the above amount of '.'s to the end of each section and join on new line char
  return dot str concatted with new line char concatted with result of rot fn with dot str as arg
*/

function selfieAndRot(strng) {
  const strArr = strng.split('\n'),
        dotCount = strArr.reduce((sum, {length}) => sum + length, 0) / strArr.length,
        dotStr = strArr.map(s => s + '.'.repeat(dotCount)).join('\n');
  return dotStr + '\n' + rot(dotStr);
}

/*
Parameters:
  a fn
  a str
Returns: a str
Examples:
  oper(rot, "fijuoo\nCqYVct\nDrPmMJ\nerfpBA\nkWjFUG\nCVUfyL"), "LyfUVC\nGUFjWk\nABpfre\nJMmPrD\ntcVYqC\nooujif"
  oper(rot, "rkKv\ncofM\nzXkh\nflCB"), "BClf\nhkXz\nMfoc\nvKkr"
  oper(selfieAndRot, "xZBV\njsbS\nJcpN\nfVnP"), "xZBV....\njsbS....\nJcpN....\nfVnP....\n....PnVf\n....NpcJ\n....Sbsj\n....VBZx"
  oper(selfieAndRot, "uLcq\nJkuL\nYirX\nnwMB"), "uLcq....\nJkuL....\nYirX....\nnwMB....\n....BMwn\n....XriY\n....LukJ\n....qcLu"
Pseudocode:
  return result of calling fn input with str input as arg
*/

function oper(fct, s) {
  return fct(s);
}