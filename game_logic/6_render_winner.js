import { isWinner, showWinner } from './5_find_winner.js';

const renderWinner = (player, array, elemDel, elemAdd1, elemAdd2) => {
  if (isWinner(array)) {
    elemDel.remove();
    showWinner(player, elemAdd1, elemAdd2);
  }
};

export default renderWinner;
