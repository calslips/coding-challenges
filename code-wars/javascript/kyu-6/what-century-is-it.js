/**
 * Return the century of the input year. The input will always be a 4 digit
 * string, so there is no need for validation.

Examples
"1999" --> "20th"
"2011" --> "21st"
"2154" --> "22nd"
"2259" --> "23rd"
"1124" --> "12th"
"2000" --> "20th"
 */

function whatCentury(year) {
  const c = year.endsWith('00') ? +year.slice(0, 2) : +year.slice(0, 2) + 1;
  if (c % 10 === 1 && c !== 11) return `${c}st`;
  if (c % 10 === 2 && c !== 12) return `${c}nd`;
  if (c % 10 === 3 && c !== 13) return `${c}rd`;
  return `${c}th`;
}