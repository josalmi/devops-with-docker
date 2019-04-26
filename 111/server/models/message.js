import Sequelize from 'sequelize'
import sequelize from '../database/connection'

let Message

if (sequelize) {
  Message = sequelize.define('message', {
    body: Sequelize.STRING,
  }, {
      tablename: 'messages',
      timestamps: true
    });
}

const promiseWait = (ms) => new Promise(resolve => setTimeout(resolve, ms));
const timeout = 3

const syncDBWithModels = async (sequelize, tries = 5) => {
  if (!sequelize) return
  try {
    console.log('Testing database connection')
    await sequelize.authenticate() // Test the connection
    console.log('Connection ok, syncing database with model.')
    await sequelize.sync()
    console.log('Database connection established!')
    return
  } catch (err) {
    if (!tries) {
      console.log(err, 'Database connection failed,')
      process.exit(1)
    }
    console.warn(err,
      'Connection to database database failed, tries left',
      tries,
      'trying again in', timeout, 'seconds')
  }
  await promiseWait(timeout * 1000)
  return syncDBWithModels(sequelize, tries - 1)
}

syncDBWithModels(sequelize)

export default Message