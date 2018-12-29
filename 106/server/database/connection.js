import { DB } from '../../config'
import Sequelize from 'sequelize'
let sequelize

if (DB.username && DB.password) {
    sequelize = new Sequelize(DB.database, DB.username, DB.password, {
        host: DB.host,
        dialect: 'postgres'
    });
}

export default sequelize