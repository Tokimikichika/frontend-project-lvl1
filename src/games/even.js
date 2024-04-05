import runEngine from '../index.js';
import getRandomInRange from '../utils.js';

const isEven = (num) => num % 2 === 0;

const even = (num) => {
  const answer = isEven(num) ? 'yes' : 'no';
  return [answer];
};

const generateRound = () => {
  const num = getRandomInRange(1, 99);
  const question = `${num}`;
  const answer = String(even(num));
  return [question, answer];
};

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

export default () => { runEngine(description, generateRound); };
