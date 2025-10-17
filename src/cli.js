import readLineSync from 'readline-sync'

export const getValue = question => readLineSync.question(question)
