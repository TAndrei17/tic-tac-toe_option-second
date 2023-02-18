const createCell = (row, column) => ({ row, column });
const getRow = (cell) => cell.row;
const getColumn = (cell) => cell.column;

const checkRows = (array) => {
  const calcColumnsInRow = array.reduce((acc, cell) => {
    const row = getRow(cell);
    acc[row] = acc[row] ? acc[row] + 1 : 1;
    return acc;
  }, {});
  const isRowFull = Object.keys(calcColumnsInRow).filter((item) => calcColumnsInRow[item] === 3);
  return isRowFull.length > 0;
};

const checkColumns = (array) => {
  const calcRowsInColumn = array.reduce((acc, cell) => {
    const column = getColumn(cell);
    acc[column] = acc[column] ? acc[column] + 1 : 1;
    return acc;
  }, {});
  const isColumnFull = Object.keys(calcRowsInColumn).filter((item) => calcRowsInColumn[item] === 3);
  return isColumnFull.length > 0;
};

const checkDiagonal = (array) => {
  const isDiagLeftFull = array.filter((cell1) => { // обхожу каждый объект
    const sampleArray1 = [[1, 1], [2, 2], [3, 3]];
    const getCellValues1 = Object.values(cell1); // получаю его ключи
    const [a, b] = getCellValues1; // вытаскиваю ключи
    const compArray1 = sampleArray1.filter((sample1) => sample1.includes(a) && sample1.includes(b));
    return compArray1.length > 0;
  });
  const isDiagRightFull = array.filter((cell2) => { // обхожу каждый объект
    const sampleArray2 = [[3, 1], [2, 2], [1, 3]];
    const getCellValues2 = Object.values(cell2); // получаю его ключи
    const [a, b] = getCellValues2; // вытаскиваю ключи
    const compArray2 = sampleArray2.filter((sample2) => sample2.includes(a) && sample2.includes(b));
    return compArray2.length > 0;
  });

  return isDiagLeftFull.length === 3 || isDiagRightFull.length === 3;
};

export {
  createCell,
  getRow,
  getColumn,
  checkRows,
  checkColumns,
  checkDiagonal,
};
