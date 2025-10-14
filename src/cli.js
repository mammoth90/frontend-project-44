import readLineSync from 'readline-sync'


export const getValue = (question) => readLineSync.question(question)

export const yesNoCase = (answer) => {
    
    switch (answer) {
        case 'yes': return true
        case 'no': return false
        case true: return 'yes'
        case false: return 'no'
        default: return null
    }
}

