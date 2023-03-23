/**
 * Let's play! You have to return which player won! In case of a draw return Draw!.

Examples:

rps('scissors','paper') // Player 1 won!
rps('scissors','rock') // Player 2 won!
rps('paper','paper') // Draw!
 */

const rps = (p1, p2) => {
  const winMap = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper',
  };
  return p1 === p2 ? 'Draw!' : winMap[p1] === p2 ? 'Player 1 won!' : 'Player 2 won!';
};