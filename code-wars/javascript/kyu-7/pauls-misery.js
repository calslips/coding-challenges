/**
 * Paul is an excellent coder and sits high on the CW leaderboard.
 * He solves kata like a banshee but would also like to lead a normal life,
 * with other activities. But he just can't stop solving all the kata!!

Given an array (x) you need to calculate the Paul Misery Score.
The values are worth the following points:
kata = 5
Petes kata = 10
life = 0
eating = 1

The Misery Score is the total points gained from the array.
Once you have the total, return as follows:
< 40 = 'Super happy!'
< 70 >= 40 = 'Happy!'
< 100 >= 70 = 'Sad!'
> 100 = 'Miserable!'
 */

function paul(x) {
  const pms = {
    'kata': 5,
    'Petes kata': 10,
    'life': 0,
    'eating': 1,
  };
  const s = x.reduce((s, v) => s + pms[v], 0);
  switch (true) {
    case s < 40: return 'Super happy!';
    case s < 70: return 'Happy!';
    case s < 100: return 'Sad!';
    default: return 'Miserable!';
  }
}