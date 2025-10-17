import { process } from './core.js'
import * as maths from '../maths.js'

const rounds = 3
const evenGameGreeting = 'Answer "yes" if the number is even, otherwise answer "no".'
const calcGameGreeting = 'What is the result of the expression?'
const gcdGameGreeting = 'Find the greatest common divisor of given numbers.'
const progressionGameGreeting = 'What number is missing in the progression?'
const primeGameGreeting = 'Answer "yes" if given number is prime. Otherwise answer "no".'

const gameCatalog = {
  'brain-even': [evenGameGreeting, maths.isEven],
  'brain-calc': [calcGameGreeting, maths.getExpr],
  'brain-gcd': [gcdGameGreeting, maths.getNod],
  'brain-progression': [progressionGameGreeting, maths.getProgression],
  'brain-prime': [primeGameGreeting, maths.getPrime]
}

export const gameInit = (gameTitle) => {

  const gameSettings = gameCatalog[gameTitle]
  const [greeting, fn] = gameSettings
  console.log(greeting)
  return process(fn, rounds)
}