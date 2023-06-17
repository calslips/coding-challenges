/*
In another Kata I came across a weird sort function to implement. We had to
sort characters as usual ( 'A' before 'Z' and 'Z' before 'a' ) except that the
numbers had to be sorted after the letters ( '0' after 'z') !!!

(After a couple of hours trying to solve this unusual-sorting-kata I discovered
  final tests used **usual** sort (digits **before** letters :-)

So, the unusualSort/unusual_sort function you'll have to code will sort letters
as usual, but will put digits (or one-digit-long numbers ) after letters.

Examples
unusualSort(["a","z","b"])  // -> ["a","b","z"]  as usual
unusualSort(["a","Z","B"])  // -> ["B","Z","a"]  as usual

//... but ...
unusualSort(["1","z","a"])  // -> ["a","z","1"]
unusualSort(["1","Z","a"])  // -> ["Z","a","1"]
unusualSort([3,2,1"a","z","b"])  // -> ["a","b","z",1,2,3]
unusualSort([3,"2",1,"a","c","b"])  // -> ["a","b","c",1,"2",3]

Note:
digits will be sorted after "same-digit-numbers",
eg: 1 is before "1", "2" after 2.

unusualSort([3,"2",1,"1","3",2])  // -> [1,"1",2,"2",3,"3"]

You may assume that argument will always be an array/list of characters or
one-digit-long numbers.

Parameters: an array
  containing strings and/or numbers
Returns: an array
  with elements sorted (letters before numbers)
  if the string can convert to a number,
  sort the number first then the string number after
Examples:
  unusualSort(["a","z","b"]) // ["a","b","z"]
  unusualSort(["a","Z","B"]) // ["B","Z","a"]
  unusualSort(["1","z","a"]) // ["a","z","1"]
  unusualSort(["1","Z","a"]) // ["Z","a","1"]
  unusualSort([3,2,1"a","z","b"]) // ["a","b","z",1,2,3]
  unusualSort([3,"2",1,"a","c","b"]) // ["a","b","c",1,"2",3]
  unusualSort([3,"2",1,"1","3",2]) // [1,"1",2,"2",3,"3"]
Pseudocode:
  return input array sorted
    if both are NaN
      sort uppercase before lowercase
    if only a is a num
      return 1
    if only b is a num
      return -1
    if both are nums
      if the nums are of equal value but not of same type
        sort number 1st
      otherwise
        sort asc
*/

function unusualSort(arrayOfChars) {
  return arrayOfChars.sort((a, b) =>
    isNaN(a) && isNaN(b)
      ? a.charCodeAt() - b.charCodeAt()
      : isNaN(a)
      ? -1
      : isNaN(b)
      ? 1
      : a * 1 !== b * 1
      ? a - b
      : Number.isInteger(a)
      ? -1
      : 1
  );
}

function unusualSort(arrayOfChars) {
  return arrayOfChars.sort((a, b) =>
    isNaN(a) && isNaN(b)
      ? a.charCodeAt() - b.charCodeAt()
      : isNaN(a)
      ? -1
      : isNaN(b)
      ? 1
      : !(isNaN(a) || isNaN(b)) && a * 1 !== b * 1
      ? a - b
      : typeof a !== typeof b && Number.isInteger(a)
      ? -1
      : 1
  );
}

function unusualSort(arrayOfChars) {
  return arrayOfChars.sort((a, b) => {
    if (isNaN(a) && isNaN(b)) return a.charCodeAt() - b.charCodeAt();
    if (isNaN(a)) return -1;
    if (isNaN(b)) return 1;
    if (!isNaN(a) && !isNaN(b)) {
      if (a * 1 === b * 1 && typeof a !== typeof b) {
        if (Number.isInteger(a)) return -1;
        return 1
      }
      return a - b;
    }
  });
}