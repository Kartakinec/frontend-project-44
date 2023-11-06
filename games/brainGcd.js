#!/usr/bin/env node
import startGame from '../src/index.js';
import getRandomNum from '../src/math-func.js';

export default () => {
  const rules = 'Find the greatest common divisor of given numbers.';

  const getGCD = (num1, num2) => {
    const firstNum = (num1 < num2 ? num1 : num2);

    for (let i = firstNum; ; i -= 1) {
      if (num1 % i === 0 && num2 % i === 0) {
        return i;
      }
    }
  };

  const getExpectAndCorrectAnswer = () => {
    const num1 = getRandomNum();
    const num2 = getRandomNum();

    const exp = `${num1} ${num2}`;
    const correctAnswer = getGCD(num1, num2);

    return [exp, correctAnswer];
  };

  startGame(getExpectAndCorrectAnswer, rules);
};
