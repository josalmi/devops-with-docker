import Sequelize from 'sequelize'
import sequelize from '../database/connection'

let Message

const sync = async sequelize => {
    try {
        await sequelize.sync()
    } catch (err) {
        console.error(err)
        console.log('Errored before messages were initialized in database')
        process.exit(1)
    }
}

if (sequelize) {
    Message = sequelize.define('message', {
        body: Sequelize.STRING,
    }, {
        tablename: 'messages',
        timestamps: true
    });

    sync(sequelize)
}

export default Message