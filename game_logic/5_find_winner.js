import { checkRowsColumns, checkDiagonal } from './interfaces.js';
import { createFinalDiv, createButtonReload } from './4_create_final.js';

const isWinner = (array) => {
  const isThreeInRowCol = checkRowsColumns(array);
  const isThreeInDiagonal = checkDiagonal(array);
  return (isThreeInRowCol || isThreeInDiagonal);
};

const showWinner = (player, elem1, elem2) => {
  const finalDiv = createFinalDiv(`CONGRATS! '${player}' IS WINNER!`);
  elem1.classList.add('winner');
  document.body.append(finalDiv);
  elem2.replaceWith(finalDiv);
  const button = createButtonReload();
  finalDiv.append(button);
};

const isDraw = (array1, array2, elem) => {
  const checkState = [...array1, ...array2].length === 9;
  return checkState && !elem;
};

const showDraw = (elem1, elem2) => {
  const finalDiv = createFinalDiv('DRAW!');
  elem1.classList.add('winner');
  document.body.append(finalDiv);
  elem2.replaceWith(finalDiv);
  const button = createButtonReload();
  finalDiv.append(button);
};

export {
  isWinner, showWinner, isDraw, showDraw,
};
