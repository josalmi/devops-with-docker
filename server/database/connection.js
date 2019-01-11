import { DB } from '../../config'
import Sequelize from 'sequelize'
let sequelize

if (DB.username && DB.password) {
    try {
        sequelize = new Sequelize(DB.database, DB.username, DB.password, {
            host: DB.host,
            dialect: 'postgres'
        });
    } catch (err) {
        console.log(err, 'Exiting before making connection')
        process.exit(1);
    }
}

export default sequelize