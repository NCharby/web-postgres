//flow
import { ENV_FILE, PRODUCTION, PORT, DB } from './env'


export default {
    ENV: ENV_FILE.parsed, 
    PRODUCTION, 
    PORT,
    DB
}