import { generateRoundEvenGame, rulesEvenGame, runEngine } from '../src/games/index.js';

generateRoundEvenGame();
runEngine(rulesEvenGame, generateRoundEvenGame);
