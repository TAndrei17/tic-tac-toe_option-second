const createFinalDiv = (str) => {
  const divWinner = document.createElement('div');
  const paragraph = document.createElement('p');
  const text = document.createTextNode(str);
  paragraph.append(text);
  divWinner.append(paragraph);
  const button = document.createElement('button');
  const textButton = document.createTextNode('START AGAIN');
  button.append(textButton);
  divWinner.append(button);
  return divWinner;
};

const createButtonReload = () => {
  const butt = document.querySelector('div > button');
  butt.addEventListener('click', () => document.location.reload());
  return butt;
};

export { createFinalDiv, createButtonReload };
