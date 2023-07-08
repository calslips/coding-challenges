/*
Ben, Amy and Sam are playing a card game. It's a bit like blackjack
where the person whose score is the closest to but not bigger than
21 is the winner. However, Ben, Amy and Sam are in a hurry so they
only get to pick one extra card if they want to. Also they've
decided that Aces are always equal to 10.

Your job is to write a function that returns a nested array of the
players and their scores in the order of winner to loser.

Arguments:

An object containing players and their cards. Each player will need
to have their cards added together to work out their current score.

An extra card which will need to be added to certain players scores

An array containing the names of players who choose to have the
value of the extra card added to their score

Rules:

The person whose name is in the second argument must have the value
of the extra card added to their score

If there is a draw, players with the same score must be presented in
alphabetic order e.g. if Ben and Sam both have a score of 10, Ben
must be written first.

All picture cards(A, K, Q, J) are equal to 10

Remember if a player's score exceeds 21 they cannot win

Parameters:
  an obj
    player name as key
    str containing comma separated card values as value
  a num
  an array of strs
Returns:
  2d array
    inner array contains str and num
Examples:
  const players = {
    'Ben': '5, 2',
    'Amy': '4, 3',
    'Sam': '3, 10',
  };
  whoWon(players, 3, ['Ben', 'Amy']),
    [['Sam, '13], ['Amy', 10], ['Ben', 10]]
Pseudocode:
  obtain an array of keys for players obj
  iterate over the array of keys
    convert value in players obj to sum of values (num)
  iterate over the extra takers array
    add the extra card to their value in players obj
  sort array of entries for players obj
    place the higher values that are less than 22 towards the front
    if the score is the same
      sort by name alphabetically
    if they exceed 21
      place the values to the back
  return sorted array of entries
*/

function whoWon(players, extraCard, extraTakers) {
  const ps = Object.keys(players).reduce((o, p) => (o[p] = players[p].split(', ').reduce((s, n) => s + (+n || 10), 0), o), {});
  extraTakers.forEach(t => ps[t] += +extraCard || 10);
  return Object.entries(ps).sort(([nA, sA], [nB, sB]) => sA === sB ? nA > nB : sA > 21 || sB > 21 ? sA - sB : sB - sA);
}

function whoWon(players, extraCard, extraTakers) {
  const copy = {...players};
  Object.keys(copy).forEach(p => copy[p] = copy[p].split(', ').reduce((s, n) => s + (+n || 10), 0));
  extraTakers.forEach(t => copy[t] += +extraCard || 10);
  return Object.entries(copy).sort(([nA, sA], [nB, sB]) => sA === sB ? nA.localeCompare(nB) : sA > 21 || sB > 21 ? sA - sB : sB - sA);
}

function whoWon(players, extraCard, extraTakers) {
  const ps = Object.keys(players).reduce((o, p) => (o[p] = players[p].split(', ').reduce((s, n) => s + (+n || 10), 0), o), {});
  extraTakers.forEach(t => ps[t] += +extraCard || 10);
  return Object.entries(ps).sort(([nameA, scoreA], [nameB, scoreB]) =>
    scoreA === scoreB ? nameA.localeCompare(nameB) : scoreA > 21 || scoreB > 21 ? scoreA - scoreB : scoreB - scoreA
  );
}

function whoWon(players, extraCard, extraTakers) {
  const ps = Object.keys(players).reduce((o, p) => (o[p] = players[p].split(', ').reduce((s, n) => s + (+n || 10), 0), o), {});
  extraTakers.forEach(t => ps[t] += +extraCard || 10);
  return Object.entries(ps).sort(([nameA, scoreA], [nameB, scoreB]) => {
    if (scoreA === scoreB) return nameA.localeCompare(nameB);
    if (scoreA > 21 || scoreB > 21) return scoreA - scoreB;
    return scoreB - scoreA;
  });
}