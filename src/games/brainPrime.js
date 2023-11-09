import startGame from '../index.js';
import getRandomNum from '../math-func.js';

export default () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const getPrime = (num) => {
    if (num < 2) {
      return false;
    }

    for (let i = 2; i <= num / 2; i += 1) {
      if (num % i === 0) {
        return false;
      }
    }

    return true;
  };

  const getExpAndCorrectAnswer = () => {
    const exp = getRandomNum();
    const correctAnswer = (getPrime(exp) ? 'yes' : 'no');

    return [exp, correctAnswer];
  };

  startGame(getExpAndCorrectAnswer, rules);
};
