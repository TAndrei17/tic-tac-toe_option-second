import createField from './field_cell.js';
import createFinalDiv from './final_div.js';
import {
  createCell,
  // collectCells,
  checkRows,
  checkColumns,
  checkDiagonal,
} from './my_abstractions.js';

const startPlay = () => {
  const field = createField();
  const divRoot = document.querySelector('.root');
  divRoot.append(field);
  const turn = document.querySelector('.step');
  let cellText = 'X';
  document.body.prepend(turn);
  const allXs = [];
  const allOs = [];
  turn.textContent = `'${cellText}' starts`;
  field.addEventListener('click', (event) => {
    const { target } = event;
    const eventRow = event.target.row;
    const eventColumn = event.target.column;
    const eventCell = createCell(eventRow, eventColumn);
    // 'X' starts
    if (target.textContent === '') {
      target.textContent = cellText;
    }
    // if cell is occupied nothing happen but turn goes to another player
    if (target.textContent === 'X' || target.textContent === 'O') {
      cellText = cellText === 'X' ? 'O' : 'X';
    }
    turn.textContent = `'${cellText}' now`;
    if ((target.textContent === 'X') && (!allXs.includes(eventCell))) {
      // collect every step of 'X'
      allXs.push(eventCell);
    }
    if ((target.textContent === 'O') && (!allOs.includes(eventCell))) {
      // collect every step of 'O'
      allOs.push(eventCell);
    }
    // check X's collection on every step
    const isThreeXInRow = checkRows(allXs);
    const isThreeXInColumn = checkColumns(allXs);
    const isThreeXInDiagonal = checkDiagonal(allXs);
    if ((isThreeXInRow) || (isThreeXInColumn) || (isThreeXInDiagonal)) {
      turn.remove();
      // if winner appears is created <div> and the container receive class '.winner'
      const finalDiv = createFinalDiv('CONGRATS! \'X\' IS WINNER!');
      divRoot.classList.add('winner');
      document.body.append(finalDiv);
      field.replaceWith(finalDiv);
      const butt = document.querySelector('div > button');
      butt.addEventListener('click', () => document.location.reload());
    }
    // check O's collection on every step
    const isThreeOInRow = checkRows(allOs);
    const isThreeOInColumn = checkColumns(allOs);
    const isThreeOInDiagonal = checkDiagonal(allOs);
    if ((isThreeOInRow) || (isThreeOInColumn) || (isThreeOInDiagonal)) {
      turn.remove();
      // if winner appears is created <div> and the container receive class '.winner'
      const finalDiv = createFinalDiv('CONGRATS! \'O\' IS WINNER!');
      divRoot.classList.add('winner');
      document.body.append(finalDiv);
      field.replaceWith(finalDiv);
      const butt = document.querySelector('div > button');
      butt.addEventListener('click', () => document.location.reload());
    }
    const getWinner = document.querySelector('.winner');
    if (([...allXs, ...allOs].length === 9) && (!getWinner)) {
      turn.remove();
      const finalDiv = createFinalDiv('DRAW!');
      divRoot.classList.add('winner');
      document.body.append(finalDiv);
      field.replaceWith(finalDiv);
      const butt = document.querySelector('div > button');
      butt.addEventListener('click', () => document.location.reload());
    }
  });
};

startPlay();
