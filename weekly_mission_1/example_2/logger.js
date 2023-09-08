// logger.js
// Esta es una función que se guardara en este módulo como info
exports.info = (message) => { // el nombre info solo es una "etiqueta" para el modulo en cuestion
	console.log(`info: ${message}`)
}
// Esta es una función que se guardara en este módulo como verbose
exports.verbose = (message) => {
	  console.log(`verbose: ${message}`)
}
/*
 *   const logger = require('./logger')
 *     logger.info('This is an informational message')
 *       logger.verbose('This is a verbose message')
 *        * */

