/*
A mad sociopath scientist just came out with a brilliant invention! He
extracted his own memories to forget all the people he hates! Now there's
a lot of information in there, so he needs your talent as a developer to
automatize that task for him.

You are given the memories as a string containing people's surname and
name (comma separated). The scientist marked one occurrence of each of
the people he hates by putting a '!' right before their name.

Your task is to destroy all the occurrences of the marked people. One more
thing ! Hate is contagious, so you also need to erase any memory of the
person that comes after any marked name!

Examples
Input:
"Albert Einstein, !Sarah Connor, Marilyn Monroe, Abraham Lincoln,
  Sarah Connor, Sean Connery, Marilyn Monroe, Bjarne Stroustrup,
  Manson Marilyn, Monroe Mary"

Output:
"Albert Einstein, Abraham Lincoln, Sean Connery, Bjarne Stroustrup,
  Manson Marilyn, Monroe Mary"

=> We must remove every memories of Sarah Connor because she's marked,
but as a side-effect we must also remove all the memories about
Marilyn Monroe that comes right after her! Note that we can't destroy the
memories of Manson Marilyn or Monroe Mary, so be careful!

Parameters: an array of strings
Returns:
  return an array of strings
    after removing the strings that start with '!',
    the string directly following (may not have '!'),
    and any occurrences that match (same string without '!')
Examples:
  select("Bryan Joubert")
    // "Bryan Joubert"
  select("Jesse Cox, !Selena Gomez")
    // "Jesse Cox"
  select("!Eleena Daru, Obi-Wan Kenobi, Eleena Daru, Jar-Jar Binks")
    // "Jar-Jar Binks"
  select("Digital Daggers, !Kiny Nimaj, Rack Istley, Digital Daggers, Digital Daggers")
    // "Digital Daggers, Digital Daggers, Digital Daggers"
  select("Albert Einstein, !Sarah Connor, Marilyn Monroe, Abraham Lincoln, Sarah Connor, Sean Connery, Marilyn Monroe, Bjarne Stroustrup, Manson Marilyn, Monroe Mary")
    // "Albert Einstein, Abraham Lincoln, Sean Connery, Bjarne Stroustrup, Manson Marilyn, Monroe Mary"
  select("!Partha Ashanti, !Mindaugas Burton, Stacy Thompson, Amor Hadrien, !Ahtahkakoop Sothy, Partha Ashanti, Uzi Griffin, Partha Ashanti, !Serhan Eutimio, Amor Hadrien, Noor Konstantin")
    // "Uzi Griffin, Noor Konstantin"
  select("!Code Wars, !Doug Smith, !Cyril Lemaire, !Codin Game")
    // ""
Pseudocode:
  initialize hated variable as an empty string
  convert input string into an array of strings separated by ', '
  iterate over string array
    check if current element OR previous element contains '!'
      if it does
        concat hated and current element
      otherwise
        continue
  filter array of strings
    only keep elements NOT included in hated variable
  return filtered array converted to string joined on ', '
*/

function select(memory) {
  return (hated = ''), memory.split(', ').map((e, i, a) => (e.includes('!') || (a[i - 1] || '').includes('!')) ? hated += e : e).filter(e => !hated.includes(e)).join(', ');
}

// function select(memory) {
//   return (hated = '', memArray = memory.split(', ')), memArray.forEach((e, i, a) => {if (e.includes('!') || (a[i - 1] || '').includes('!')) hated += e}), memArray.filter(e => !hated.includes(e)).join(', ');
// }

// function select(memory) {
//   let hated = '';
//   const memArray = memory.split(', ');
//   memArray.forEach((e, i, a) => {if (e.includes('!') || (a[i - 1] || '').includes('!')) hated += e});
//   return memArray.filter(e => !hated.includes(e)).join(', ');
// }