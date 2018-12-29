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

    sequelize.sync()
}

export default Message