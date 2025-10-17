#!/usr/bin/env node
const gameType = 'brain-prime'
const { gameInit } = await import('../src/games/game-select.js')

gameInit(gameType)
