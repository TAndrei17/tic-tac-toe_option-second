import {
  createCell,
  getRow,
  getColumn,
  checkRowsColumns,
  checkDiagonal,
} from '../game_logic/interfaces.js';

test('cteateCell', () => {
  expect(createCell(1, 1)).toMatchObject({ row: 1, column: 1 });
  expect(createCell()).toMatchObject({ row: undefined, column: undefined });
  expect(createCell(1)).toMatchObject({ row: 1, column: undefined });
});

test('getRow', () => {
  expect(getRow(createCell(1, 1))).toEqual(1);
  expect(getRow(createCell(2, 2))).toEqual(2);
});

test('getColumn', () => {
  expect(getColumn(createCell(1, 3))).toEqual(3);
  expect(getColumn(createCell(3, 3))).toEqual(3);
});

test('checkRowsColumns', () => {
  expect(
    checkRowsColumns([createCell(1, 1), createCell(1, 2), createCell(1, 3)]),
  ).toEqual(true);
  expect(
    checkRowsColumns([createCell(1, 1), createCell(2, 1), createCell(1, 3)]),
  ).toEqual(false);
  expect(checkRowsColumns([createCell(1, 1), createCell(1, 3)])).toEqual(false);
  expect(
    checkRowsColumns([createCell(1, 1), createCell(1, 1), createCell(1, 1)]),
  ).toEqual(true);
  expect(
    checkRowsColumns([createCell(1, 3), createCell(2, 3), createCell(3, 3)]),
  ).toEqual(true);
  expect(
    checkRowsColumns([createCell(1, 1), createCell(2, 1), createCell(3, 2)]),
  ).toEqual(false);
  expect(checkRowsColumns([createCell(1, 1), createCell(2, 1)])).toEqual(false);
  expect(
    checkRowsColumns([createCell(1, 1), createCell(1, 1), createCell(1, 1)]),
  ).toEqual(true);
});

test('checkDiagonal', () => {
  expect(
    checkDiagonal([createCell(1, 1), createCell(2, 2), createCell(3, 3)]),
  ).toEqual(true);
  expect(
    checkDiagonal([createCell(1, 3), createCell(2, 2), createCell(3, 1)]),
  ).toEqual(true);
});
