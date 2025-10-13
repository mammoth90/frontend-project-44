import readLineSync from 'readline-sync'

const getName = (question) => readLineSync.question(question)

export default getName