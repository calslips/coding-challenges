/**
 * Complete the method which returns the number which is most frequent in
 * the given input array. If there is a tie for most frequent number,
 * return the largest number among them.

Note: no empty arrays will be given.

Examples
[12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
[12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
[12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3
 */

function highestRank(arr){
  const rank = {}
  let mostFrequent = arr[0];
  arr.forEach(e => rank[e] ? rank[e]++ : rank[e] = 1);
  for (let num in rank) {
    if (rank[num] > rank[mostFrequent]) {
      mostFrequent = +num;
    }
  }
  return mostFrequent;
}