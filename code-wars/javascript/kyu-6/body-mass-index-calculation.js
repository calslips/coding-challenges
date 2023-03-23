/*
For long period JavaScript warriors trained a lot in coding kata. But to
find way warrior also need physical kata. Some of warriors forgot about
this fact and enemies can use this weakness, your clan is under threat.
You are chosen to fix this situation. Write a function to calculate Body
mass index for each warrior.

bmi = weight / (height*height)

where weight is in kg and height is in meters
Warriors know only their height (in centimetres) and weight (in kilogrames).
Your task is to return an object with fields

value - calculated Body mass index, as a string, rounded to the first decimal.

category - related category, as a string
(from https://en.wikipedia.org/wiki/Body_mass_index ; see below).
Note: determine the category before rounding the BMI.

Ex :
calculateBmi(65,175)
returns: {value: "21.2", category: "Normal (healthy weight)"}

A constant DATA is preloaded for you.
It contains the names of all the categories and their boundaries:
from (kg) is inclusive.
to (kg) is exclusive.

const DATA = [
//  from,  to,       category
    [0,    15,       "Very severely underweight"],
    [15,   16,       "Severely underweight"],
    [16,   18.5,     "Underweight"],
    [18.5, 25,       "Normal (healthy weight)"],
    [25,   30,       "Overweight"],
    [30,   35,       "Obese Class I (Moderately obese)"],
    [35,   40,       "Obese Class II (Severely obese)"],
    [40,   45,       "Obese Class III (Very severely obese)"],
    [45,   50,       "Obese Class IV (Morbidly obese)"],
    [50,   60,       "Obese Class V (Super obese)"],
    [60,   Infinity, "Obese Class VI (Hyper obese)"],
];

Parameters: two numbers
  1st is weight in kg
  2nd is height in cm (need to convert to m)
Returns: an object
  value property
    calculated BMI rounded to 1st decimal place converted to string
  category property
    string description of BMI category
Examples:
  calculateBmi(65,175)
    // {value: "21.2", category: "Normal (healthy weight)"}
Pseudocode:
  iterate through the preloaded DATA array (of arrays)
    calculate BMI from inputs (weight / (height converted to m squared))
    check if BMI is >= inner array at index 0 AND < inner array at index 1
      if it is
        return object with
          value property equal to BMI rounded to 1st decimal converted to string
          category property equal to inner array at index 2
      if NOT
        continue to next iteration
*/

function calculateBmi(weight, height) {
  const bmi = weight / (height / 100) ** 2;
  return {value: bmi.toFixed(1), category: DATA.find(ia => bmi >= ia[0] && bmi < ia[1])[2]};
}