import dotenv from 'dotenv';
dotenv.config();

export const PRODUCTION = process.env.NODE_ENV === 'production';
export const LIVE_API = String(process.env.LIVE_API);

const Environment = {
  PRODUCTION,
  LIVE_API,
}

export default Environment;