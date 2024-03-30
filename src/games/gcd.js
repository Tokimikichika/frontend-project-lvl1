import runEngine from '../index.js';
import getRandomInRange from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const findGcd = (number1, number2) => {
  if (number2 === 0) {
    return number1;
  }
  return findGcd(number2, number1 % number2);
};

const generateRoundGcdGame = () => {
  const num1 = getRandomInRange(1, 99);
  const num2 = getRandomInRange(1, 99);
  const question = `${num1} ${num2}`;
  const answer = findGcd(num1, num2).toString();
  return [question, answer];
};
export default () => runEngine(description, generateRoundGcdGame);
