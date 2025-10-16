
const expressions = ['+', '-', '*'];


export const getInt = (max = 100) => Math.floor(Math.random() * max) + 1; // NOSONAR:  safe non-cryptographic random



export const isEven = () => {
    const question = getInt(); 
    const answer = question % 2 === 0 ? 'yes' : 'no';
    return {question, answer}
}

export const getExpr = () => {
    const question = `${getInt()}${expressions[getInt(expressions.length-1)]}${getInt()}`; // NOSONAR:  safe non-cryptographic random
    const answer = String(eval(question));
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
    