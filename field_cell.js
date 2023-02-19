const createField = () => {
  const tableAll = document.createElement("table");
  tableAll.classList.add("game");
  for (let i = 1; i < 4; i += 1) {
    const str = tableAll.insertRow();
    str.classList.add("row");
    for (let j = 1; j < 4; j += 1) {
      const cell = str.insertCell(); // как ячейку сделать объектом?
      cell.classList.add("cell");
      cell.row = i;
      cell.column = j;
    }
  }
  return tableAll;
};

export default createField;
