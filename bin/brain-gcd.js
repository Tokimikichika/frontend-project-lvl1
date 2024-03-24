import { generateRoundGcdGame, rulesGcdGame, runEngine } from '../src/games/index.js';

generateRoundGcdGame();
runEngine(rulesGcdGame, generateRoundGcdGame);
