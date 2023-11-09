import startGame from '../index.js';
import getRandomNum from '../math-func.js';

export default () => {
  const rules = 'What number is missing in the progression?';

  const getExpectAndCorrectAnswer = () => {
    const initNum = getRandomNum(0, 10);
    const differ = getRandomNum(1, 10);
    const emptyPosit = getRandomNum(0, 10);
    const row = [initNum];
    const rowLength = 10;

    for (let i = 1; i <= rowLength; i += 1) {
      row.push(initNum + i * differ);
    }

    const correctAnswer = row[emptyPosit];
    row[emptyPosit] = '..';
    const exp = row.join(' ');

    return [exp, correctAnswer];
  };

  startGame(getExpectAndCorrectAnswer, rules);
};
