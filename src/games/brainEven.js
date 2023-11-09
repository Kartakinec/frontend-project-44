import startGame from '../index.js';
import getRandomNum from '../math-func.js';

export default () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

  const isEvenMathFunc = (num) => (num % 2 === 0);

  const getExpectAndCorrectAnswer = () => {
    const exp = getRandomNum();
    const correctAnswer = (isEvenMathFunc(exp) ? 'yes' : 'no');

    return [exp, correctAnswer];
  };

  startGame(getExpectAndCorrectAnswer, rules);
};
