const max = 100;

export const getInt = () => Math.floor(Math.random() * max); // NOSONAR:  safe non-cryptographic random

export const isEven = (value) => (value % 2 === 0) ? 'yes' : 'no';