const logger = require('./logger') // Importa el módulo logger.js
require('./patcher') // Importa el módulo extender.js

logger.log('This is an informational message') // Registra un mensaje con la función log
logger.customMessage() // Llama a la función personalizada

