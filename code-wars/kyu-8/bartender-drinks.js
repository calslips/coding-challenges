/**
 * Complete the function that receives as input a string, and produces outputs
 * according to the following table:

Input	Output
"Jabroni"	"Patron Tequila"
"School Counselor"	"Anything with Alcohol"
"Programmer"	"Hipster Craft Beer"
"Bike Gang Member"	"Moonshine"
"Politician"	"Your tax dollars"
"Rapper"	"Cristal"
anything else	"Beer"
Note: anything else is the default case: if the input to the function is not any
of the values in the table, then the return value should be "Beer".

Make sure you cover the cases where certain words do not show up with correct
capitalization. For example, the input "pOLitiCIaN" should still return "Your tax dollars".
 */

function getDrinkByProfession(param){
  param = param.split(' ').map(w => w[0].toUpperCase() + w.slice(1).toLowerCase()).join(' ');
  switch (param) {
    case 'Jabroni':
      return 'Patron Tequila';
    case 'School Counselor':
      return 'Anything with Alcohol';
    case 'Programmer':
      return 'Hipster Craft Beer';
    case 'Bike Gang Member':
      return 'Moonshine';
    case 'Politician':
      return 'Your tax dollars';
    case 'Rapper':
      return 'Cristal';
    default:
      return 'Beer';
  }
}