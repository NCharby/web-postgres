//flow
type $ENV_FILE = {
    parsed: {
        PIXABAY_API_KEY: string,
    }
}

// $FlowFixMe - I've never found a clean way to do this
export const ENV_FILE: $ENV_FILE = require('dotenv').config()

export const PRODUCTION: boolean = process.env.NODE_ENV === 'production'

export const PORT: number = ENV_FILE.parsed.NODE_PORT != null
  ? parseInt(ENV_FILE.parsed.NODE_PORT, 10)
  : 5001;

