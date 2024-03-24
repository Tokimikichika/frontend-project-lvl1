import {
  runEngine, rulesProgressionGame, generateRoundProgressiveGame,
} from '../src/games/index.js';

generateRoundProgressiveGame();
runEngine(rulesProgressionGame, generateRoundProgressiveGame);
