import readlineSync from 'readline-sync';

const runEngine = (rules, generateRound) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(`${rules}`);

  const roundsCount = 3;
  for (let i = 0; i < roundsCount; i += 1) {
    const [question, correctAnswer] = generateRound();
    const answer = readlineSync.question(`Question: ${question}\nYour answer: `);
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export default runEngine;
