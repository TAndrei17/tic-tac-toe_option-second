const createTurn = () => {
  const turnBlock = document.createElement('div');
  turnBlock.classList.add('step');
  return turnBlock;
};

export default createTurn;
