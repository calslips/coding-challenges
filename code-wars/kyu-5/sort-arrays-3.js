/*
This time the input is a sequence of course-ids that are
formatted in the following way:
name-yymm

The return of the function shall first be sorted by yymm,
then by the name (which varies in length).

Parameters: an array of strings
  each string formatted as name-yymm
Returns: array sorted
  1st by 'yymm' then by 'name'
Examples:
  sortme(["web-1305", "site-1305", "web-1304", "site-1304"])
    // ["site-1304", "web-1304", "site-1305", "web-1305"]
  sortme(['aeb-1305', 'site-1305', 'play-1215', 'web-1304', 'site-1304', 'beb-1305'])
    // ["play-1215", "site-1304", "web-1304", "aeb-1305", "beb-1305", "site-1305"]
  sortme([])
    // []
  sortme(['aeb-1305', 'aeb-1305'])
    // ['aeb-1305', 'aeb-1305']
Pseudocode:
  call sort on input array
    first compare the difference between the 'yymm' portion of strings
    if the difference is anything other than 0, return it
    otherwise compare the 'name' portions alphabetically
  return the sorted array
*/

sortme = function( courses ) {
  return courses.sort((a, b) => {
    const [aName, aNum] = a.split('-'), [bName, bNum] = b.split('-');
    return aNum - bNum || aName.localeCompare(bName);
  });
}