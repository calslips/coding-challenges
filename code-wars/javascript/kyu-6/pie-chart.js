/*
We are to draw a pie chart! Our parameter shall be given in JSON.

The goal of this kata is to return a JSON containing each key
with it corresponding angle to two decimal places when necessary.

Example
Parameter
  {"Hausa": 4, "Yoruba" : 5, "Igbo" : 6, "Efik" : 1, "Edo" : 4}
should return a JSON like
  {"Hausa":72,"Yoruba":90,"Igbo":108,"Efik":18,"Edo":72}

Parameter
  {"English": 4, "Polish" : 12, "Russian" : 10, "Spanish" : 2}
should return a JSON like
  {"English":51.43,"Polish":154.29,"Russian":128.57,"Spanish":25.71}

Parameter
  {"Android": 500, "iOS" : 270, "Microsoft" : 230}
should return a JSON like
  {"Android":180,"iOS":97.2,"Microsoft":82.8}

Parameters: a stringified object
Returns: a stringified object
  values changed to the corresponding angle in a pie chart
  rounded to 2 decimal places
Examples:
  pieChart('{"Hausa": 4, "Yoruba" : 5, "Igbo" : 6, "Efik" : 1, "Edo" : 4}'),
    '{"Hausa":72,"Yoruba":90,"Igbo":108,"Efik":18,"Edo":72}'
  pieChart('{"English": 4, "Polish" : 12, "Russian" : 10, "Spanish" : 2}'),
    '{"English":51.43,"Polish":154.29,"Russian":128.57,"Spanish":25.71}'
  pieChart('{"Android": 500, "iOS" : 270, "Microsoft" : 230}'),
    '{"Android":180,"iOS":97.2,"Microsoft":82.8}'
Pseudocode:
  convert input json into an obj
  get the sum of all the values within input obj
  iterate over the props of input obj
    replace the value with the numerical angle rounded to 2 decimals
    (current value / sum of all * 360)
  convert obj back to json
  return modified json
*/

function pieChart(obj) {
  const o = JSON.parse(obj), total = Object.values(o).reduce((s, n) => s + n, 0);
  Object.keys(o).forEach(k => o[k] = +(o[k] / total * 360).toFixed(2));
  return JSON.stringify(o);
}