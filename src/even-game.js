import { getInt, isEven} from "./maths.js";
import { getValue as getAnswer, yesNoCase } from "./cli.js";
import { userName } from "../bin/brain-games.js";


console.log('Answer "yes" if the number is even, otherwise answer "no".');

const process = (step = 1) => {

   if (step === 4) { return console.log(`Congratulations, ${userName}!`); } 

const question = getInt()
console.log(`Question: ${question}`);
const answer = getAnswer('Your answer: ').toLowerCase();
if (isEven(question) === yesNoCase(answer)) {
    console.log('Correct!')
    step++;
     return process(step);
}
else console.log(`'${answer}' is wrong answer ;(. Correct answer was '${yesNoCase(isEven(question))}'.`);

}
process();