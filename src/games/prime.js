import runEngine from '../index.js';
import getRandomInRange from '../utils.js';

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const prime = (num) => {
  const answer = isPrime(num) ? 'yes' : 'no';
  return [answer];
};

const generateRound = () => {
  const num = getRandomInRange(1, 100);
  const question = num;
  const answer = String(prime(num));
  return [question, answer];
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => { runEngine(description, generateRound); };
