//Using set theory to set solutions
var solutions = [
	['A', 'B', 'C'],
  ['A', 'E', 'I'],
  ['A', 'D', 'G'],
  ['B', 'E', 'H'],
  ['C', 'E', 'G'],
  ['C', 'F', 'I'],
  ['D', 'E', 'F'],
  ['G', 'H', 'I'],
];

function isGameOver(playerAnswer) {
  var gameOver = false;

  solutions.forEach(solution => {
    gameOver = gameOver || solution.every(letter => playerAnswer.includes(letter));
  });

  return gameOver;
}

if (module) {
  module.exports = {isGameOver: isGameOver, solutions: solutions};
};
