#!/usr/bin/env node
const gameType = 'brain-even'
const { gameInit } = await import('../src/games/game-select.js')

gameInit(gameType)
