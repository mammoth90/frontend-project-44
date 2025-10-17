#!/usr/bin/env node
import { getValue as getName } from '../src/cli.js'


console.log('Welcome to the Brain Games!');
const question = 'May I have your name?';
export const userName = getName(question);
console.log(`Hello, ${userName}!`);



