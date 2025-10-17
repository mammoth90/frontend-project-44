#!/usr/bin/env node
const gameType = 'brain-calc'
const { gameInit } = await import('../src/games/game-select.js')

gameInit(gameType)
