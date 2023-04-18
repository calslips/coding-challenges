/*
Someone was hacking the score. Each student's record is given as
an array The objects in the array are given again as an array of
scores for each name and total score. ex>

var array = [
  ["name1", 445, ["B", "A", "A", "C", "A", "A"]],
  ["name2", 140, ["B", "A", "A", "A"]],
  ["name3", 200, ["B", "A", "A", "C"]]
];

The scores for each grade is:
A: 30 points
B: 20 points
C: 10 points
D: 5 points
Everything else: 0 points

If there are 5 or more courses and all courses has a grade of B
or above, additional 20 points are awarded. After all the
calculations, the total score should be capped at 200 points.

Returns the name of the hacked name as an array when scoring
with this rule.

var array = [
  ["name1", 445, ["B", "A", "A", "C", "A", "A"]],
    // name1 total point is over 200 => hacked
  ["name2", 110, ["B", "A", "A", "A"]],
    //  name2 point is right
  ["name3", 200, ["B", "A", "A", "C"]]
    // name3 point is 200 but real point is 90 => hacked
];

return ["name1", "name3"];

Parameters: an array of arrays
  each sub array contains a str, a num, an array of strs
Returns: an array of strs
  names of students whose scores were hacked
Examples:
  const array = [
    ["name1", 150, ["B", "A", "A", "C", "A", "A"]],
    ["name2", 120, ["B", "A", "A", "A"]],
    ["name3", 160, ["B", "A", "A", "A","A"]],
    ["name4", 140, ["B", "A", "A", "C", "A"]]
  ];
  findHack((array)), ["name2", "name4"]
Pseudocode:
  filter the input array
    if the points are greater than 200
    or if the grades dont match the points
      (5 grades or more and all B or better earn an additional 20 pts)
      keep the student
  map over the filtered array
    keep only their name
  return name array
*/

function findHack(arr) {
  return arr.filter(([_, points, grades]) => points > 200 || calculatePoints(grades) !== points).map(([name]) => name);
}
function calculatePoints(arr) {
  const gradeMap = {A: 30, B: 20, C: 10, D: 5}, extraCredit = arr.length > 4 && arr.every(g => g < "C");
  return arr.reduce((s, g) => s + (gradeMap[g] || 0), extraCredit ? 20 : 0);
}