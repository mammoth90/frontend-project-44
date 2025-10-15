import { getExpr} from "../maths.js";
import { getValue as getAnswer } from "../cli.js";
import { userName } from '../../bin/brain-games.js';


console.log('Answer "yes" if the number is even, otherwise answer "no".');

const process = (step = 1) => {

   if (step === 4) { return console.log(`Congratulations, ${userName}!`); } 

const question = getExpr();
const rightUnswer = eval(question); //NOSONAR:  safe no user access
console.log(`Question: ${question}`);
const answer = Number(getAnswer('Your answer: '));

if (rightUnswer === answer) {
    console.log('Correct!')
    step++;
     return process(step);
}
else {
   console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightUnswer}'.`);
   console.log(`Let's try again, ${userName}!`);
}

}
process();