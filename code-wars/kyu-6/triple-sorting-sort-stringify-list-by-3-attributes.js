/*
Tale University is a bit messy, and can't maintain an ordered
list of their student. Tale's dean wants to print a sortet list
of his students by the gpa, last name and age and post it on
the walls so everybody can be impressed of his great students.

Given a list of students, sort them by (from most important to
  least important):

GPA (descending)
First letter of last name (ascending)
Age (ascending)

And the class Student:

class Student {
  constructor(age, gpa, fullName) {
    this.age = age;
    this.gpa = gpa;
    this.fullName = fullName;
  };
};

Return the sorted result as full names string, comma separated.

For Example, given the list (name, age, gpa):

David Goodman, 23, 88
Mark Rose, 25, 82
Jane Doe, 22, 90
Jane Dane, 25, 90

sort(students) should return
  "Jane Doe,Jane Dane,David Goodman,Mark Rose"

Parameters: an array of objs (students)
Returns: a str
  comma-separated full names of students
  after sorting by
  gpa (desc) > 1st letter last name (asc) > age (asc)
Examples:
  sort([
    {
      age: 23,
      gpa: 88,
      fullName: "David Goodman"
    },
    {
      age: 25,
      gpa: 82,
      fullName: "Mark Rose"
    },
    {
      age: 22,
      gpa: 90,
      fullName: "Jane Doe"
    },
    {
      age: 25,
      gpa: 90,
      fullName: "Jane Dane"
    },
  ]), "Jane Doe,Jane Dane,David Goodman,Mark Rose"
Pseudocode:
  sort students first by gpa descending,
    then by first letter of last name ascending,
    then by age ascending
  map over sorted students
    creating an array of student names
  return array of student names converted to str
    joined on comma
*/

function sort(students) {
  return students
    .sort(
      (a, b) =>
        b.gpa - a.gpa ||
        a.fullName.split(' ')[1][0].charCodeAt() -
          b.fullName.split(' ')[1][0].charCodeAt() ||
        a.age - b.age
    )
    .map((s) => s.fullName)
    .join(',');
}