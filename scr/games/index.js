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
  const numbers = [15, 6, 7];

  for (let i = 0; i < numbers.length; i += 1) {
    const currentNumber = numbers[i];
    console.log(`Question: ${currentNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');

    const correctAnswer = isEven(currentNumber) ? 'yes' : 'no';
    if (!checkAnswer(userAnswer, correctAnswer, name)) {
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
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
    const correctAnswer = eval(expression).toString();

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

export { playEvenGame, playCalcGame, playGcdGame };
