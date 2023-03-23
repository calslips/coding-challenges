/*
Once upon a time, a CodeWarrior, after reading a discussion on
what can be the plural, took a look at this page and discovered
that more than 1 "kind of plural" may exist.

For example Sursurunga Language distinguishes 5 types of numbers:
singular (1 thing), dual (2 things), 'trial' or 'lesser paucal'
(3 or 4), 'greater paucal' (more than 4) and plural (many).

In this kata, you'll have to handle only four types of numbers:

singular: 0 or 1 thing
dual: 2 things
paucal: 3 to 9 things
plural: more than 9 things
To add some flavor the number-marker will not be added in same places:

singular, no marker : 1 cat
dual, prefixed "bu" : 2 cats -> 2 bucat
paucal, suffixed "zo" : 4 cats -> 4 catzo
plural, "circumfixed ga" : 100 cats -> 100 gacatga
As you all ("hawk eyes") have seen, the final s of english plural disappears.

( btw these markers, of course, have absolutely nothing to do with
  true sursurunga language, we're just talking about "pig-sursurunga"
  with pig as pig in "pig latin" )

Your Job . . .
. . . if you accept it, will be to write a sursurungal function which
get a string as argument and returns this string with words in it
eventually converted to their "pig-sursurunga number type".

If a number ( ie 1 or more digit ) + a space + a word ( letters ) are
found then the word should be converted.

Each group of number+space+word found in the string should be evaluated.

Examples :
sursurungal('1 tiger')      // -> '1 tiger' (singular, nothing to change)
sursurungal('2 tigers')     // -> '2 butiger' (dual)
sursurungal('3 tigers')     // -> '3 tigerzo' (paucal)
sursurungal('13 tigers')    // -> '13 gatigerga' (plural)
sursurungal('5 lions and 15 zebras')
  // -> '5 lionzo and 15 gazebraga' (paucal and plural)
You may assume at least 1 number+space+word group will be provided.

Beware s of english plural should be removed,
not ending s of some singular words ( eg "kiss" )

sursurungal("7 kisses") // -> '7 kissezo'
sursurungal("1 kiss")   // -> '1 kiss'

Parameters: a string
  (with at least 1 num + space + word pair)
Returns: a string
  (words modified to the expected plurals)
Examples:
  sursurungal("0 tomato") // "0 tomato"
  sursurungal("1 tomato") // "1 tomato"
  sursurungal("2 tomatoes") // "2 butomatoe"
  sursurungal("3 tomatoes") // "3 tomatoezo"
  sursurungal("5 tomatoes") // "5 tomatoezo"
  sursurungal("7 tomatoes") // "7 tomatoezo"
  sursurungal("3 tomatoes") // "3 tomatoezo"
  sursurungal("10 tomatoes") // "10 gatomatoega"
Pseudocode:
  convert the string into an array, split on spaces
  iterate over the array, for each
    if current is a number
      target the next element
      if current num is less than 2
        continue, do nothing
      if current num is less than 3
        concat 'bu' with next and remove ending 's'
      if current num is less than 10
        remove ending 's' and concat next with 'zo'
      otherwise
        remove ending 's' and concat next with 'ga' (start & end)
    otherwise
      return current as is
  return modified array joined on spaces
*/

function sursurungal(txt) {
  const hasNewLines = txt.includes('\n'),
        txtArray = hasNewLines ? txt.split('\n').join('  ').split(' ') : txt.split(' ');
  console.log({txtArray})
  txtArray.forEach((e, i, a) => {
    if (!isNaN(n = +e)) {
      if (n > 9) a[i + 1] = 'ga' + a[i + 1].slice(0, -1) + 'ga';
      else if (n > 2) a[i + 1] = a[i + 1].slice(0, -1) + 'zo';
      else if (n > 1) a[i + 1] = 'bu' + a[i + 1].slice(0, -1);
    }
  });
  return hasNewLines
    ? txtArray.reduce((s, e, i, a) => !e ? s.slice(0, -1) + '\n' : s += i === a.length - 1 ? e : e + ' ', '')
    : txtArray.join(' ');
}

// function sursurungal(txt) {
//   const hasNewLines = txt.includes('\n'),
//         txtArray = hasNewLines ? txt.split('\n').join('  ').split(' ').slice(1) : txt.split(' ');
//   txtArray.forEach((e, i, a) => {
//     if (!isNaN(n = +e)) {
//       if (n > 9) a[i + 1] = 'ga' + a[i + 1].slice(0, -1) + 'ga';
//       else if (n > 2) a[i + 1] = a[i + 1].slice(0, -1) + 'zo';
//       else if (n > 1) a[i + 1] = 'bu' + a[i + 1].slice(0, -1);
//     }
//   });
//   return hasNewLines
//     ? txtArray.reduce((s, e, i, a) => !e ? s.slice(0, -1) + '\n' : s += i === a.length - 1 ? e : e + ' ', '')
//     : txtArray.join(' ');
// }

// function sursurungal(txt) {
//   const hasNewLines = txt.includes('\n'),
//         txtArray = hasNewLines ? txt.split('\n').join('  ').split(' ').slice(1) : txt.split(' ');
//   txtArray.forEach((e, i, a) => {
//     if (!isNaN(n = +e)) {
//       if (n < 2) return;
//       else if (n < 3) a[i + 1] = 'bu' + a[i + 1].slice(0, -1);
//       else if (n < 10) a[i + 1] = a[i + 1].slice(0, -1) + 'zo';
//       else a[i + 1] = 'ga' + a[i + 1].slice(0, -1) + 'ga';
//     }
//   });
//   return hasNewLines
//     ? txtArray.reduce((s, e, i, a) => !e ? s.slice(0, -1) + '\n' : s += i === a.length - 1 ? e : e + ' ', '')
//     : txtArray.join(' ');
// }

// function sursurungal(txt) {
//   const hasNewLines = txt.includes('\n'),
//         txtArray = hasNewLines ? txt.split('\n').join('  ').split(' ').slice(1) : txt.split(' ');
//   txtArray.forEach((e, i, a) => {
//     if (!isNaN(n = +e)) {
//       if (n < 2) {
//         return;
//       } else if (n < 3) {
//         a[i + 1] = 'bu' + a[i + 1].slice(0, -1);
//       } else if (n < 10) {
//         a[i + 1] = a[i + 1].slice(0, -1) + 'zo';
//       } else {
//         a[i + 1] = 'ga' + a[i + 1].slice(0, -1) + 'ga';
//       }
//     } else {
//       return;
//     }
//   });
//   return hasNewLines
//     ? txtArray.reduce((s, e, i, a) => !e ? s.slice(0, -1) + '\n' : s += i === a.length - 1 ? e : e + ' ', '')
//     : txtArray.join(' ');
// }