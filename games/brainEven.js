#!/usr/bin/env node
import startGame from '../src/index.js';
import getRandomNum from '../src/math-func.js';

export default () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

  const isEvenOrNot = (num) => (num % 2 === 0);

  const getExpectAndCorrectAnswer = () => {
    const exp = getRandomNum();
    const correctAnswer = (isEvenOrNot(exp) ? 'yes' : 'no');

    return [exp, correctAnswer];
  };

  startGame(getExpectAndCorrectAnswer, rules);
};
