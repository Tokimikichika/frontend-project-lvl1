import runEngine from '../index.js';
import getRandomInRange from '../utils.js';

const operations = ['*', '+', '-'];
let operationIndex = 0;
const description = 'What is the result of the expression?';

const generateRoundCalcGame = () => {
  const num1 = getRandomInRange(1, 25);
  const num2 = getRandomInRange(1, 25);
  operationIndex += 1;
  const operation = operations[operationIndex % operations.length];
  const question = `${num1} ${operation} ${num2}`;
  let answer;
  switch (operation) {
    case '+':
      answer = num1 + num2;
      break;
    case '-':
      answer = num1 - num2;
      break;
    case '*':
      answer = num1 * num2;
      break;
    default:
      return false;
  }
  return [question, String(answer)];
};

export default () => runEngine(description, generateRoundCalcGame);
