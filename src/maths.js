
const expressions = ['+', '-', '*'];


export const getInt = (max = 100) => Math.floor(Math.random() * max) + 1; // NOSONAR:  safe non-cryptographic random

export const isEven = (value) => (value % 2 === 0) ? 'yes' : 'no';

export const getExpr = () => `${getInt()}${expressions[getInt(expressions.length-1)]}${getInt()}`; // NOSONAR:  safe non-cryptographic random