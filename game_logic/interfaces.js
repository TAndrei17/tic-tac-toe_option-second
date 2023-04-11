const createCell = (row, column) => ({ row, column });
const getRow = (cell) => cell.row;
const getColumn = (cell) => cell.column;

const calculateItems = (array, item) => {
  const checkItems = array.reduce((acc, cell) => {
    const numItem = (item === 'row') ? getRow(cell) : getColumn(cell);
    acc[numItem] = acc[numItem] ? acc[numItem] + 1 : 1;
    return acc;
  }, {});
  return checkItems;
};

const checkRowsColumns = (array) => {
  const calcColumnsInRow = calculateItems(array, 'row');
  const isRowFull = Object.keys(calcColumnsInRow).filter(
    (item) => calcColumnsInRow[item] === 3,
  );
  const calcRowsInColumn = calculateItems(array, 'column');
  const isColumnFull = Object.keys(calcRowsInColumn).filter(
    (item) => calcRowsInColumn[item] === 3,
  );
  return (isRowFull.length > 0 || isColumnFull.length > 0) === true;
};

const checkDiagonal = (array) => {
  const isDiagLeftFull = array.filter((cell) => {
    const example = [[1, 1], [2, 2], [3, 3]];
    const a = getRow(cell);
    const b = getColumn(cell);
    const compArray = example.filter(
      (sample) => sample.includes(a) && sample.includes(b),
    );
    return compArray.length > 0;
  });
  const isDiagRightFull = array.filter((cell) => {
    const example = [[3, 1], [2, 2], [1, 3]];
    const a = getRow(cell);
    const b = getColumn(cell);
    const compArray = example.filter(
      (sample) => sample[0] === a && sample[1] === b,
    );
    return compArray.length > 0;
  });
  return isDiagLeftFull.length === 3 || isDiagRightFull.length === 3;
};

export {
  createCell,
  getRow,
  getColumn,
  checkRowsColumns,
  checkDiagonal,
};
