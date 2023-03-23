/*
As the owner of a down-at-heel publishing firm, you're excited
to have acquired the rights to minor celebrity's bawdy memoirs.

You need to get them printed before the tabloids get wind of
them, but you're worried they might be libellous.

Write a function which acts on a string to obscure any word
beginning with an uppercase letter by replacing each subsequent
character with an underscore _.

The initial capital letter should remain intact, as should all
other uppercase letters in a word not normally capitalised.
Therefore, anything in camelCase would not be censored, but
brand names with InCapping (YouTube) will (Y__T__).

As this is shoddy rush-job, you don't need to account for the
capital letters which start a sentence, nor should you bother
preventing punctuation like periods and possessives ('s, 're)
from being replaced.

Parameters: a string (a sentence)
Returns: a string
  capitalized words censored with underscores
  (with the cap'd letter intact)
Examples:
  censor("Gertrude went overboard on the Sailor Jerry...")
    // "G_______ went overboard on the S_____ J_______"
  censor("She ended up in the Royal Infirmary with Prince Harry's cousin Hermione.")
    // "S__ ended up in the R____ I________ with P_____ H______ cousin H________"
  censor("When we woke up there was Yakult all over Tarquin's iPhone.")
    // "W___ we woke up there was Y_____ all over T________ iPhone."
Pseudocode:
  convert input string into an array of words
  map over the words array
    if the word starts with a capital letter (or starts with a non letter char?)
      initialize censored var assigned to an empty string
      loop over the chars of current word
        if current char is cap'd
          concat it with censored
        otherwise
          concat underscore with censored
      return censored
    otherwise
      return word as is
  return the words array joined back into a str on spaces
*/

function censor(memoir) {
  return memoir.split(' ').map(w => {
    if (w[0].charCodeAt() > 64 && w[0].charCodeAt() < 91 || w[0].toUpperCase() === w[0].toLowerCase()) {
      let censored = '';
      for (let c of w) c.charCodeAt() > 64 && c.charCodeAt() < 91 ? censored += c : censored += '_';
      return censored;
    } else return w;
  }).join(' ');
}