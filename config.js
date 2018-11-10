require('dotenv').config()

module.exports.NODE_ENV = process.env.NODE_ENV || 'development'

module.exports.DB = {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME || process.env.DB_USERNAME,
    host: process.env.DB_HOST || 'localhost'
}

module.exports.PORT = process.env.PORT || 8000

module.exports.FRONT_URL = process.env.FRONT_URL || ""

module.exports.REDIS = process.env.REDIS

module.exports.REDIS_PORT = process.env.REDIS_PORT || 6379
