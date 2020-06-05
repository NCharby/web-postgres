//flow
import { ENV_FILE, PRODUCTION, PORT } from './env'

export default {
    ENV: ENV_FILE.parsed, 
    PRODUCTION, 
    PORT
}