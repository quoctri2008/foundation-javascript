import validateEmail, { logError } from './validEmail.js'


console.log('import no default: ', logError('abc'))

console.log('import default: ', validateEmail('truong@gmail.com'))