/*
First, You will write a very basic compression algorithm

It gets a string:
  string="aaaaaaaabaaaa"
And generates an array that sums all the repeating characters
like so:
  compressed=[[8,"a"],[1,"b"],[4,"a"]]
The compressed version is turned into a string:
  compressed='[[8,"a"],[1,"b"],[4,"a"]]'

Finally,
If the compressed version is shorter than the original string,
the function will return the compressed version.
Otherwise it will return the original string.

Example1:
string1="aaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaa"
output1='[[26,"a"],[1,"b"],[18,"a"]]'

Example2:
string2="abcde"
output2="abcde"

After you created the compression algorithm,
create a decompression algorithm:

It gets a string (output1, output2, etc.).
If the string is comrpessed, it returns the uncompressed version,
If it is uncompressed, it returns the original string unchanged.

//output1='[[26,"a"],[1,"b"],[18,"a"]]'
uncompress(output1)
//returns
"aaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaa"

//output2="abcde"
uncompress(output2)
//returns
"abcde"

Note: The original string may not contain "[]" for obvious reasons.

Parameters:
  compress
    a str
  decompress
    a 2d array
      each sub array containing a num and a char
Returns:
  compress
    a 2d array
  decompress
    a str
Examples:
  compress('aaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac'),
    '[[14,"a"],[1,"b"],[41,"a"],[1,"c"]]'
  compress('abcde'), 'abcde'
  decompress('[[14,"a"],[1,"b"],[41,"a"],[1,"c"]]'),
    'aaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac'
  decompress('abcde'), 'abcde'
Pseudocode:
  compress
    create a result array
    iterate over the chars of input str
    keep track of index & count (start at 1) of duplicates
      if current char equals next char
        increment count & continue
      otherwise
        create an array
        place count & current char in array
        push array to result array
        reassign count to 1
    if result array stringified is shorter than OG str
      return array stringified
    otherwise
      return OG str
  decompress
    if input is NOT a compressed str
      return input as is
    otherwise
      create a result str
      convert compressed str input to array
      iterate over the subarrays of input array
        concat result with subarray's char at index 1 repeated num at index 0 times
      return result str
*/

const compress = str => {
  const arr = [];
  for (let i = 0, count = 1; i < str.length; i++) {
    if (str[i] === str[i + 1]) count++;
    else arr.push([count, str[i]]), count = 1;
  }
  const s = JSON.stringify(arr);
  return s.length < str.length ? s : str;
};

const decompress = c => {
  if (c[0] !== '[') return c;
  return JSON.parse(c).reduce((a, c) => a + c[1].repeat(c[0]), '');
};