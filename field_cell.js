const createCell = (row, column) => `${row}${column}`;
const getRow = (cell) => cell[0];
const getColumn = (cell) => cell[1];

const createField = () => {
  const tableAll = document.createElement('table');
  tableAll.classList.add('game');
  for (let i = 1; i < 4; i += 1) {
    const str = tableAll.insertRow();
    str.classList.add('row');
    for (let j = 1; j < 4; j += 1) {
      const cell = str.insertCell();
      cell.classList.add('cell');
      const cellNum = createCell(i, j);
      cell.setAttribute('cellNum', cellNum);
    }
  }
  return tableAll;
};

export {
  createField,
  createCell,
  getRow,
  getColumn,
};
