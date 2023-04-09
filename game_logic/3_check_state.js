import { getRow, getColumn } from './interfaces.js';

const isControlArrayEmpty = (object, array) => {
  const a = getRow(object);
  const b = getColumn(object);
  const checkArray = array.filter((cell) => getRow(cell) === a && getColumn(cell) === b);
  return checkArray.length === 0;
};

export default isControlArrayEmpty;
