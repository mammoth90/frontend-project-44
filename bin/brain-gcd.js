#!/usr/bin/env node
const gameType = 'brain-gcd';
const { gameInit } =  await import( "../src/games/game-select.js");

gameInit(gameType);

