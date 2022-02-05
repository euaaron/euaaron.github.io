export const PRODUCTION = process.env.NODE_ENV === 'production';
export const LIVE_API = String(process.env.REACT_APP_LIVE_API);

const Environment = {
  PRODUCTION,
  LIVE_API,
}

export default Environment;