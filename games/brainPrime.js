#!/usr/bin/env node
import startGame from '../src/index.js';
import getRandomNum from '../src/math-func.js';

export default () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const isPrime = (num) => {
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
    const correctAnswer = (isPrime(exp) ? 'yes' : 'no');

    return [exp, correctAnswer];
  };

  startGame(getExpAndCorrectAnswer, rules);
};
