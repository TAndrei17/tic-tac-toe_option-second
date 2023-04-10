import createField from './game_logic/1_create_field_cells.js';
import createTurn from './game_logic/2_create_turn.js';
import isControlArrayEmpty from './game_logic/3_check_state.js';
import { isDraw, showDraw } from './game_logic/5_find_winner.js';
import renderWinner from './game_logic/6_render_winner.js';
import { createCell } from './game_logic/interfaces.js';

const divRoot = document.querySelector('.container');
const field = createField();
divRoot.append(field);
const turn = createTurn();
document.body.prepend(turn);

const startPlay = () => {
  let cellText = 'X';
  const allXs = [];
  const allOs = [];
  turn.textContent = `'${cellText}' starts`;

  field.addEventListener('click', (event) => {
    const { target } = event;
    const eventCell = createCell(event.target.row, event.target.column);

    if (target.textContent === '') {
      target.textContent = cellText;
    }
    if (target.textContent === 'X' || target.textContent === 'O') {
      cellText = (cellText === 'X') ? 'O' : 'X';
    }
    turn.textContent = `'${cellText}' go now`;

    if (target.textContent === 'X') {
      const checkX = isControlArrayEmpty(eventCell, allXs);
      if (checkX) {
        allXs.push(eventCell);
      }
    } else if (target.textContent === 'O') {
      const checkO = isControlArrayEmpty(eventCell, allOs);
      if (checkO) {
        allOs.push(eventCell);
      }
    }

    renderWinner('X', allXs, turn, divRoot, field);
    renderWinner('O', allOs, turn, divRoot, field);

    const getWinner = document.querySelector('.winner');
    const checkDraw = isDraw(allXs, allOs, getWinner);
    if (checkDraw) {
      turn.remove();
      showDraw(divRoot, field);
    }
  });
};

startPlay();
