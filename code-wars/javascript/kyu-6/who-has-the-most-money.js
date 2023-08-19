/*
You're going on a trip with some students and it's up to you to
keep track of how much money each Student has.
A student is defined like this:

class Student {
  constructor(name, fives, tens, twenties) {
    this.name = name;
    this.fives = fives;
    this.tens = tens;
    this.twenties = twenties;
  }
}

As you can tell, each Student has some fives, tens, and twenties.
Your job is to return the name of the student with the most money.
If every student has the same amount, then return "all".

Notes:

Each student will have a unique name
There will always be a clear winner:
  either one person has the most, or everyone has the same amount
If there is only one student, then that student has the most money

Parameters: an array of objs
Returns: a str
Examples:
  const andy = new Student("Andy", 0, 0, 2);
  const stephen = new Student("Stephen", 0, 4, 0);
  const eric = new Student("Eric", 8, 1, 0);
  const david = new Student("David", 2, 0, 1);
  const phil = new Student("Phil", 0, 2, 1);
  const cam = new Student("Cameron", 2, 2, 0);
  const geoff = new Student("Geoff", 0, 3, 0);

  mostMoney([andy, stephen, eric, david, phil]), "Eric"
  mostMoney([cam, geoff, andy, stephen, eric, david, phil]), "Eric"
  mostMoney([andy]), "Andy"
  mostMoney([stephen]), "Stephen"
  mostMoney([cam, geoff]), "all"
  mostMoney([david, cam, geoff]), "all"
Pseudocode:
  if there is only 1 student
    return that student's name
  find the max monetary value from students
  if every student's total equals max
    return 'all'
  otherwise
    find the student whose total matches max
    return that student's name

  if there is only 1 student
    return that student's name
  iterate over the array of students
    add total prop containing sum of monetary values
  if every student has the same total
    return 'all'
  otherwise
    find the student with the max total
    return that student's name
*/

function mostMoney(students) {
  if (students.length === 1) return students[0].name;
  const max = students.reduce((m, s) => (t = (s.fives * 5) + (s.tens * 10) + (s.twenties * 20)) > m ? t : m, 0);
  if (students.every(s => (s.fives * 5) + (s.tens * 10) + (s.twenties * 20) === max)) return 'all';
  return students.find(s => (s.fives * 5) + (s.tens * 10) + (s.twenties * 20) === max).name;
}

function mostMoney(students) {
  if (students.length === 1) return students[0].name;
  students.forEach(s => s.total = (s.fives * 5) + (s.tens * 10) + (s.twenties * 20));
  if (students.slice(1).every((s, i) => s.total === students[i].total)) return 'all';
  const max = Math.max(...students.map(s => s.total));
  return students.find(s => s.total === max).name;
}