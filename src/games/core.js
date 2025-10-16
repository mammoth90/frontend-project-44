import  * as maths from "../maths.js";
import { getValue as getAnswer } from "../cli.js";
import { userName } from '../../bin/brain-games.js';
const rounds = 3;
const evenGameGreeting  = 'Answer "yes" if the number is even, otherwise answer "no".';
const calcGameGreeting = 'What is the result of the expression?';
const gcdGameGreeting = 'Find the greatest common divisor of given numbers.';

const gameCatalog = {
        'brain-even': [evenGameGreeting, maths.isEven],
        'brain-calc': [calcGameGreeting, maths.getExpr],
        'brain-gcd': [gcdGameGreeting, maths.getNod],
}


export const gameInit = (gameTitle) => {

    const gameSettings  = gameCatalog[gameTitle];
    const [greeting, fn] = gameSettings;
    console.log(greeting);
    return process(fn, rounds);
}



const process = (questionGenerate, lastStep) => {

const iter = (step) => {
if (step === lastStep) { return console.log(`Congratulations, ${userName}!`); } 


const {question, answer} = questionGenerate();
console.log(`Question: ${question}`);
const userAnswer = getAnswer('Your answer: ').toLowerCase();
if (userAnswer === answer) {
    console.log('Correct!')
    step++;
     return iter(step);
}
else {
   console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
   console.log(`Let's try again, ${userName}!`)
}

}
iter(0);
}
