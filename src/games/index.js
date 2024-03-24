import readlineSync from 'readline-sync';
import getRandomInRange from '../utils.js';

const isEven = (num) => num % 2 === 0;

const evalExpression = (expression) => {
  const [num1, operand, num2] = expression.split(' ');
  switch (operand) {
    case '+':
      return Number(num1) + Number(num2);
    case '-':
      return Number(num1) - Number(num2);
    case '*':
      return Number(num1) * Number(num2);
    default:
      return NaN;
  }
};

const findGcd = (number1, number2) => {
  if (number2 === 0) {
    return number1;
  }
  return findGcd(number2, number1 % number2);
};

const generateProgression = (randomLength, startNumber, diff) => {
  const progression = [];
  let startNum = startNumber;
  for (let i = 0; i < randomLength; i += 1) {
    progression.push(startNum);
    startNum += diff;
  }
  return progression;
};
const hideEl = (progression, index) => {
  const hiddenProgression = [...progression];
  hiddenProgression[index] = '..';
  return hiddenProgression.join(' ');
};

const isPrime = (num) => {
  if (num <= 1) return 'no';
  for (let i = 2; i < Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const checkAnswer = (userAnswer, correctAnswer, name) => {
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${name}!`);
  return false;
};

const runEngine = (rules, generateRound) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(rules);

  const roundsCount = 3;
  let i;
  for (i = 0; i < roundsCount; i += 1) {
    const [question, answer] = generateRound();

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (checkAnswer(userAnswer, answer, name) === false) {
      break;
    }
  }

  if (i === roundsCount) {
    console.log(`Congratulations, ${name}!`);
  }
};
const generateRoundEvenGame = () => {
  const num = getRandomInRange(1, 99);
  const question = `Question: ${num}`;
  const answer = isEven(num) ? 'yes' : 'no';
  return [question, answer];
};

let currentOperandIndex = -1;
const generateRoundCalcGame = () => {
  const operands = ['+', '-', '*'];
  const operand = operands[currentOperandIndex];
  currentOperandIndex = (currentOperandIndex + 1) % operands.length;
  const num1 = getRandomInRange(1, 99);
  const num2 = getRandomInRange(1, 99);
  const expression = `${num1} ${operand} ${num2}`;
  const question = `Question: ${expression}`;
  const answer = evalExpression(expression).toString();
  return [question, answer];
};

const generateRoundGcdGame = () => {
  const num1 = getRandomInRange(1, 99);
  const num2 = getRandomInRange(1, 99);
  const question = `Question: ${num1} ${num2}`;
  const answer = findGcd(num1, num2).toString();
  return [question, answer];
};

const generateRoundProgressiveGame = () => {
  const randomLength = getRandomInRange(5, 5);
  const startNumber = getRandomInRange(1, 10);
  const diff = getRandomInRange(1, 10);
  const progression = generateProgression(randomLength, startNumber, diff);
  const index = Math.floor(Math.random() * progression.length);
  const question = `Question: ${hideEl(progression, index)}`;
  const answer = String(progression[index]);
  return [question, answer];
};

const generateRoundPrimeNumberGame = () => {
  const num = getRandomInRange(1, 991);
  const question = `Question: ${num}`;
  const answer = isPrime(num);
  return [question, answer];
};
const rulesEvenGame = 'Answer "yes" if the number is even, otherwise answer "no".';
const rulesCalcGame = 'What is the result of the expression?';
const rulesGcdGame = 'Find the greatest common divisor of given numbers.';
const rulesProgressionGame = 'What number is missing in the progression?';
const rulesPrimeGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export {
  generateRoundCalcGame,
  generateRoundEvenGame,
  generateRoundGcdGame,
  generateRoundPrimeNumberGame,
  generateRoundProgressiveGame,
  rulesCalcGame,
  rulesEvenGame,
  rulesGcdGame,
  rulesPrimeGame,
  rulesProgressionGame,
  runEngine,
};
