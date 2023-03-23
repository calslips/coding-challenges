/*
Some light bulbs are placed in a circle(clockwise direction).
Each one is either on (1) or off (0).

Every turn, the light bulbs change their states. If a light
bulb was on at the previous turn, the light bulb to the right
of it changes its state, i.e. if lights[0] is on. then, if
lights[1] was on, it turns off and vice versa.

Find the state of the light bulbs after n turns.

Input/Output
[input] integer array lights
A non-empty array, the initial states of the light bulbs.

2 ≤ lights.length ≤ 70

[input] integer n
The number of turns.

1 ≤ n ≤ 300

[output] an integer array
The final light bulbs' states.

Example
For lights = [0,1,1,0,1,1], n = 2, the output should be [1, 0, 1, 1, 0, 1]

Here are how the light bulbs' states change each turn:

0) 0 1 1 0 1 1   -- orginal state
1) 1 1 0 1 1 0   -- 1st turn
2) 1 0 1 1 0 1   -- 2nd turn```
If it's hard to understand, please look at the following "image" ;-)

turn 0:
     0       <--- lights[0]
 1       1   <--- lights[5](left) and lights[1](right)
 1       1   <--- lights[4](left) and lights[2](right)
     0       <--- lights[3]

turn 1:
     1
 0       1
 1       0
     1
lights[0] changed to on, because its left side(lights[5])
is on at the previous turn(turn0)
lights[2] changed to off, because its left side(lights[1])
is on at the previous turn(turn0)
lights[3] changed to on, because its left side(lights[2])
is on at the previous turn(turn0)
lights[5] changed to off, because its left side(lights[4])
is on at the previous turn(turn0)

turn 2:
     1
 1       0
 0       1
     1
lights[1] changed to off, because its left side(lights[0])
is on at the previous turn(turn1)
lights[2] changed to on, because its left side(lights[1])
is on at the previous turn(turn1)
lights[4] changed to off, because its left side(lights[3])
is on at the previous turn(turn1)
lights[5] changed to on, because its left side(lights[4])
is on at the previous turn(turn0)

Parameters:
  an array of integers ( 0 || 1 )
  a num (number of turns)
Returns: an array of integers ( 0 || 1 )
Examples:
  lightBulbs([0, 1, 1, 0, 1, 1], 2)
          // [1, 0, 1, 1, 0, 1]
  lightBulbs([0, 0, 1, 1, 1], 5)
          // [1, 1, 1, 0, 1]
  lightBulbs([1, 0, 1, 1, 0, 1, 1, 0, 1], 10)
          // [0, 1, 1, 0, 1, 1, 0, 1, 1]
  lightBulbs([1, 1, 0, 0, 0, 1, 1, 1, 1, 1], 20)
          // [1, 0, 0, 0, 0, 0, 1, 1, 0, 1]
  lightBulbs([1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1], 50)
          // [0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0]
Pseudocode:
  if input num, n is 0
    return lights arr
  initialize a prev var to hold a copy of lights arr
  initialize a curr var to hold an empty arr
  loop over prev arr
    if curr at current index is undefined
      push current num in prev arr to curr arr
    if prev arr at current index is 1
      invert value at next index
      (if at end, change 0th el, otherwise push to curr)
  return recursive call to lightBulbs with curr arr as 1st arg
    & decremented n as the 2nd arg
*/

function lightBulbs(lights, n) {
  const prev = [...lights], curr = [];
  for (let i = 0; i < prev.length; i++) {
    if (curr[i] === undefined) curr.push(prev[i]);
    if (prev[i]) i === prev.length - 1 ? curr[0] = +!prev[0] : curr.push(+!prev[i + 1]);
  }
  return  n === 1 ? curr : lightBulbs(curr, --n);
}