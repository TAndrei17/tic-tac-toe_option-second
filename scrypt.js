import createField from './field_cell.js';
import { createFinalDiv, createButtonReload } from './final_div.js';
import {
  createCell,
  checkRows,
  checkColumns,
  checkDiagonal,
  getRow,
  getColumn,
} from './my_abstractions.js';

const startPlay = () => {
  const field = createField();
  const divRoot = document.querySelector('.container');
  divRoot.append(field);
  let cellText = 'X';
  const allXs = [];
  const allOs = [];
  const turn = document.querySelector('.step');
  document.body.prepend(turn);
  turn.textContent = `'${cellText}' starts`;
  field.addEventListener('click', (event) => {
    const { target } = event;
    const eventRow = event.target.row;
    const eventColumn = event.target.column;
    const eventCell = createCell(eventRow, eventColumn);
    if (target.textContent === '') {
      target.textContent = cellText;
    }
    if (target.textContent === 'X' || target.textContent === 'O') {
      cellText = cellText === 'X' ? 'O' : 'X';
    }
    turn.textContent = `'${cellText}' go now`;
    if (target.textContent === 'X') {
      const a = getRow(eventCell);
      const b = getColumn(eventCell);
      const checkAllXs = allXs.filter(
        (cell) => getRow(cell) === a && getColumn(cell) === b,
      );
      if (checkAllXs.length === 0) {
        allXs.push(eventCell);
      }
    }
    if (target.textContent === 'O') {
      const a = getRow(eventCell);
      const b = getColumn(eventCell);
      const checkAllOs = allOs.filter(
        (cell) => getRow(cell) === a && getColumn(cell) === b,
      );
      if (checkAllOs.length === 0) {
        allOs.push(eventCell);
      }
    }
    const isThreeXInRow = checkRows(allXs);
    const isThreeXInColumn = checkColumns(allXs);
    const isThreeXInDiagonal = checkDiagonal(allXs);
    if (isThreeXInRow || isThreeXInColumn || isThreeXInDiagonal) {
      turn.remove();
      const finalDiv = createFinalDiv("CONGRATS! 'X' IS WINNER!");
      divRoot.classList.add('winner');
      document.body.append(finalDiv);
      field.replaceWith(finalDiv);
      const button = createButtonReload();
      finalDiv.append(button);
    }
    const isThreeOInRow = checkRows(allOs);
    const isThreeOInColumn = checkColumns(allOs);
    const isThreeOInDiagonal = checkDiagonal(allOs);
    if (isThreeOInRow || isThreeOInColumn || isThreeOInDiagonal) {
      turn.remove();
      const finalDiv = createFinalDiv("CONGRATS! 'O' IS WINNER!");
      divRoot.classList.add('winner');
      document.body.append(finalDiv);
      field.replaceWith(finalDiv);
      const button = createButtonReload();
      finalDiv.append(button);
    }
    const getWinner = document.querySelector('.winner');
    if ([...allXs, ...allOs].length === 9 && !getWinner) {
      turn.remove();
      const finalDiv = createFinalDiv('DRAW!');
      divRoot.classList.add('winner');
      document.body.append(finalDiv);
      field.replaceWith(finalDiv);
      const button = createButtonReload();
      finalDiv.append(button);
    }
  });
};

startPlay();
