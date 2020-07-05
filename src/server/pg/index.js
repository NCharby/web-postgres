import { Pool } from 'pg'
import CONFIG from '../config/index'


export default new Pool({
    user: CONFIG.DB.user,
    host: CONFIG.DB.host,
    database: CONFIG.DB.database,
    password: CONFIG.DB.password,
    port: CONFIG.DB.port,
})