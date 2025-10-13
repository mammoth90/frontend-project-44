#!/usr/bin/env node
import getName from '../src/cli.js'

const separator = ' '; // or ': ' or '- ' and etc...

console.log('Welcome to the Brain Games!');
const question = 'May I ask your name?';
const name = getName(question + separator);
console.log(`Hello, ${name}!`);