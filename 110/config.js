require('dotenv').config()

module.exports.NODE_ENV = process.env.NODE_ENV || 'development'

module.exports.PORT = process.env.PORT || 8000