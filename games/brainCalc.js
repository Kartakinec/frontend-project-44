#!/usr/bin/env node

import startGame from '../src/index.js';
import getRandomNum from '../src/math-func.js';

export default () => {
  const rules = 'What is the result of the expression?';

  const getRandomOper = (arrayOfOpers = ['+', '-', '*']) => {
    const index = getRandomNum(0, arrayOfOpers.length - 1);

    return arrayOfOpers[index];
  };

  const getCalculatorExpect = (num1, num2, operator) => `${num1} ${operator} ${num2}`;

  const getCalculatorCorrectAnswer = (num1, num2, operator) => {
    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      default:
        return 'Unexpected.';
    }
  };

  const getExpectAndCorrectAnswer = () => {
    const num1 = getRandomNum(1, 50);
    const num2 = getRandomNum(1, 50);
    const operator = getRandomOper();

    const exp = getCalculatorExpect(num1, num2, operator);
    const correctAnswer = getCalculatorCorrectAnswer(num1, num2, operator);

    return [exp, correctAnswer];
  };

  startGame(getExpectAndCorrectAnswer, rules);
};
