import readlineSync from 'readline-sync';

const isEven = (num) => num % 2 === 0;

const askQuestion = (question) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(question);

  return { name };
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

const playEvenGame = () => {
  const { name } = askQuestion('Answer "yes" if the number is even, otherwise answer "no".');
  let countAnswer = 0;
  const generateNumber = () => Math.floor(Math.random() * 99) + 1;

  const displayQuestion = (num) => console.log(`Question: ${num}`);

  const getUserAnswer = () => readlineSync.question('Your answer: ');

  for (let i = 0; i < 3; i += 1) {
    const num = generateNumber();
    const correctAnswer = isEven(num) ? 'yes' : 'no';
    displayQuestion(num);
    const userAnswer = getUserAnswer();
    if (checkAnswer(userAnswer, correctAnswer, name)) {
      countAnswer += 1;
    } else {
      break;
    }
  }
  if (countAnswer === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

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
const playCalcGame = () => {
  const { name } = askQuestion('What is the result of the expression?');

  const min = 1;
  const max = 99;
  let countGame = 0;
  const operands = ['+', '-', '*'];

  for (let i = 0; i < 3; i += 1) {
    const operand = operands[i];

    const num1 = Math.floor(Math.random() * (max - min + 1)) + min;
    const num2 = Math.floor(Math.random() * (max - min + 1)) + min;

    const expression = `${num1} ${operand} ${num2}`;
    console.log(`Question: ${expression}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = evalExpression(expression).toString();

    if (checkAnswer(userAnswer, correctAnswer, name)) {
      countGame += 1;
    } else {
      break;
    }
  }
  if (countGame === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

const findGcd = (number1, number2) => {
  if (number2 === 0) {
    return number1;
  }
  return findGcd(number2, number1 % number2);
};

const playGcdGame = () => {
  const { name } = askQuestion('Find the greatest common divisor of given numbers.');

  let countAnswer = 0;
  for (let i = 0; i < 3; i += 1) {
    const num1 = Math.floor(Math.random() * 99) + 1;
    const num2 = Math.floor(Math.random() * 99) + 1;
    const correctAnswer = findGcd(num1, num2);
    console.log(`Question: ${num1} ${num2}`);
    const userAnswer = +readlineSync.question('Your answer: ');

    if (checkAnswer(userAnswer, correctAnswer, name)) {
      countAnswer += 1;
    } else {
      break;
    }
  }
  if (countAnswer === 3) {
    console.log(`Congratulations, ${name}!`);
  }
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

const playProgressiveGame = () => {
  const { name } = askQuestion('What number is missing in the progression?');

  let countAnswer = 0;
  for (let i = 0; i < 3; i += 1) {
    const randomLength = Math.floor(Math.random() * 5) + 5;
    const startNumber = Math.floor(Math.random() * 10) + 1;
    const diff = Math.floor(Math.random() * 10) + 1;
    const progression = generateProgression(randomLength, startNumber, diff);
    const index = Math.floor(Math.random() * progression.length);
    const question = hideEl(progression, index);

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = String(progression[index]);

    if (checkAnswer(userAnswer, correctAnswer, name)) {
      countAnswer += 1;
    } else {
      break;
    }
  }
  if (countAnswer === 3) {
    console.log(`Congratulations, ${name}!`);
  }
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

const playPrimeNumberGame = () => {
  const { name } = askQuestion('Answer "yes" if given number is prime. Otherwise answer "no".');

  let countAnswer = 0;
  for (let i = 0; i < 3; i += 1) {
    const num = Math.floor(Math.random() * 991) + 1;
    const correctAnswer = isPrime(num);
    console.log(`Question: ${num}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (checkAnswer(userAnswer, correctAnswer, name)) {
      countAnswer += 1;
    } else {
      break;
    }
  }
  if (countAnswer === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

export {
  playEvenGame, playCalcGame, playGcdGame, playProgressiveGame, playPrimeNumberGame,
};
