import {
  createCell,
  getRow,
  getColumn,
  checkRows,
  checkColumns,
  checkDiagonal,
} from '../my_abstractions.js';

test('cteateCell', () => {
  expect(createCell(1, 1)).toMatchObject({ row: 1, column: 1 });
  expect(createCell()).toMatchObject({ row: undefined, column: undefined });
  expect(createCell(1)).toMatchObject({ row: 1, column: undefined });
});

test('getRow', () => {
  expect(getRow(createCell(1, 1))).toEqual(1);
});

test('getColumn', () => {
  expect(getColumn(createCell(1, 3))).toEqual(3);
});

test('checkRows', () => {
  expect(checkRows([(createCell(1, 1)), createCell(1, 2), createCell(1, 3)])).toEqual(true);
  expect(checkRows([(createCell(1, 1)), createCell(2, 1), createCell(1, 3)])).toEqual(false);
  expect(checkRows([(createCell(1, 1)), createCell(1, 3)])).toEqual(false);
});

test('checkColumns', () => {
  expect(checkColumns([(createCell(1, 1)), createCell(2, 1), createCell(3, 1)])).toEqual(true);
  expect(checkColumns([(createCell(1, 1)), createCell(2, 1), createCell(3, 2)])).toEqual(false);
  expect(checkColumns([(createCell(1, 1)), createCell(2, 1)])).toEqual(false);
});

test('checkDiagonal', () => {
  expect(checkDiagonal([(createCell(1, 1)), createCell(2, 2), createCell(3, 3)])).toEqual(true);
  expect(checkDiagonal([(createCell(1, 3)), createCell(2, 2), createCell(1, 3)])).toEqual(true);
  expect(checkColumns([(createCell(1, 1)), createCell(2, 2), createCell(1, 3)])).toEqual(false);
  expect(checkColumns([(createCell(1, 3)), createCell(2, 2), createCell(3, 1)])).toEqual(false);
  expect(checkColumns([(createCell(1, 3)), createCell(2, 2)])).toEqual(false);
  // decided this problem in 'scrypt.js' but it's possible to decide in 'my_abstractions.js';
  // (a idea) the function could to delete repeted elements of array;
  expect(checkColumns([(createCell(1, 3)), createCell(1, 3), createCell(1, 3)])).toEqual(false);
});
