import runEngine from '../index.js';
import getRandomInRange from '../utils.js';

const generateProgression = (randomLength, startNumber, diff) => {
  const progression = [];
  let startNum = startNumber;
  for (let i = 0; i < randomLength; i += 1) {
    progression.push(startNum);
    startNum += diff;
  }
  return progression;
};

const progressive = (progression, index) => {
  const hiddenProgression = [...progression];
  hiddenProgression[index] = '..';
  return hiddenProgression.join(' ');
};

const generateRound = () => {
  const randomLength = getRandomInRange(5, 5);
  const startNumber = getRandomInRange(1, 10);
  const diff = getRandomInRange(1, 10);
  const progression = generateProgression(randomLength, startNumber, diff);
  const index = Math.floor(Math.random() * progression.length);
  const question = `${progressive(progression, index)}`;
  const answer = String(progression[index]);
  return [question, answer];
};

const description = 'What number is missing in the progression?';

export default () => { runEngine(description, generateRound); };
