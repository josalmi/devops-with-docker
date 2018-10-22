require('dotenv').config()

module.exports.NODE_ENV = process.env.NODE_ENV || 'development'

module.exports.DB_URL = process.env.DB_URL

module.exports.PORT = process.env.PORT || 8000

module.exports.FRONT_URL = process.env.FRONT_URL || ""