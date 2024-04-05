import runEngine from '../index.js';
import getRandomInRange from '../utils.js';

const gcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return gcd(num2, num1 % num2);
};

const gcdGame = (num1, num2) => gcd(num1, num2);

const generateRound = () => {
  const num1 = getRandomInRange(1, 99);
  const num2 = getRandomInRange(1, 99);
  const question = `${num1} ${num2}`;
  const answer = String(gcdGame(num1, num2));
  return [question, answer];
};

const description = 'Find the greatest common divisor of given numbers.';

export default () => { runEngine(description, generateRound); };
