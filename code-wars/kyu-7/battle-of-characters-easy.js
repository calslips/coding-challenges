/*
Groups of characters decided to make a battle. Help them to figure out which group is more powerful. Create a function that will accept 2 strings and return the one who's stronger.

Rules:
Each character have its own power: A = 1, B = 2, ... Y = 25, Z = 26
Strings will consist of uppercase letters only
Only two groups to a fight.
Group whose total power (A + B + C + ...) is bigger wins.
If the powers are equal, it's a tie.
Examples:
  battle("ONE", "TWO"); // => "TWO"`
  battle("ONE", "NEO"); // => "Tie!"
*/

function battle(x, y) {
  const points = group => group.split('').map(char => char.charCodeAt() - 64).reduce((sum, num) => sum + num);
  return points(x) > points(y) ? x : points(x) < points(y) ? y : 'Tie!';
}