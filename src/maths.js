
const expressions = ['+', '-', '*'];


export const getInt = (max = 100, min = 1) => Math.floor(Math.random() * (max - min +1 )) + min; // NOSONAR:  safe non-cryptographic random



export const isEven = () => {
    const question = getInt(); 
    const answer = question % 2 === 0 ? 'yes' : 'no';
    return {question, answer}
}

export const getExpr = () => {
    const question = `${getInt()}${expressions[getInt(expressions.length-1)]}${getInt()}`; // NOSONAR:  safe non-cryptographic random
    const answer = String(eval(question)); //NOSONAR : no access for users here
    return {question, answer}
}

export const getNod = () => {
    const base = getInt(20);
    const mult1 = getInt(10);
    const mult2 = getInt(10);
    const int1 = mult1 * base;
    const int2 = mult2 * base;
    const iter = (a, b) => {
        if (b === 0) { return a }
        return iter(b, a % b)
    }
    const question = `${int1} ${int2}`;
    const answer = String(iter(int1, int2))
    return {question, answer}
   
}

export const getProgression = () => {
       
    const progressionLength = getInt(10, 5);
    const progression = new Array(progressionLength).fill(0);
    const factor = getInt(10);
    const emptySpot = getInt(progressionLength) - 1;
    const start = getInt(10);
    

    for (let i = 0; i < progressionLength; i = i + 1) {
             if (i === 0) {
            progression[i] = start;
                }
                else progression[i] = progression[i - 1] + factor;  
    }
    
    const answer = String(progression[emptySpot]);
    progression[emptySpot] = '...';
    const question = progression.join(' ');

    return { question, answer }
 }
    