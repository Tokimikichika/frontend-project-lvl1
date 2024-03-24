#!/usr/bin/env node
import { generateRoundCalcGame, rulesCalcGame, runEngine } from '../src/games/index.js';

generateRoundCalcGame();
runEngine(rulesCalcGame, generateRoundCalcGame);
