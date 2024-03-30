import runEngine from '../index.js';
import getRandomInRange from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 1) return 'no';
  for (let i = 2; i < Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const generateRoundPrimeNumberGame = () => {
  const num = getRandomInRange(1, 991);
  const question = `${num}`;
  const answer = isPrime(num);
  return [question, answer];
};

export default () => runEngine(description, generateRoundPrimeNumberGame);
