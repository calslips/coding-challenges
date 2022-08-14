/**
 *In SQL, an inner join query joins two tables by selecting records which
 satisfy the join predicates and combining column values of the two tables.

Task
Write a function to mimic an SQL inner join. The function should take two
2D arrays and two index values, which specifies the column to perform the
join in each array, as parameters.

For example, the following code illustrates an example to join two arrays
arrA and arrB using the first column (column index = 0) of each array.

let arrA = [
  [1, 10],
  [2, 20],
  [3, 30]
];

let arrB = [
  [1, 100],
  [2, 200],
  [4, 400]
];

let indA = 0;
let indB = 0;

innerJoin(arrA, arrB, indA, indB);
// [
//   [1, 10, 1, 100],
//   [2, 20, 2, 200]
// ]
Assume that each 2D array contains only primitive data types (number,
  string, boolean, null and undefined), but null and undefined do not
  match to any values in the join.

Further explanation about inner join
For those who are not familiar with SQL, some more examples are shown
below to help you understand what joins are.

Assume that we have tables T1 and T2  as shown below:

T1

| COL1 | COL2 |
| ---- | ---- |
| 1    | A    |
| 2    | B    |
| 3    | C    |
T2

| COL1 | COL2 |
| ---- | ---- |
| 1    | X    |
| 2    | Y    |
| 4    | Z    |
The result of an inner join using the predicate T1.COL1 = T2.COL1 is:

| T1.COL1 | T1.COL2 | T2.COl1 | T2.COL2 |
| ------- | ------- | ------- | ------- |
| 1       | A       | 1       | X       |
| 2       | B       | 2       | Y       |
When performing a join, each row from the first table needs to be compared
with each row from the second table. For example, assume that we have
tables T1 and T2  as shown below:

T1

| COL1 | COL2 |
| ---- | ---- |
| 1    | A    |
| 2    | B    |
| 2    | C    |
T2

| COL1 | COL2 |
| ---- | ---- |
| 1    | X    |
| 1    | Y    |
| 2    | Z    |
The result of an inner join using the predicate T1.COL1 = T2.COL1 is:

| T1.COL1 | T1.COL2 | T2.COl1 | T2.COL2 |
| ------- | ------- | ------- | ------- |
| 1       | A       | 1       | X       |
| 1       | A       | 1       | Y       |
| 2       | B       | 2       | Z       |
| 2       | C       | 2       | Z       |
For more details: https://en.wikipedia.org/wiki/Join_(SQL)#Inner_join

Pseudocode:
  initialize a joined array, assigned value of an empty array
  iterate over arrayA
    for each A inner array
      iterate over each of B's inner arrays
        check if the value in A inner array at indA is NOT null,
        NOT undefined,
        and matches the value in B inner array at indB
          if all the above is TRUE
            concat inner array A and inner array B and push to joined array
          if NOT
            continue to next iteration
  return joined array
 */

function innerJoin(arrA, arrB, indA, indB) {
  return arrA.reduce((j, iaA) => (arrB.forEach((iaB) => (a = iaA[indA]) !== null && a !== undefined && a === iaB[indB] && j.push(iaA.concat(iaB))), j), []);
}

// function innerJoin(arrA, arrB, indA, indB) {
//   return arrA.reduce((j, iaA) => (arrB.forEach((iaB) => (a = iaA[indA]) !== null && a !== undefined && a === iaB[indB] && j.push([...iaA, ...iaB])), j), []);
// }

// function innerJoin(arrA, arrB, indA, indB) {
//   return arrA.reduce((j, _, i) => (arrB.forEach((iaB) => (a = arrA[i][indA]) !== null && a !== undefined && a === iaB[indB] && j.push([...arrA[i], ...iaB])), j), []);
// }

//   return arrA.map((_, i) => arrA[i][indA] === arrB[i][indB]);
//   return arrA.reduce((j, _, i) => arrA[i][indA] === arrB[i][indB] ? [...j, [...arrA[i], ...arrB[i]]] : j, []);