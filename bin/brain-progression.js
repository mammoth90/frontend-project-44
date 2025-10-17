#!/usr/bin/env node
const gameType = 'brain-progression';
const { gameInit } =  await import( "../src/games/game-select.js");

gameInit(gameType);

