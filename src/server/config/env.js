//flow
type $ENV_FILE = {
    parsed: {
        PORT:number,
        POSTGRES_PORT:number,
        POSTGRES_USER:string,
        POSTGRES_HOST:string,
        POSTGRES_DATABASE:string,
        POSTGRES_PASSWORD:string
    }
}

// $FlowFixMe - I've never found a clean way to do this
export const ENV_FILE: $ENV_FILE = require('dotenv').config()

export const PRODUCTION: boolean = process.env.NODE_ENV === 'production'

export const PORT: number = ENV_FILE.parsed.NODE_PORT != null
  ? parseInt(ENV_FILE.parsed.NODE_PORT, 10)
  : 5001;

export const DB = {
    port: ENV_FILE.parsed.POSTGRES_PORT,
    user: ENV_FILE.parsed.POSTGRES_USER,
    host: ENV_FILE.parsed.POSTGRES_HOST,
    database: ENV_FILE.parsed.POSTGRES_DATABASE,
    password: ENV_FILE.parsed.POSTGRES_PASSWORD,
}

