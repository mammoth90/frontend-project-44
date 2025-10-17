import { getValue as getAnswer } from '../cli.js'
import { userName } from '../../bin/brain-games.js'

export const process = (questionGenerate, lastStep) => {

  const iter = (step) => {
    if (step === lastStep) { 
      return console.log(`Congratulations, ${userName}!`)
    } 
    const {question, answer} = questionGenerate()
    console.log(`Question: ${question}`)
    const userAnswer = getAnswer('Your answer: ').toLowerCase()
    if (userAnswer === answer) {
      console.log('Correct!')
      step++
      return iter(step)
    }
    else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`)
      return console.log(`Let's try again, ${userName}!`)
    }
  }
  iter(0)
}