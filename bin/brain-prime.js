#!/usr/bin/env node
import { generateRoundPrimeNumberGame, rulesPrimeGame, runEngine } from '../src/games/index.js';

generateRoundPrimeNumberGame();
runEngine(rulesPrimeGame, generateRoundPrimeNumberGame);
