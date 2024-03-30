import runEngine from '../index.js';
import getRandomInRange from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateRoundEvenGame = () => {
  const isEven = (number) => number % 2 === 0;
  const num = getRandomInRange(1, 99);
  const question = `${num}`;
  const answer = isEven(num) ? 'yes' : 'no';
  return [question, answer];
};
export default () => runEngine(description, generateRoundEvenGame);
